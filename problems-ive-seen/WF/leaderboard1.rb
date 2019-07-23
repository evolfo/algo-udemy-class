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

require 'time'

class LeaderBoard 
  attr_accessor :sorted_players

  @@all = []

  def initialize()
    @sorted_players = []

    @@all << self
  end
  
  def add_score(player_id, score, time)

    p = player(player_id)
    # if player exists, only create a new instance of the score class
    if !!p 
      Score.new(score, p, time)
    else
      #if player doesn't exist, create a new player and a new score
      p = Player.new(player_id, self)
      s = Score.new(score, p, time)
    end
    @sorted_players = Player.all.sort {|p1, p2| p1.average_score <=> p2.average_score}

    p.average_score
  end
  
  def top(num_players)
    #sorting all the players by their avg score
    # .sort uses quick sort I believe, n(log(n)) time/space complexity
    # sortedP = Player.all.sort {|p1, p2| p1.average_score <=> p2.average_score}
    #reversing so that the highest avg scores come first
    @sorted_players.reverse.map do |p|
      p.id
    end[0, num_players] # only returning the array from the 0 index to the input number index
  end

  def bottom(num_players)
    #sorting all the players by their avg score
    # .sort uses quick sort I believe, n(log(n)) time/space complexity
    sortedP = Player.all.sort {|p1, p2| p1.average_score <=> p2.average_score}
    
    sortedP.map do |p|
      p.id
    end[0, num_players] # only returning the array from the 0 index to the input number index
  end
  
  def reset(player_id)
    #this is disassociating the scores from the input player, the score instances still exist but have no relationship to a player
    player(player_id).scores.map do |score|
      score.score = 0
    end
  end
  
  # private
  
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
    sum = 0

    scores.each do |score|
      if score.score != nil
        sum += score.score
      end
    end

    sum / (scores.length / 1.0)
    # scores.map do |score|
    #   if score.score != nil
    #     score.score
    #   end
    # end.reduce(:+) / (scores.length / 1.0) #.reduce(:+) sums all the numbers in the array
  end
end


# Initializing a Score helper class so that I don't have to store everything in a hash in the LeaderBoard Class
class Score
  attr_accessor :player, :score, :time
  
  @@all = []
  
  # Score has a score and belongs to a player
  def initialize(score, player, time)
    if !expired?(time)
      @player = player
      @score = score
      @time = time
      @@all << self
    end
  end

  def expired?(time)
    current_time = Time.now.to_i #converting to seconds
    time2 = Time.parse(time).to_i

    if current_time > time2
      true
    else
      false
    end
  end

  def self.all
    @@all
  end
end

# leader = LeaderBoard.new()
# player1 = Player.new(1, leader)
# score1 = Score.new(100, player1)

# leader.add_score(1, 100)
# leader.add_score(1, 200)
# leader.add_score(2, 123)
# leader.add_score(3, 1234)
# leader.add_score(2, 1848)
# leader.add_score(2, 10823)
# leader.add_score(4, 100)
# leader.add_score(5, 10)

# puts leader.reset(2)

# leader.add_score(2, 100)

leader_board = LeaderBoard.new()

# leader_board.add_score(1, 50)

# print(leader_board.add_score(2, 80) == 80)
# print(leader_board.add_score(2, 70) == 75)
# print(leader_board.add_score(2, 60) == 70)
# print(leader_board.add_score(3, 90) == 90)
# print(leader_board.add_score(3, 85) == 87.5)

# print(leader_board.top(3) == [3, 2, 1])
# print(leader_board.top(2) == [3, 2])
# puts(leader_board.bottom(3) == [1, 2, 3])
# puts(leader_board.bottom(2) == [1, 2])

# leader_board.reset(3)

# print(leader_board.top(3) == [2, 1, 3])
# puts leader_board.add_score(1, 100, '2019-08-03')
leader_board.add_score(1, 50, '2019-08-03')
leader_board.add_score(1, 50, '2019-08-03')
leader_board.add_score(1, 50, '2019-08-03')
leader_board.add_score(1, 50, '2019-08-03')
leader_board.add_score(2, 80, '2019-08-01')
leader_board.add_score(3, 160, '2019-08-01')
leader_board.add_score(4, 1000, '2019-08-01')

leader_board.reset(4)

puts leader_board.add_score(2, 80, '2019-08-01')
puts leader_board.top(3)

