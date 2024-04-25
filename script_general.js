(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","minHeight":0,"backgroundColor":["#FFFFFF"],"scripts":{"mixObject":TDV.Tour.Script.mixObject,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizStart":TDV.Tour.Script.quizStart,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizFinish":TDV.Tour.Script.quizFinish,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeJS":TDV.Tour.Script.executeJS,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getKey":TDV.Tour.Script.getKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"init":TDV.Tour.Script.init,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"createTween":TDV.Tour.Script.createTween,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"translate":TDV.Tour.Script.translate,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"clone":TDV.Tour.Script.clone,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setValue":TDV.Tour.Script.setValue,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"openLink":TDV.Tour.Script.openLink,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"registerKey":TDV.Tour.Script.registerKey,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPixels":TDV.Tour.Script.getPixels,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility},"data":{"history":{},"defaultLocale":"pt","textToSpeechConfig":{"rate":1,"speechOnInfoWindow":false,"pitch":1,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false},"locales":{"pt":"locale/pt.txt"},"name":"Player438"},"backgroundColorRatios":[0],"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer"],"hash": "79bf3f6c3248c2915a4c269f2b20d21d536c0325ee3ad815f527aaee67ebe3bc", "definitions": [{"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","aaEnabled":true},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E_camera","media":"this.panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E"}]},{"id":"MainViewer","vrPointerSelectionColor":"#FF6600","playbackBarBorderSize":0,"toolTipPaddingLeft":6,"vrPointerSelectionTime":2000,"subtitlesFontSize":"3vmin","playbackBarBackgroundColor":["#FFFFFF"],"data":{"name":"Main Viewer"},"subtitlesGap":0,"progressBorderRadius":2,"subtitlesTop":0,"vrThumbstickRotationStep":20,"subtitlesFontFamily":"Arial","progressBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","firstTransitionDuration":0,"playbackBarHeight":10,"subtitlesTextShadowVerticalLength":1,"width":"100%","toolTipFontSize":"1.11vmin","toolTipPaddingTop":4,"progressBackgroundColor":["#000000"],"toolTipFontFamily":"Arial","propagateClick":false,"playbackBarBackgroundOpacity":1,"height":"100%","progressBottom":10,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","progressHeight":2,"minHeight":50,"progressBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarRight":0,"surfaceReticleSelectionColor":"#FFFFFF","minWidth":100,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadHeight":15,"subtitlesBackgroundOpacity":0.2,"progressLeft":"33%","playbackBarHeadWidth":6,"toolTipShadowColor":"#333138","toolTipPaddingRight":6,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":2,"progressBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"progressOpacity":0.7,"progressRight":"33%","playbackBarBorderRadius":0,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBackgroundColor":["#111111","#666666"],"class":"ViewerArea","subtitlesTextShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarBottom":5,"progressBarBorderColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesBottom":50,"subtitlesTextShadowOpacity":1,"progressBarBackgroundColorRatios":[0]},{"id":"panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E","label":trans('panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E.label'),"hfovMax":130,"hfov":360,"data":{"label":"DJI_0049"},"frames":[{"cube":{"levels":[{"tags":"ondemand","height":3072,"class":"TiledImageResourceLevel","colCount":36,"url":"media/panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E_0/{face}/0/{row}_{column}.jpg","rowCount":6,"width":18432},{"tags":"ondemand","height":1536,"class":"TiledImageResourceLevel","colCount":18,"url":"media/panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E_0/{face}/1/{row}_{column}.jpg","rowCount":3,"width":9216},{"tags":"ondemand","height":1024,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E_0/{face}/2/{row}_{column}.jpg","rowCount":2,"width":6144},{"tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E_0/{face}/3/{row}_{column}.jpg","rowCount":1,"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E_t.jpg"}],"class":"Panorama","hfovMin":"120%","overlays":["this.overlay_D308DF49_DC04_8BFF_41E5_D3B9D8DC47A7","this.overlay_D2DED577_DC04_7F93_41E4_A098E3F9F18C","this.overlay_D3F8FE4F_DC04_8DF3_41BC_CB6AEE664844","this.overlay_D2BAFCF4_DC3F_8E95_41B6_884247770E24","this.overlay_D3218607_DC3C_9D72_41E0_472A3D3E11BE","this.overlay_D290C9D4_DC05_9696_41EA_132D51D72366","this.overlay_CC6516B9_DC05_BA9F_41EA_28D62DA803BF"],"vfov":180,"thumbnailUrl":"media/panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E_t.jpg"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_D163A49F_DBFC_BE92_41D2_88D11E17BD3E_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_D146715C_DBFC_9796_41EA_759B25170D48"},{"id":"overlay_D308DF49_DC04_8BFF_41E5_D3B9D8DC47A7","maps":[],"data":{"label":"01"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":0.26,"hfov":10.5,"yaw":-58.59,"data":{"label":"01"},"image":"this.res_D3B48A84_DC1C_9576_419F_4B5B297688D9","vfov":9.36,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D293000E_DC04_9572_41DE_12CDBBC0BD5D"],"enabledInCardboard":true},{"id":"overlay_D2DED577_DC04_7F93_41E4_A098E3F9F18C","maps":[],"data":{"label":"02"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":-5.02,"hfov":10.5,"yaw":-13.26,"data":{"label":"02"},"image":"this.res_D3B58A86_DC1C_9572_41B2_B7EFC0DDAF23","vfov":9.36,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D252F5E7_DC04_7EB2_41E1_697BF70C7E0E"],"enabledInCardboard":true},{"id":"overlay_D3F8FE4F_DC04_8DF3_41BC_CB6AEE664844","maps":[],"data":{"label":"03"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":2.32,"hfov":10.5,"yaw":-28.08,"data":{"label":"03"},"image":"this.res_D3B5AA86_DC1C_9572_41C7_23676316D8B5","vfov":9.36,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D2BF7EAB_DC04_8AB3_41D3_D93487D32BFC"],"enabledInCardboard":true},{"id":"overlay_D2BAFCF4_DC3F_8E95_41B6_884247770E24","maps":[],"data":{"label":"06"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":3.6,"hfov":10.83,"yaw":-155.61,"data":{"label":"06"},"image":"this.res_D3B65A86_DC1C_9572_41D6_FFDB276A0790","vfov":9.65,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D2475D63_DC3F_8FB2_41E2_7DAE6E0EE272"],"enabledInCardboard":true},{"id":"overlay_D3218607_DC3C_9D72_41E0_472A3D3E11BE","maps":[],"data":{"label":"05"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":-2.77,"hfov":9.64,"yaw":84.22,"data":{"label":"05"},"image":"this.res_D3B64A86_DC1C_9572_41EB_06ACD1D52681","vfov":8.59,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D220A675_DC3C_9D96_41E3_AC253C1A7AC2"],"enabledInCardboard":true},{"id":"overlay_D290C9D4_DC05_9696_41EA_132D51D72366","maps":[],"data":{"label":"04"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":1.16,"hfov":9.64,"yaw":15.67,"data":{"label":"04"},"image":"this.res_D3B66A86_DC1C_9572_41D8_16CDB48F5624","vfov":8.59,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D2AA0A57_DC05_9593_4198_DB5DE93C2123"],"enabledInCardboard":true},{"id":"overlay_CC6516B9_DC05_BA9F_41EA_28D62DA803BF","maps":[],"data":{"label":"07"},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"pitch":-27.38,"hfov":26.08,"yaw":1.72,"data":{"label":"07"},"image":"this.res_CD973D63_DC0D_8FB2_41DF_6532A0F6A5BB","vfov":17.32,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D3ED7739_DC05_BB9E_41E6_55505BBB39B5"],"enabledInCardboard":true},{"id":"sequence_D146715C_DBFC_9796_41EA_759B25170D48","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]},{"id":"res_D3B48A84_DC1C_9576_419F_4B5B297688D9","class":"ImageResource","levels":[{"height":301,"class":"ImageResourceLevel","url":"media/res_D3B48A84_DC1C_9576_419F_4B5B297688D9_0.png","width":337}]},{"id":"HotspotPanoramaOverlayArea_D293000E_DC04_9572_41DE_12CDBBC0BD5D","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_D3CBB6AC_DC0C_9AB5_41D8_93C70B0E2D6F.source'), '_blank')"},{"id":"res_D3B58A86_DC1C_9572_41B2_B7EFC0DDAF23","class":"ImageResource","levels":[{"height":301,"class":"ImageResourceLevel","url":"media/res_D3B58A86_DC1C_9572_41B2_B7EFC0DDAF23_0.png","width":337}]},{"id":"HotspotPanoramaOverlayArea_D252F5E7_DC04_7EB2_41E1_697BF70C7E0E","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_CD33B6AE_DC0C_FAB2_41D6_CD85E39FC1B0.source'), '_blank')"},{"id":"res_D3B5AA86_DC1C_9572_41C7_23676316D8B5","class":"ImageResource","levels":[{"height":301,"class":"ImageResourceLevel","url":"media/res_D3B5AA86_DC1C_9572_41C7_23676316D8B5_0.png","width":337}]},{"id":"HotspotPanoramaOverlayArea_D2BF7EAB_DC04_8AB3_41D3_D93487D32BFC","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_CC86F49F_DC0C_9E93_41D9_65D65DA0EFA3.source'), '_blank')"},{"id":"res_D3B65A86_DC1C_9572_41D6_FFDB276A0790","class":"ImageResource","levels":[{"height":310,"class":"ImageResourceLevel","url":"media/res_D3B65A86_DC1C_9572_41D6_FFDB276A0790_0.png","width":348}]},{"id":"HotspotPanoramaOverlayArea_D2475D63_DC3F_8FB2_41E2_7DAE6E0EE272","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_D2FDE9EF_DC1C_F6B2_41E7_3F5199162BEF.source'), '_blank')"},{"id":"res_D3B64A86_DC1C_9572_41EB_06ACD1D52681","class":"ImageResource","levels":[{"height":276,"class":"ImageResourceLevel","url":"media/res_D3B64A86_DC1C_9572_41EB_06ACD1D52681_0.png","width":310}]},{"id":"HotspotPanoramaOverlayArea_D220A675_DC3C_9D96_41E3_AC253C1A7AC2","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_D315C51D_DC04_7F97_41C7_D51574904EB3.source'), '_blank')"},{"id":"res_D3B66A86_DC1C_9572_41D8_16CDB48F5624","class":"ImageResource","levels":[{"height":276,"class":"ImageResourceLevel","url":"media/res_D3B66A86_DC1C_9572_41D8_16CDB48F5624_0.png","width":310}]},{"id":"HotspotPanoramaOverlayArea_D2AA0A57_DC05_9593_4198_DB5DE93C2123","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_D345C5D7_DC0C_BE92_41D5_F659848D4DFD.source'), '_blank')"},{"id":"res_CD973D63_DC0D_8FB2_41DF_6532A0F6A5BB","class":"ImageResource","levels":[{"height":495,"class":"ImageResourceLevel","url":"media/res_CD973D63_DC0D_8FB2_41DF_6532A0F6A5BB_0.png","width":554}]},{"id":"HotspotPanoramaOverlayArea_D3ED7739_DC05_BB9E_41E6_55505BBB39B5","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_CCDE97E5_DC04_9AB6_41E8_D15F9DD53BEC.source'), '_blank')"}],"layout":"absolute","start":"this.init()","width":"100%","propagateClick":false,"class":"Player","gap":10,"scrollBarColor":"#000000","watermark":false,"height":"100%","minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.5.js.map
})();
//Generated with v2023.2.5, Fri Jan 5 2024