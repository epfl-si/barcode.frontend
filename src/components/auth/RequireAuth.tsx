import {type State, StateEnum} from "@epfl-si/react-appauth";
import { Outlet } from "react-router";
import {useTranslation} from "react-i18next";

export const RequireAuth = ({ oidc }: { oidc: State }) => {
  const { t } = useTranslation();
  if (oidc.state === StateEnum.InProgress) {
    return <div className="flex justify-center items-center h-full p-10">{t("loading")}</div>;
  }

  if (oidc.state !== StateEnum.LoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">{t("access_error")}</h2>
        <p className="text-gray-600 mb-6">{t("access_error_msg")}</p>
      </div>
    );
  }

  return <Outlet />;
};
