import GroupsTable from "./components/GroupsTable";
import { supabase } from "@/utils/supabase/supabaseClient";
import InfoPanel from "./components/InfoPanel";

// Main screen (show only groups table for now);

export interface GroupData {
  group_name: string,
  project_type: string,
  labels: string[],
  members: number,
  last_active: string,
}

export default async function Home() {

  const { data: groups, error } = await supabase
    .from('groups')
    .select().order('group_name', { ascending: true });

  if (error) {
    throw new Error("Supabase could not fetch data");
  } else {
    console.log("Fetched groups data", groups)
  }

  return (
    <div className="h-full flex flex-row">
      {/* MAIN SCREEN */}
      <div className="h-full w-3/4">
        <GroupsTable groupData={groups!} />
      </div>

      {/* Side Panel */}
      <div className="flex-1">
        <InfoPanel group={groups[0]}/>
      </div>
    </div>

  );
}