import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { useMemo, useState } from "react";
import { SearchIcon } from "../../../../../public/assets/svg";
import { cn } from "@/libs/cn";
import cities from "../../../../../public/assets/json/city.json";
import { clearString } from "@/utils/format";

const WeatherSearch = ({ setCityName }: { setCityName: React.Dispatch<React.SetStateAction<string>> }) => {
    const [selectedCity, setSelectedCity] = useState<any>(cities[0]);
    const [query, setQuery] = useState("");

    let searchData = cities.filter((city) => clearString(city).includes(clearString(query))).slice(0, 5);

    return (
        <Combobox value={selectedCity} onChange={setSelectedCity} onClose={() => setQuery("")}>
            <div className="relative">
                <ComboboxInput
                    className={cn(
                        "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                    onKeyDown={(event) => {
                        event.key === "Enter" && setCityName(query);
                    }}
                    displayValue={(city: string) => city}
                    onChange={(event) => {
                        setQuery(event.target.value);
                    }}
                />
                <ComboboxButton onClick={() => setCityName(query)} className="group absolute inset-y-0 right-0 px-2.5">
                    <SearchIcon className="size-4 " />
                </ComboboxButton>
            </div>
            <ComboboxOptions
                anchor="bottom"
                transition
                className={cn(
                    "w-[var(--input-width)] z-10 mt-2 rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
                    "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
                )}
            >
                {searchData?.map((city) => (
                    <ComboboxOption
                        key={city}
                        value={city}
                        onClick={() => setCityName(city)}
                        className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                    >
                        <div className="text-sm/6 text-white">{city}</div>
                    </ComboboxOption>
                ))}
            </ComboboxOptions>
        </Combobox>
    );
};

export default WeatherSearch;
