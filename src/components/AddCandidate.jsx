import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export const AddCandidate = () => {
  const [selectedPeople, setSelectedPeople] = useState([]);
  const names = selectedPeople.map(person => person.name);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      multiple
      value={selectedPeople}
      onChange={setSelectedPeople}
      onClose={() => {setQuery(""); console.log(selectedPeople) }}>
      <ComboboxInput
        aria-label="Assignees"
        value={names}
        onChange={(event) => setQuery(event.target.value)}
        className="bg-slate-100 w-full py-2 px-2"
      />
      <ComboboxOptions anchor="bottom start" className="border empty:invisible">
        {filteredPeople.map((person) => (
          <ComboboxOption
            key={person.id}
            value={person.name}
            className="data-[focus]:bg-blue-100 bg-white p-2">
            {person.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  );
};
