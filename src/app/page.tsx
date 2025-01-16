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
    .select()

  if (error) {
    throw new Error("Supabase could not fetch data");
  } else {
    console.log("Fetched groups data", groups)
  }

  return (
    <>
    {/* MAIN SCREEN */}
    <div className="h-full">
      <GroupsTable groupData={groups!} />
    </div>

      {/* Side Panel */}
      <div>

      </div>
    </>

  );
}