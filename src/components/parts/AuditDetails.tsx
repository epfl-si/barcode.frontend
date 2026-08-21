import {useTranslation} from "react-i18next";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";

export const AuditDetails = ({ createdBy, createdOn, deletedBy, deletedOn, visibility, title, font }: {
  createdBy: string,
  createdOn: Date,
  deletedBy: string,
  deletedOn: Date,
  visibility: 'text' | 'tooltip',
  title?: string,
  font : 'bold' | 'small'
}) => {
  const { t } = useTranslation();

  function getAuditDiv() {
    return <div style={{display: 'flex', flexDirection: 'column'}} className={`mt-2 mb-6 ${visibility === 'text' ? 'text-sm text-gray-500' : 'text-xs text-gray-500'}`}>
      {t('app.createdBy')} {createdBy} {t('app.onDate')} {new Date(createdOn).toLocaleDateString('fr-CH')}
      {deletedBy && deletedOn &&
        <span className="text-red-500 font-medium">
          {t('app.deletedBy')} {deletedBy} {t('app.onDate')} {new Date(deletedOn).toLocaleDateString('fr-CH')}
        </span>
      }
    </div>
  }

  return (
    <>
      {visibility === 'text' ? getAuditDiv() :
        <Tooltip>
          <TooltipTrigger asChild>
            <span className={`${font === 'bold' ? 'font-bold' : 'text-sm'} ${deletedBy ? 'line-through opacity-50' : ''} flex-1`}>{title}</span>
          </TooltipTrigger>
          <TooltipContent>
            {getAuditDiv()}
          </TooltipContent>
        </Tooltip>
      }
    </>
  );
};
