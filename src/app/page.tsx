"use client"
//import {AuthScreen} from "@/features/auth/components/auth-screen";

//import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";

import { UserButton } from "@/features/auth/components/user-button";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const [open, setOpen ] = useCreateWorkspaceModal();

  const { data ,isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);
  
  useEffect(() => {

    if (isLoading) return ;

    if (workspaceId) {
      router.replace(`/workspace/${workspaceId}`);
    } else if (!open){
      setOpen(true);
    }
  }, [workspaceId, isLoading, open, setOpen, router]);

  
  return(
    <div>
      <UserButton/>
    </div>
  );
  
  }

