import GroupsTable from "./components/GroupsTable";
import { supabase } from "@/utils/supabase/supabaseClient";

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
    .select('*')

  if (error) {
    throw new Error("Supabase could not fetch data");
  } else {
    console.log("Fetched groups data", groups)
  }

  return (
    <div className="flex flex-row">

      {/* Main screen display */}
      <div className="w-3/4">
        <GroupsTable groupData={groups!} />
      </div>
      
      {/* Right Info Panel */}
      <div className="border flex-1">

      </div>
    </div>
  );
}