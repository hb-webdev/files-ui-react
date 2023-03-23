import { IconsMap, Localization } from "../core";

export type FilesUiConfig = {
    /**
     * If true, dark mode colors are used in FileMosaic and FIleCard components.
     */
    darkMode?: boolean;
    /**
     * Set of icons to override the existing ones
     */
    icons?: IconsConfig;
    /**
     * The language in which text labels are shown.
     * @default "EN-en"
     */
    localization?: Localization;
    //fontFamily?:string;
}

export type IconsConfig = IconsMap;