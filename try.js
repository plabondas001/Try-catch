try {
  console.log("Hello");
  console.log(world);
} catch (error) {
  // error
  console.error(error);
  // kon type er error ei ta dekhar jonno
  console.log(error.name);
  // error message
  console.log(error.message);
} 

// finally block
finally {
  console.log(`My name is Plabon`);
}
