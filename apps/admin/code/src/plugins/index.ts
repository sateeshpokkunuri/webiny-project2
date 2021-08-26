import { plugins } from "@webiny/plugins";
import welcomeScreenPlugins from "@webiny/app-plugin-admin-welcome-screen";
import routeNotFound from "./routeNotFound";
import basePlugins from "./base";
import apolloLinkPlugins from "./apolloLinks";
import adminPlugins from "./admin";
import i18nPlugins from "./i18n";
import i18nContentPlugins from "./i18nContent";
import securityPlugins from "./security";
import pageBuilderPlugins from "./pageBuilder";
import formBuilderPlugins from "./formBuilder";
import headlessCmsPlugins from "./headlessCms";
import theme from "theme";

// Imports plugins created via scaffolding utilities.
import scaffoldsPlugins from "./scaffolds";

plugins.register([
    /**
     * Base app plugins (files, images).
     */
    basePlugins,
    /**
     * ApolloClient link plugins.
     */
    apolloLinkPlugins,
    /**
     * Complete admin app UI.
     */
    adminPlugins,
    /**
     * Renders a welcome screen with useful links at "/".
     */
    welcomeScreenPlugins(),
    /**
     * Handles location paths that don't have a corresponding route.
     */
    routeNotFound,
    /**
     * Internationalization app.
     */
    i18nPlugins,
    /**
     * Enables storing content (pages, forms, content, ...) in multiple locales.
     */
    i18nContentPlugins,
    /**
     * Security app and authentication plugins.
     */
    securityPlugins,
    /**
     * Page Builder app.
     */
<<<<<<< HEAD
    pageBuilderPlugins,
    /**
     * Form Builder app.
     */
    formBuilderPlugins,
=======
    //pageBuilderPlugins,
    /**
     * Form Builder app.
     */
    //formBuilderPlugins,
>>>>>>> c4fc1d3b2dd3bae2fed31ca54756a01b8f08d503
    /**
     * Headless CMS app.
     */
    headlessCmsPlugins,
    /**
     * App theme controls page builder and form builder layouts, styles, etc.
     */
    theme(),
    /**
     * Plugins created via scaffolding utilities.
     */
    scaffoldsPlugins()
]);
