gdjs.evtTools.camera=gdjs.evtTools.camera||{},gdjs.evtTools.camera.setCameraX=function(e,a,t,r){e.hasLayer(t)&&e.getLayer(t).setCameraX(a,r)},gdjs.evtTools.camera.setCameraY=function(e,a,t,r){e.hasLayer(t)&&e.getLayer(t).setCameraY(a,r)},gdjs.evtTools.camera.getCameraX=function(e,a,t){return e.hasLayer(a)?e.getLayer(a).getCameraX():0},gdjs.evtTools.camera.getCameraY=function(e,a,t){return e.hasLayer(a)?e.getLayer(a).getCameraY():0},gdjs.evtTools.camera.getCameraWidth=function(e,a,t){return e.hasLayer(a)?e.getLayer(a).getCameraWidth():0},gdjs.evtTools.camera.getCameraHeight=function(e,a,t){return e.hasLayer(a)?e.getLayer(a).getCameraHeight():0},gdjs.evtTools.camera.showLayer=function(e,a){if(e.hasLayer(a))return e.getLayer(a).show(!0)},gdjs.evtTools.camera.hideLayer=function(e,a){if(e.hasLayer(a))return e.getLayer(a).show(!1)},gdjs.evtTools.camera.layerIsVisible=function(e,a){return e.hasLayer(a)&&e.getLayer(a).isVisible()},gdjs.evtTools.camera.setCameraRotation=function(e,a,t,r){if(e.hasLayer(t))return e.getLayer(t).setCameraRotation(a,r)},gdjs.evtTools.camera.getCameraRotation=function(e,a,t){return e.hasLayer(a)?e.getLayer(a).getCameraRotation(t):0},gdjs.evtTools.camera.setCameraZoom=function(e,a,t,r){if(e.hasLayer(t))return e.getLayer(t).setCameraZoom(a,r)},gdjs.evtTools.camera.centerCamera=function(e,a,t,r,s){if(e.hasLayer(r)&&null!=a){var r=e.getLayer(r),o=0,g=0;if(t&&!a.hasNoForces()){var n=a.getAverageForce(),m=a.getElapsedTime(e)/1e3;o=n.getX()*m,g=n.getY()*m}r.setCameraX(a.getDrawableX()+a.getCenterX(),s),r.setCameraY(a.getDrawableY()+a.getCenterY(),s)}},gdjs.evtTools.camera.centerCameraWithinLimits=function(e,a,t,r,s,o,g,n,m){if(e.hasLayer(n)&&null!=a){var n=e.getLayer(n),i=0,c=0;if(g&&!a.hasNoForces()){var f=a.getAverageForce(),y=a.getElapsedTime(e)/1e3;i=f.getX()*y,c=f.getY()*y}var L=a.getDrawableX()+a.getCenterX()+i;L<t+n.getCameraWidth(m)/2&&(L=t+n.getCameraWidth(m)/2),L>s-n.getCameraWidth(m)/2&&(L=s-n.getCameraWidth(m)/2);var l=a.getDrawableY()+a.getCenterY()+c;l<r+n.getCameraHeight(m)/2&&(l=r+n.getCameraHeight(m)/2),l>o-n.getCameraHeight(m)/2&&(l=o-n.getCameraHeight(m)/2),n.setCameraX(L,m),n.setCameraY(l,m)}},gdjs.evtTools.camera.setLayerEffectDoubleParameter=function(e,a,t,r,s){if(e.hasLayer(a))return e.getLayer(a).setEffectDoubleParameter(t,r,s)},gdjs.evtTools.camera.setLayerEffectStringParameter=function(e,a,t,r,s){if(e.hasLayer(a))return e.getLayer(a).setEffectStringParameter(t,r,s)},gdjs.evtTools.camera.setLayerEffectBooleanParameter=function(e,a,t,r,s){if(e.hasLayer(a))return e.getLayer(a).setEffectBooleanParameter(t,r,s)},gdjs.evtTools.camera.enableLayerEffect=function(e,a,t,r){e.hasLayer(a)&&e.getLayer(a).enableEffect(t,r)},gdjs.evtTools.camera.layerEffectEnabled=function(e,a,t){return!e.hasLayer(a)||e.getLayer(a).isEffectEnabled(t)},gdjs.evtTools.camera.setLayerTimeScale=function(e,a,t){if(e.hasLayer(a))return e.getLayer(a).setTimeScale(t)},gdjs.evtTools.camera.getLayerTimeScale=function(e,a){return e.hasLayer(a)?e.getLayer(a).getTimeScale():1};