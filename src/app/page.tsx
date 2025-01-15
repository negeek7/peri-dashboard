import Image from "next/image";
import GroupsTable from "./components/GroupsTable";
import { supabase } from "@/utils/supabase/supabaseClient";



// Main screen (show only groups table for now);

export interface MockData {
  groupName: string,
  project: string,
  labels: string[],
  members: number,
  lastActive: string,
}

export default async function Home() {

  const mockData = [
    {
      "groupName": "Evoke <-> Skope",
      "project": "Demo",
      "labels": ["High Priority"],
      "members": 3,
      "lastActive": "03:17"
    },
    {
      "groupName": "Xindus Trade Network <-> Periskope",
      "project": "Clients",
      "labels": ["Pilot", "Priority"],
      "members": 8,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Runo <-> Periskope",
      "project": "Clients",
      "labels": [],
      "members": 5,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Skope Test Group <-> 8",
      "project": "Demo",
      "labels": ["Pilot", "Priority"],
      "members": 4,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Isprava <-> Periskope WhatsApp CRM",
      "project": "Clients",
      "labels": ["Priority"],
      "members": 6,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Test Demo15",
      "project": "Demo",
      "labels": ["Pilot"],
      "members": 3,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Vasishta <-> Periskope",
      "project": "Clients",
      "labels": [],
      "members": 4,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Spyne <-> Periskope",
      "project": "Clients",
      "labels": [],
      "members": 4,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Xeno <-> Periskope",
      "project": "Clients",
      "labels": [],
      "members": 4,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Saveo <-> Periskope",
      "project": "Clients",
      "labels": [],
      "members": 4,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "NovaBenefits <-> Periskope",
      "project": "Clients",
      "labels": [],
      "members": 5,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "TBC <-> Periskope",
      "project": "Clients",
      "labels": ["Error"],
      "members": 3,
      "lastActive": "Yesterday"
    },
    {
      "groupName": "Test Demo16",
      "project": "Demo",
      "labels": ["Priority"],
      "members": 4,
      "lastActive": "Yesterday"
    }
  ]



  const data = await supabase.from("groups").select();
  console.log(data,"ADARTDATAAAAAA")

  console.log()

  return (
    <div className="flex flex-row h-screen">
      <div  className="w-3/4 ">
        <GroupsTable mockData={mockData} />
      </div>
      {/* Right Info Panel */}
      <div className="border flex-1">

      </div>
    </div>
  );
}
