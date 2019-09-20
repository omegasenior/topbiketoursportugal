import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import TourGenPreview from "./preview-templates/TourGenPreview";
import TourPagePreview from "./preview-templates/TourPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
 import NetlifyCmsWidgetUUID from "./widgets/netlifly-cms-widget-uuid";
import UUIDControl from "./widgets/netlifly-cms-widget-uuid/UUIDControl";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("blog", TourPagePreview);
CMS.registerPreviewTemplate("blog", TourGenPreview);

CMS.registerWidget('uuid',NetlifyCmsWidgetUUID.controlComponent,NetlifyCmsWidgetUUID.previewComponent);

