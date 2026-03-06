(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: number) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(movieId: number) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getInfoActorById(id: number) {
    console.log({ id });
  }

  // Crear una película
  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function verifyFullName(fullName: string): boolean {
    console.log({ fullName });
    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (verifyFullName(fullName)) return false;

    console.log("Crear actor", birthdate);
    return true;
  }
})();
