import {Header} from "@/components/layout/Header.tsx";
import {Footer} from "@/components/layout/Footer.tsx";
import {Outlet} from "react-router";
import type {UserType} from "@/lib/types.tsx";
import type {State} from "@epfl-si/react-appauth";
import {env} from "@/lib/env.tsx";
import {useTranslation} from "react-i18next";
import {Info} from "lucide-react";

export const Layout = ({ user, oidc }: { user: UserType, oidc: State }) => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col h-screen">
      <Header user={user} onLogin={() => oidc.login()}
              onLogout={() => oidc.logout()}/>
      <div className="p-4 sm:p-8 w-full 2xl:max-w-[90%] 3xl:max-w-[80%] mx-auto flex-1">
        {env().ENVIRONMENT !== 'prod' && <div className="environment">
          {t('environment', { environment: env().ENVIRONMENT ?? 'LOCAL' })}</div>}

        {user.username && <div className="gap-2 flex flex-row mb-5 border-gray-200 border-1 p-2 font-bold justify-center items-center"
              style={{color: "#4a90e2", fontSize: "large"}}>
          <Info style={{width: "40px", height: "40px", color: "#4a90e2"}}/>
          {t("app.infoSavingDetails")}
        </div>}

        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
