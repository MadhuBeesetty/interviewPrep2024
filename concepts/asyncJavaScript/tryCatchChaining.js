// ('https://dog.ceo/api/breeds/list/all');

// (`https://dog.ceo/api/breed/${firstDogBreed}/images/random`);

const callBackWithPromiseChaining = async () => {
  try {
    // First API call to get the list of breeds
    const apiresult = await fetch("https://dog.ceo/api/breeds/list/all");
    const output = await apiresult.json();

    if (output.status !== "success") {
      throw new Error("API call to get breeds failed");
    } else {
      return Object.keys(output.message);
    }
  } catch (error) {
    console.error("Error during first API call:", error.message);
    throw error; // Rethrow the error so it can be handled downstream
  }
};

callBackWithPromiseChaining()
  .then(async (breeds) => {
    try {
      // Second API call to get a random image of the first breed
      const breed = breeds[0];
      const apiresult = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      const output = await apiresult.json();

      if (output.status !== "success") {
        throw new Error("API call to get breed image failed");
      } else {
        console.log(`Random image of breed ${breed}:`, output.message);
      }
    } catch (error) {
      console.error("Error during second API call:", error.message);
    }
  })
  .catch((error) => {
    // Handle any errors that occurred in the first call
    console.error("Unhandled error:", error.message);
  });
