import { useEffect, useState } from "react";
import axios from "axios";

import { IActorProfile } from "~/src/Types/Shared/Types";
import { tmdbKey } from "~/src/Utils/Constants";

const useFetchActor = (actorId: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IActorProfile | null>(null);
  const [error, setError] = useState<boolean>(false);
  const url = `https://api.themoviedb.org/3/person/${actorId}?api_key=${tmdbKey}&language=en-US`;
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { data, isLoading, error };
};

export default useFetchActor;
