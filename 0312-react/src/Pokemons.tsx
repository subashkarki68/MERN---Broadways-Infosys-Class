import axios from "axios";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./components/ui/drawer";
import { Input } from "./components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from "./components/ui/pagination";
import { Skeleton } from "./components/ui/skeleton";

interface Pokemon {
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
  location_area_encounters: object;
}

function Pokemons() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [maxItems, setMaxItems] = useState(100);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const offSet = (page - 1) * limit;
        const fetcher = axios.get(url:string).then((res) => res.data);
        const { data } = await axios(
          `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`
        );
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const response = await axios(pokemon.url);
            const encountersResponse = await axios(
              response.data.location_area_encounters
            );
            return {
              ...response.data,
              location_area_encounters: encountersResponse.data,
            };
          })
        );
        setPokemonList(pokemonData);
        setLoading(false);
        setMaxItems(data.count);
      } catch (error) {
        console.error("Error fetching Pokemons:", error);
      }
    };
    fetchData();
  }, [page, limit]);

  return (
    <>
      <div className='flex mb-20'>
        <Pagination>
          <PaginationContent>
            <PaginationItem className='cursor-pointer'>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
              />
            </PaginationItem>
            <PaginationItem className='cursor-pointer'>
              <Input
                type='tel'
                placeholder={String(page)}
                className='w-20 remove-arrow'
                onChange={(e: any) => {
                  setPage(Math.max(e.target.value, 1));
                }}
              />
            </PaginationItem>
            <PaginationItem className='cursor-pointer'>
              <PaginationNext onClick={() => setPage((p) => p + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <Input
          type='number'
          placeholder='Limit'
          className='w-[180px] remove-arrow'
          onChange={(e) => setLimit(+e.target.value)}
        />
      </div>
      <div className='flex gap-10 flex-wrap justify-evenly'>
        {pokemonList.map((pokemon: any) => {
          const typeName = pokemon?.types[0]?.type?.name;
          const backgroundClass = typeName ? `bg-${typeName}` : "bg-normal";
          //TODO
          console.log(
            "🚀 ~ {pokemonList.map ~ backgroundClass:",
            backgroundClass
          );
          return (
            pokemon && (
              <Drawer key={pokemon?.id}>
                <DrawerTrigger asChild>
                  <Card
                    key={pokemon.id}
                    className='flex-row shadow-md hover:shadow-2xl hover:scale-110 duration-700 cursor-pointer'
                  >
                    <CardHeader className='flex-row justify-between'>
                      {loading && (
                        <Skeleton className='w-[50%] h-[30px]'></Skeleton>
                      )}
                      {!loading && (
                        <CardTitle>{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
                          1
                        )}`}</CardTitle>
                      )}
                      {loading && (
                        <Skeleton className='rounded-full w-12 h-12'></Skeleton>
                      )}
                      {!loading && (
                        <Avatar>
                          <AvatarImage
                            src={
                              pokemon?.sprites?.other?.showdown?.front_default
                            }
                          />
                        </Avatar>
                      )}
                    </CardHeader>
                    <div className='flex justify-center'>
                      <div className='w-3/4 block rounded-2xl border-2'></div>
                    </div>

                    <CardContent>
                      <div className=''>
                        {loading && (
                          <Skeleton className='w-[200px] h-[200px] rounded-lg' />
                        )}
                        {!loading && (
                          <img
                            src={pokemon?.sprites?.other?.home?.front_default}
                            alt={`Image of ${pokemon?.nlame}`}
                            width={"200px"}
                          />
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      {loading && <Skeleton className='w-16 h-5 rounded-2xl' />}
                      {!loading && (
                        <Badge variant={"destructive"}>
                          {pokemon.location_area_encounters.length < 2
                            ? "Very Rare"
                            : pokemon.location_area_encounters.length < 20
                            ? "Rare"
                            : pokemon.location_area_encounters.length < 40
                            ? "Common"
                            : "Very Common"}
                        </Badge>
                      )}
                    </CardFooter>
                  </Card>
                </DrawerTrigger>
                <DrawerContent className={backgroundClass}>
                  <DrawerHeader>
                    <div className='text-center'>
                      <h2 className='text-8xl text-white font-bold'>{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
                        1
                      )}`}</h2>
                    </div>
                  </DrawerHeader>
                  <DrawerDescription></DrawerDescription>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant='outline'>Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )
          );
        })}
      </div>
    </>
  );
}

export default Pokemons;
