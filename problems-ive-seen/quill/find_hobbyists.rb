def find_hobbyists(hobbies, hobby)
  arr = []
  
  hobbies.keys.each do |name|
    if hobbies[name].include?(hobby)
      arr << name
    end
  end
  
  arr
end

# Both solutions are O(n*m), trying to think of how to make it linear
# iterating through two arrays of seperate lengths


hobbies = {
    "John" => ['Piano', 'Puzzles', 'Yoga'],
    "Adam" => ['Drama', 'Fashion', 'Pets'],
    "Mary" => ['Magic', 'Pets', 'Reading']
}
  
puts find_hobbyists(hobbies, 'Yoga')