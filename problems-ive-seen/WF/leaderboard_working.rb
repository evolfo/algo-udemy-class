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

    # @sorted_players = Player.all.sort_by {|player| player.average_score}

    p.average_score
  end
  
  def top(num_players)
    #sorting all the players by their avg score
    # .sort uses quick sort I believe, n(log(n)) time/space complexity
    puts Player.all[0].average_score
    puts Player.all[1].average_score

    sortedP = Player.all.sort {|p1, p2| p1.average_score <=> p2.average_score}
    #reversing so that the highest avg scores come first
  
    sortedP.reverse.map do |p|
      p.id
    end[0, num_players] # only returning the array from the 0 index to the input number index
  end
  
  def reset(player_id)
    player(player_id).scores.map do |score|
      score.score = 0
    end

    # @sorted_players = Player.all.sort_by {|player| player.average_score}
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
    if scores.length / 1.0 == 0
      return 0
    end

    sum = 0

    scores.each do |score|
      if score.score.class == Integer
        sum += score.score
      end
    end

    sum / (scores.length / 1.0)
    # scores.map do |score|
    #   if score.score
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
      @score = score
      @player = player
      @time = time
      @@all << self
    end
  end

  def expired?(time)
    current_time = Time.now.to_i
    time2 = Time.parse(time).to_i

    if current_time > time2 
      true #this means it is expired
    else
      false
    end
  end

  def self.all
    @@all
  end
end

leader_board = LeaderBoard.new

# leader_board.add_score(1, 50)

# print(leader_board.add_score(2, 80) == 80)
# print(leader_board.add_score(2, 70) == 75)
# print(leader_board.add_score(2, 60) == 70)
# print(leader_board.add_score(3, 90) == 90)
# print(leader_board.add_score(3, 85) == 87.5)

# print(leader_board.top(3) == [3, 2, 1])
# print(leader_board.top(2) == [3, 2])

# leader_board.reset(3)
# puts leader_board.player(3).average_score

# puts leader_board.top(3)
# print(leader_board.top(3) == [2, 1, 3])

leader_board.add_score(1, 50, '2019-08-03')
leader_board.add_score(2, 80, '2019-07-01')
leader_board.add_score(3, 100, '2019-07-01')
# print(leader_board.add_score(4, 1000, '2019-07-01') == 0)
# leader_board.add_score(3, 160, '2019-07-01')
# leader_board.add_score(4, 1000, '2019-07-01')
# leader_board.add_score(5, 500, '2019-07-01')

puts leader_board.top(5)

# leader_board.reset(4)

# puts leader_board.add_score(2, 80, '2019-08-01')
# puts leader_board.top(3)


