# // Create a class LeaderBoard whose interface includes the following methods:
# // Method Name: add_score
# //      - Add a new score to the player's average. If a player doesn't exist in the
# //      LeaderBoard, they will be automatically added.
# //      Args:
# //              player_id (Integer): The player's ID.
# //              score (Integer): The score to record for the player
# //      Returns:
# //              Double: The new average score for the given player
# // Method Name: top
# //      - Get the top player_ids on the leaderboard ordered by their average scores
# //      from highest to lowest
# //      Args:
# //              num_players (Integer): The maximum number of player_ids to return
# //      Returns:
# //              List<Integer>: a list of player_ids
# // Method Name: reset
# //      - Removes any scoring information for a player, effectively
# //      resetting them to 0
# //      Args:
# //              player_id (Integer): The player's ID.

class LeaderBoard 
  @@all = []

  def initialize()
    @@all << self
  end
  
  def add_score(player_id, score)
    p = player(player_id)
    # if player exists, only create a new instance of the score class
    if !!p 
      Score.new(score, p)
    else
      #if player doesn't exist, create a new player and a new score
      p = Player.new(player_id, self)
      s = Score.new(score, p)
    end
    
    p.average_score
  end
  
  def top(num_players)
    #sorting all the players by their avg score
    # .sort uses quick sort I believe, n(log(n)) time/space complexity
    sortedP = Player.all.sort {|p1, p2| p1.average_score <=> p2.average_score}
    #reversing so that the highest avg scores come first
    sortedP.reverse.map do |p|
      p.id
    end[0, num_players] # only returning the array from the 0 index to the input number index
  end
  
  def reset(player_id)
    #this is disassociating the scores from the input player, the score instances still exist but have no relationship to a player
    player(player_id).scores.map do |score|
      score = nil
      puts score
    end
  end
  
  private
  
  # Helper method, enables us to find this leaderboard's players
  def players
    Player.all.select do |player|
      player.leaderboard == self
    end
  end
  
  # Helper method, finding a specific player based on their ID
  def player(player_id)
    players.find do |player|
      player.id == player_id
    end
  end
end


# Initializing a Player helper class so that I don't have to store everything in a hash in the LeaderBoard Class
class Player
  attr_accessor :leaderboard, :id
  
  @@all = []
  
  def initialize(id, leaderboard)
    @id = id
    @leaderboard = leaderboard
    @@all << self
  end
  
  def self.all
    @@all
  end
  
  def scores
    Score.all.select do |score|
      score.player == self
    end
  end
  
  def average_score
    scores.map do |score|
      score.score
    end.reduce(:+) / scores.length #.reduce(:+) sums all the numbers in the array
  end
end


# Initializing a Score helper class so that I don't have to store everything in a hash in the LeaderBoard Class
class Score
  attr_accessor :player, :score
  
  @@all = []
  
  # Score has a score and belongs to a player
  def initialize(score, player)
    @score = score
    @player = player
    
    @@all << self
  end

  def self.all
    @@all
  end
end

leader = LeaderBoard.new()
player1 = Player.new(1, leader)
score1 = Score.new(100, player1)

leader.add_score(1, 100)
leader.add_score(1, 200)
leader.add_score(2, 123)
leader.add_score(3, 1234)
leader.add_score(2, 1848)
leader.add_score(2, 10823)
leader.add_score(4, 100)
leader.add_score(5, 10)

puts leader.reset(2)

leader.add_score(2, 100)

