// 2491. Divide Players Into Teams of Equal Skill

// You are given a positive integer array skill of even length n where skill[i] denotes the skill
// of the ith player. Divide the players into n / 2 teams of size 2 such that the total skill of each
//  team is equal.

// The chemistry of a team is equal to the product of the skills of the players on that team.

// Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the
// players into teams such that the total skill of each team is equal.

// Example 1:

// Input: skill = [3,2,5,1,3,4]
// Output: 22
// Explanation:
// Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.
// The sum of the chemistry of all the teams is: 1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = 22.
// Example 2:

// Input: skill = [3,4]
// Output: 12
// Explanation:
// The two players form a team with a total skill of 7.
// The chemistry of the team is 3 * 4 = 12.
// Example 3:

// Input: skill = [1,1,2,3]
// Output: -1
// Explanation:
// There is no way to divide the players into teams such that the total skill of each team is equal.

const dividePlayers = (skill) => {
  skill.sort((a, b) => a - b);
  let eachTeamSkill = skill[0] + skill[skill.length - 1];

  let output = [];
  while (skill.length > 0) {
      // Take the first element
      let part1 = skill[0];
      let complement = eachTeamSkill - part1;

      let part2Index = skill.indexOf(complement, 1);
      if (part2Index === -1) {
          return -1;
      }
      output.push([part1, skill[part2Index]]);

      skill.splice(part2Index, 1);
      skill.splice(0, 1);
  }

  let result = 0;
  for (let i = 0; i < output.length; i++) {
      result += output[i][0] * output[i][1];
  }

  return result;
};

console.log(dividePlayers([3,2,5,1,3,4]));
