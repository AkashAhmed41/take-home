import {
  BlockedDomainsIcon,
  DashboardIcon,
  ThreatDetectionIcon,
  AllowedDomainsIcon,
  ReportsIcon,
  HistoryOfIPIcon,
  DGADomainIcon,
  BackupRestoreIcon,
  SiteRiskIndicatorIcon,
  UsersIcon,
  SettingsIcon,
} from "@/lib/svg/SidebarIcons";
import { appRouteList } from "@/lib/utils/PageRouteUtils";

export const NavItems = [
  {
    icon: DashboardIcon,
    labelKey: "DASHBOARD",
    redirectTo: appRouteList.dashboard,
  },
  {
    icon: ThreatDetectionIcon,
    labelKey: "THREAT_DETECTION",
    redirectTo: null,
  },
  {
    icon: BlockedDomainsIcon,
    labelKey: "BLOCKED_DOMAINS",
    redirectTo: null,
  },
  {
    icon: AllowedDomainsIcon,
    labelKey: "ALLOWED_DOMAINS",
    redirectTo: null,
  },
  {
    icon: ReportsIcon,
    labelKey: "REPORTS",
    redirectTo: null,
  },
  {
    icon: HistoryOfIPIcon,
    labelKey: "HISTORY_OF_IP",
    redirectTo: null,
  },
  {
    icon: DGADomainIcon,
    labelKey: "DGA_DOMAIN",
    redirectTo: null,
  },
  {
    icon: BackupRestoreIcon,
    labelKey: "BACKUP_AND_RESTORE",
    redirectTo: null,
  },
  {
    icon: SiteRiskIndicatorIcon,
    labelKey: "SITE_RISK_INDICATOR",
    redirectTo: null,
  },
  {
    icon: UsersIcon,
    labelKey: "USERS",
    redirectTo: null,
  },
  {
    icon: SettingsIcon,
    labelKey: "SETTINGS",
    redirectTo: null,
  },
];
