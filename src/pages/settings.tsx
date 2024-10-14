import Head from "next/head";
import React from "react";

import { UserCurrencySection } from "@/components/organisms/user-currency-section";
import { PageTemplate } from "@/components/templates/page-template";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "@/config/metadata";

const SettingsPage = () => {
  return (
    <>
      <Head>
        <title>{Metadata.title.home} - Settings</title>
        <meta name="description" content={Metadata.description} />
      </Head>
      <PageTemplate className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <Separator />
        <UserCurrencySection />
      </PageTemplate>
    </>
  );
};

export default SettingsPage;
