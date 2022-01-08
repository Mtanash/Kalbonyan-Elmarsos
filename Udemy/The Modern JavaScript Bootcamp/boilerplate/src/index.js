const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(", ")}`);
};

printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry");
