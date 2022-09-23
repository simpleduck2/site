/**
 * @version 1.0.7625.23630
 * @copyright anton
 * @compiler Bridge.NET 17.9.10-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*AnimateEmojis start.*/
    Bridge.define("AnimateEmojis", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            easeType: 0,
            emojiAnimationChoice: 0,
            tweenInTime: 0,
            sustainTime: 0,
            tweenOutTime: 0,
            shotText: null,
            emojiAnimator: null,
            emojiImage: null,
            buttonImage: null,
            shotTextGO: null,
            trigger: null,
            duration: 0,
            index: 0,
            timer: 0,
            startAnimation: false,
            footballFume: null,
            footballClap: null,
            CowgirlAwkward: null,
            CowgirlPleasant: null,
            GolfySobbing: null,
            GolfyThumbsUp: null,
            texanNo: null,
            texanNod: null,
            chosenSprites: null
        },
        ctors: {
            init: function () {
                this.easeType = LeanTweenType.easeInOutSine;
                this.emojiAnimationChoice = AnimateEmojis.emojiAnimObject.GolfyThumbsUp;
                this.tweenInTime = 0.5;
                this.sustainTime = 1.5;
                this.tweenOutTime = 1.0;
                this.shotText = "Nice Shot!";
                this.duration = 2;
                this.index = 0;
                this.timer = 0;
                this.startAnimation = false;
            }
        },
        methods: {
            /*AnimateEmojis.Start start.*/
            Start: function () {
                // print("emojiAnimationChoice: " + emojiAnimationChoice + " " + (emojiAnimObject.footballClap == emojiAnimationChoice));
                switch (this.emojiAnimationChoice) {
                    case AnimateEmojis.emojiAnimObject.footballClap: 
                        this.chosenSprites = this.footballClap;
                        break;
                    case AnimateEmojis.emojiAnimObject.footballFume: 
                        this.chosenSprites = this.footballFume;
                        break;
                    case AnimateEmojis.emojiAnimObject.CowgirlAwkward: 
                        this.chosenSprites = this.CowgirlAwkward;
                        break;
                    case AnimateEmojis.emojiAnimObject.CowgirlPleasant: 
                        this.chosenSprites = this.CowgirlPleasant;
                        break;
                    case AnimateEmojis.emojiAnimObject.GolfySobbing: 
                        this.chosenSprites = this.GolfySobbing;
                        break;
                    case AnimateEmojis.emojiAnimObject.GolfyThumbsUp: 
                        this.chosenSprites = this.GolfyThumbsUp;
                        break;
                    case AnimateEmojis.emojiAnimObject.texanNo: 
                        this.chosenSprites = this.texanNo;
                        break;
                    case AnimateEmojis.emojiAnimObject.texanNod: 
                        this.chosenSprites = this.texanNod;
                        break;
                    default: 
                        this.chosenSprites = this.GolfyThumbsUp;
                        break;
                }

                this.trigger = System.Enum.toString(AnimateEmojis.emojiAnimObject, this.emojiAnimationChoice);
                this.gameObject.transform.localScale = pc.Vec3.ZERO.clone();
                this.shotTextGO.transform.localScale = pc.Vec3.ZERO.clone();
                this.shotTextGO.GetComponent(TMPro.TextMeshProUGUI).text = this.shotText;
            },
            /*AnimateEmojis.Start end.*/

            /*AnimateEmojis.Update start.*/
            Update: function () {
                if (this.startAnimation === true) {
                    if (((this.timer = this.timer + UnityEngine.Time.deltaTime)) >= (this.duration / this.chosenSprites.length)) {
                        this.timer = 0;
                        this.emojiImage.sprite = this.chosenSprites[this.index];
                        this.index = (((this.index + 1) | 0)) % this.chosenSprites.length;
                    }
                }
            },
            /*AnimateEmojis.Update end.*/

            /*AnimateEmojis.playEmojiAnim start.*/
            playEmojiAnim: function () {
                this.startAnimation = true;

                //emojiAnimator.SetBool(trigger, true);
                this.emojiImage.enabled = (this.buttonImage.enabled = true, true);
                LeanTween.scale$1(this.gameObject, new pc.Vec3( 1, 1, 1 ).scale( 2 ), this.tweenInTime).setEase(this.easeType);
                LeanTween.scale$1(this.shotTextGO, new pc.Vec3( 1, 1, 1 ).scale( 8 ), this.tweenInTime).setEase(this.easeType);

                this.StartCoroutine$2("endEmojiAnim");
            },
            /*AnimateEmojis.playEmojiAnim end.*/

            /*AnimateEmojis.endEmojiAnim start.*/
            endEmojiAnim: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.tweenInTime + this.sustainTime);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    LeanTween.scale$1(this.gameObject, pc.Vec3.ZERO.clone(), this.tweenOutTime).setEase(this.easeType);
                                        LeanTween.scale$1(this.shotTextGO, pc.Vec3.ZERO.clone(), this.tweenOutTime).setEase(this.easeType);
                                        $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*AnimateEmojis.endEmojiAnim end.*/


        }
    });
    /*AnimateEmojis end.*/

    /*AnimateEmojis+emojiAnimObject start.*/
    Bridge.define("AnimateEmojis.emojiAnimObject", {
        $kind: "nested enum",
        statics: {
            fields: {
                CowgirlAwkward: 0,
                CowgirlPleasant: 1,
                footballClap: 2,
                footballFume: 3,
                GolfySobbing: 4,
                GolfyThumbsUp: 5,
                texanNo: 6,
                texanNod: 7
            }
        }
    });
    /*AnimateEmojis+emojiAnimObject end.*/

    /*ArrowBackAndForth start.*/
    Bridge.define("ArrowBackAndForth", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rotationMax: 0,
            rotationMaxOriginal: 0,
            speed: 0,
            startScale: 0
        },
        ctors: {
            init: function () {
                this.rotationMax = 45.0;
                this.speed = 1.0;
            }
        },
        methods: {
            /*ArrowBackAndForth.Awake start.*/
            Awake: function () {

                //this.startScale = this.transform.localScale.y;
                this.rotationMaxOriginal = this.rotationMax;

            },
            /*ArrowBackAndForth.Awake end.*/

            /*ArrowBackAndForth.Update start.*/
            Update: function () {
                //this.transform.rotation = Quaternion.Euler(90f ,rotationMax * Mathf.Sin(Time.time * speed),0f);
                this.transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( 90.0, this.rotationMax * Math.sin(UnityEngine.Time.time * this.speed), 0.0 );
            },
            /*ArrowBackAndForth.Update end.*/

            /*ArrowBackAndForth.SetRotationMax start.*/
            SetRotationMax: function (scaleFactor, multiplier) {
                this.rotationMax = this.rotationMaxOriginal + (scaleFactor * multiplier);
            },
            /*ArrowBackAndForth.SetRotationMax end.*/


        }
    });
    /*ArrowBackAndForth end.*/

    /*BallInteraction start.*/
    Bridge.define("BallInteraction", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            touch: null,
            speedModifier: 0,
            speedModifierVertical: 0,
            speedModifierHorizontal: 0,
            transPosition: null,
            collider: null,
            reticle: null,
            outerArrows: null,
            reticleRotationModifier: 0,
            outerArrowRotationModifier: 0,
            outerArrowScaleFloor: 0,
            outerArrowScaleModifier: 0,
            simpleDuckScript: null,
            startBall: null,
            actionBall: null,
            currentPositon: null,
            deltaPositon: null,
            lastPositon: null,
            hold: false,
            mainCam: null
        },
        ctors: {
            init: function () {
                this.touch = new UnityEngine.Touch();
                this.transPosition = new UnityEngine.Vector3();
                this.currentPositon = new UnityEngine.Vector3();
                this.deltaPositon = new UnityEngine.Vector3();
                this.lastPositon = new UnityEngine.Vector3();
                this.speedModifierVertical = 0.01;
                this.speedModifierHorizontal = 0.02;
                this.reticleRotationModifier = 0.5;
                this.outerArrowRotationModifier = 10.0;
                this.outerArrowScaleFloor = 0.61;
                this.outerArrowScaleModifier = 1.0;
                this.hold = false;
            }
        },
        methods: {
            /*BallInteraction.Start start.*/
            Start: function () {
                var width = UnityEngine.Screen.width;
                var height = UnityEngine.Screen.height;

                if (width > height) {
                    this.speedModifier = this.speedModifierHorizontal;
                } else {
                    this.speedModifier = this.speedModifierVertical;
                }

                this.transPosition = this.transform.position.$clone();
                this.reticle.rotation = new pc.Quat().setFromEulerAngles_Unity( this.reticle.rotation.x, this.reticle.rotation.y, this.reticle.rotation.z + this.transform.position.y * this.reticleRotationModifier );
                this.outerArrows.rotation = new pc.Quat().setFromEulerAngles_Unity( this.outerArrows.rotation.x, this.outerArrows.rotation.y, this.outerArrows.rotation.z - this.transform.position.y * this.outerArrowRotationModifier );

                this.lastPositon = new pc.Vec3( width * 0.5, height * 0.5, 0 );
            },
            /*BallInteraction.Start end.*/

            /*BallInteraction.Update start.*/
            Update: function () {
                this.reticle.rotation = new pc.Quat().setFromEulerAngles_Unity( this.reticle.rotation.x, this.reticle.rotation.y, this.reticle.rotation.z + this.transform.position.y * this.reticleRotationModifier );
                this.outerArrows.rotation = new pc.Quat().setFromEulerAngles_Unity( this.outerArrows.rotation.x, this.outerArrows.rotation.y, this.outerArrows.rotation.z - this.transform.position.y * this.reticleRotationModifier );

                this.outerArrows.localScale = new pc.Vec3( this.outerArrowScaleFloor + this.transform.position.y * this.outerArrowScaleModifier, this.outerArrowScaleFloor + this.transform.position.y * this.outerArrowScaleModifier, this.outerArrowScaleFloor + this.transform.position.y * this.outerArrowScaleModifier );

                //#if UNITY_EDITOR
                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                        this.speedModifier = this.speedModifierHorizontal;
                    } else {
                        this.speedModifier = this.speedModifierVertical;
                    }
                    this.hold = true;
                    this.lastPositon = UnityEngine.Vector3.FromVector2(UnityEngine.Input.mousePosition.$clone()); //mainCam.WorldToScreenPoint(startBall.transform.position);
                    this.simpleDuckScript.finger.SetActive(false);

                }
                if (this.hold === true) {
                    this.currentPositon = UnityEngine.Vector3.FromVector2(UnityEngine.Input.mousePosition.$clone());
                    this.deltaPositon = this.currentPositon.$clone().sub( this.lastPositon );
                    this.lastPositon = this.currentPositon.$clone();

                    this.transform.position = new pc.Vec3( this.transform.position.x + this.deltaPositon.x * this.speedModifier, UnityEngine.Mathf.Max(this.transform.position.y + this.deltaPositon.y * this.speedModifier, -1.91), this.transform.position.z );
                }

                if (UnityEngine.Input.GetMouseButtonUp(0)) {

                    this.hold = false;
                    this.transform.position = this.transPosition.$clone();

                    if (this.collider.ballInPosition) {
                        // so this is detecting the script public variable from the desired box position. 
                        // snap ball position while particle effect plays

                        // I think this is where I want to shoot the ball. Before this point the angle thing should be enabled and swinging
                        //particelSystem.Play();

                        this.simpleDuckScript.ballReleased();

                        this.actionBall.SetActive(true);
                        this.startBall.SetActive(false);
                    } else {
                        this.transform.position = this.transPosition.$clone();
                        this.simpleDuckScript.finger.SetActive(true);

                    }
                }
                /* #else
                   if(Input.touchCount > 0){
                       //this.GetComponent<MeshRenderer>().material.color = new Color(Random.Range(0f,1f),Random.Range(0f,1f),Random.Range(0f,1f));
                       touch = Input.GetTouch(0);
                       // so this is what sets the position of the object. I'll be using something like this for the ball. 
                       if(touch.phase == TouchPhase.Moved){

                           transform.position = new Vector3(
                               transform.position.x + touch.deltaPosition.x * speedModifier,
                               Mathf.Max(transform.position.y + touch.deltaPosition.y * speedModifier, -1.91f),
                               transform.position.z
                           );
                       }

                       // so I'll want to do some stuff here to start the normal behavior for the interactions. It might be useful to tie this to a boolean for the Luna 
                       // playground varaibles too
                       if (touch.phase == TouchPhase.Ended)
                       {
                           transform.position = transPosition;

                           if(collider.ballInPosition){
                               // so this is detecting the script public variable from the desired box position. 
                               // snap ball position while particle effect plays

                               // I think this is where I want to shoot the ball. Before this point the angle thing should be enabled and swinging
                               //particelSystem.Play();

                               simpleDuckScript.ballReleased();

                               actionBall.SetActive(true);
                               startBall.SetActive(false);


                           }else{
                               transform.position = transPosition;
                           }
                       }
                   }
                #endif
                */

            },
            /*BallInteraction.Update end.*/


        }
    });
    /*BallInteraction end.*/

    /*DentedPixel.LeanDummy start.*/
    Bridge.define("DentedPixel.LeanDummy");
    /*DentedPixel.LeanDummy end.*/

    /*DetectObjectEnteringHitbox start.*/
    Bridge.define("DetectObjectEnteringHitbox", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ballInPosition: false,
            partSys: null,
            chargeCanvas: null,
            aimCanvas: null
        },
        ctors: {
            init: function () {
                this.ballInPosition = false;
            }
        },
        methods: {
            /*DetectObjectEnteringHitbox.Start start.*/
            Start: function () {

            },
            /*DetectObjectEnteringHitbox.Start end.*/

            /*DetectObjectEnteringHitbox.OnTriggerEnter start.*/
            OnTriggerEnter: function (Other) {
                this.ballInPosition = true;
                this.partSys.Play();
                this.chargeCanvas.SetActive(false);
                this.aimCanvas.SetActive(true);
            },
            /*DetectObjectEnteringHitbox.OnTriggerEnter end.*/

            /*DetectObjectEnteringHitbox.OnTriggerExit start.*/
            OnTriggerExit: function (Other) {
                this.ballInPosition = false;
                this.chargeCanvas.SetActive(true);
                this.aimCanvas.SetActive(false);
            },
            /*DetectObjectEnteringHitbox.OnTriggerExit end.*/


        }
    });
    /*DetectObjectEnteringHitbox end.*/

    /*FontChanger start.*/
    Bridge.define("FontChanger", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            /**
             * fontSelection - enum for changing language, will be visible in playground once luna is installed and the LunaPlaygroundField line uncommented
             fontsTMP - holds tmp fonts for each language in the same order as the fontSelection enum (assigned in inspector)
             fontDictTMP - converts the fontsTMP list into a dictionary for fast access
             fontsText - holds normal fonts (non TMP font atlases) for each language in the same order as the fontSelection enum (assigned in inspector) 
             fontsDictText - converts the fontsText list into a dictionary for fast access
             *
             * @instance
             * @private
             * @memberof FontChanger
             * @type FontsTypes
             */
            fontSelection: 0,
            fontsTMP: null,
            fontDictTMP: null,
            fontsText: null,
            fontsDictText: null
        },
        ctors: {
            init: function () {
                this.fontsTMP = new (System.Collections.Generic.List$1(TMPro.TMP_FontAsset)).ctor();
                this.fontDictTMP = new (System.Collections.Generic.Dictionary$2(FontsTypes,TMPro.TMP_FontAsset)).ctor();
                this.fontsText = new (System.Collections.Generic.List$1(UnityEngine.Font)).ctor();
                this.fontsDictText = new (System.Collections.Generic.Dictionary$2(FontsTypes,UnityEngine.Font)).ctor();
            }
        },
        methods: {
            /*FontChanger.Awake start.*/
            Awake: function () {
                FontChanger.Instance = this;
                //Add the TMP and normal fonts to their respective dictionaries which will be the same order as the list
                for (var i = 0; i < this.fontsTMP.Count; i = (i + 1) | 0) {
                    this.fontDictTMP.add(i, this.fontsTMP.getItem(i));
                }
                for (var i1 = 0; i1 < this.fontsText.Count; i1 = (i1 + 1) | 0) {
                    this.fontsDictText.add(i1, this.fontsText.getItem(i1));
                }
            },
            /*FontChanger.Awake end.*/

            /*FontChanger.GetFontTMP start.*/
            GetFontTMP: function () {
                return this.fontDictTMP.getItem(this.fontSelection);
            },
            /*FontChanger.GetFontTMP end.*/

            /*FontChanger.GetFontText start.*/
            GetFontText: function () {
                return this.fontsDictText.getItem(this.fontSelection);
            },
            /*FontChanger.GetFontText end.*/


        }
    });
    /*FontChanger end.*/

    /*FontsTypes start.*/
    Bridge.define("FontsTypes", {
        $kind: "enum",
        statics: {
            fields: {
                English: 0,
                Japanese: 1
            }
        }
    });
    /*FontsTypes end.*/

    /*HandleOrientation start.*/
    Bridge.define("HandleOrientation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            designedWidth: 0,
            designedHeight: 0,
            objectsToScale: null,
            handleOrientationTrigger: false,
            arrow: null,
            arrowRotationScaler: 0
        },
        ctors: {
            init: function () {
                this.designedWidth = 726;
                this.designedHeight = 530;
                this.handleOrientationTrigger = false;
                this.arrowRotationScaler = 3;
            }
        },
        methods: {
            /*HandleOrientation.Start start.*/
            Start: function () {
                this.HandleOrientationScaling();
            },
            /*HandleOrientation.Start end.*/

            /*HandleOrientation.Update start.*/
            Update: function () {
                if (this.handleOrientationTrigger) {
                    this.handleOrientationTrigger = false;
                    this.HandleOrientationScaling();
                }
            },
            /*HandleOrientation.Update end.*/

            /*HandleOrientation.HandleOrientationScaling start.*/
            HandleOrientationScaling: function () {
                var $t;
                var width = UnityEngine.Screen.width;
                var height = UnityEngine.Screen.height;

                var scaleFactor = (width / height) / (this.designedWidth / this.designedHeight);

                this.arrow.SetRotationMax(scaleFactor - 1, this.arrowRotationScaler);

                $t = Bridge.getEnumerator(this.objectsToScale);
                try {
                    while ($t.moveNext()) {
                        var obj = $t.Current;
                        if (obj.ui) {
                            //Vector3 x = obj.minScale + (obj.maxScale - obj.minScale)*widthFactor;
                            obj.Object.GetComponent(UnityEngine.RectTransform).localScale = obj.minScale.$clone().add( (obj.maxScale.$clone().sub( obj.minScale )).scale( scaleFactor ) );


                        }


                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

            },
            /*HandleOrientation.HandleOrientationScaling end.*/


        }
    });
    /*HandleOrientation end.*/

    /*HandleOrientation+ObjectScale start.*/
    Bridge.define("HandleOrientation.ObjectScale", {
        $kind: "nested class",
        fields: {
            ui: false,
            Object: null,
            minScale: null,
            maxScale: null
        },
        ctors: {
            init: function () {
                this.minScale = new UnityEngine.Vector3();
                this.maxScale = new UnityEngine.Vector3();
                this.ui = false;
            }
        }
    });
    /*HandleOrientation+ObjectScale end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LanguageSettings start.*/
    Bridge.define("LanguageSettings", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            UI_TMP: null,
            UI_Text: null
        },
        methods: {
            /*LanguageSettings.Start start.*/
            Start: function () {
                for (var i = 0; i < this.UI_TMP.length; i = (i + 1) | 0) {
                    this.UI_TMP[i].font = FontChanger.Instance.GetFontTMP();
                }
                for (var i1 = 0; i1 < this.UI_Text.length; i1 = (i1 + 1) | 0) {
                    this.UI_Text[i1].font = FontChanger.Instance.GetFontText();
                }
            },
            /*LanguageSettings.Start end.*/


        }
    });
    /*LanguageSettings end.*/

    /*LeanProp start.*/
    Bridge.define("LeanProp", {
        $kind: "enum",
        statics: {
            fields: {
                position: 0,
                localPosition: 1,
                x: 2,
                y: 3,
                z: 4,
                localX: 5,
                localY: 6,
                localZ: 7,
                scale: 8,
                color: 9
            }
        }
    });
    /*LeanProp end.*/

    /*LeanSmooth start.*/
    Bridge.define("LeanSmooth", {
        statics: {
            methods: {
                /*LeanSmooth.damp:static start.*/
                damp: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (deltaTime < 0.0) {
                        deltaTime = UnityEngine.Time.deltaTime;
                    }

                    smoothTime = UnityEngine.Mathf.Max(0.0001, smoothTime);
                    var num = 2.0 / smoothTime;
                    var num2 = num * deltaTime;
                    var num3 = 1.0 / (1.0 + num2 + 0.48 * num2 * num2 + 0.235 * num2 * num2 * num2);
                    var num4 = current - target;
                    var num5 = target;
                    if (maxSpeed > 0.0) {
                        var num6 = maxSpeed * smoothTime;
                        num4 = Math.max(-num6, Math.min(num4, num6));
                    }
                    target = current - num4;
                    var num7 = (currentVelocity.v + num * num4) * deltaTime;
                    currentVelocity.v = (currentVelocity.v - num * num7) * num3;
                    var num8 = target + (num4 + num7) * num3;
                    if (num5 - current > 0.0 === num8 > num5) {
                        num8 = num5;
                        currentVelocity.v = (num8 - num5) / deltaTime;
                    }
                    return num8;
                },
                /*LeanSmooth.damp:static end.*/

                /*LeanSmooth.damp$2:static start.*/
                damp$2: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    var x = LeanSmooth.damp(current.x, target.x, Bridge.ref(currentVelocity.v, "x"), smoothTime, maxSpeed, deltaTime);
                    var y = LeanSmooth.damp(current.y, target.y, Bridge.ref(currentVelocity.v, "y"), smoothTime, maxSpeed, deltaTime);
                    var z = LeanSmooth.damp(current.z, target.z, Bridge.ref(currentVelocity.v, "z"), smoothTime, maxSpeed, deltaTime);

                    return new pc.Vec3( x, y, z );
                },
                /*LeanSmooth.damp$2:static end.*/

                /*LeanSmooth.damp$1:static start.*/
                damp$1: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    var r = LeanSmooth.damp(current.r, target.r, Bridge.ref(currentVelocity.v, "r"), smoothTime, maxSpeed, deltaTime);
                    var g = LeanSmooth.damp(current.g, target.g, Bridge.ref(currentVelocity.v, "g"), smoothTime, maxSpeed, deltaTime);
                    var b = LeanSmooth.damp(current.b, target.b, Bridge.ref(currentVelocity.v, "b"), smoothTime, maxSpeed, deltaTime);
                    var a = LeanSmooth.damp(current.a, target.a, Bridge.ref(currentVelocity.v, "a"), smoothTime, maxSpeed, deltaTime);

                    return new pc.Color( r, g, b, a );
                },
                /*LeanSmooth.damp$1:static end.*/

                /*LeanSmooth.spring:static start.*/
                spring: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (deltaTime < 0.0) {
                        deltaTime = UnityEngine.Time.deltaTime;
                    }

                    var diff = target - current;

                    currentVelocity.v += deltaTime / smoothTime * accelRate * diff;

                    currentVelocity.v *= (1.0 - deltaTime * friction);

                    if (maxSpeed > 0.0 && maxSpeed < Math.abs(currentVelocity.v)) {
                        currentVelocity.v = maxSpeed * (currentVelocity.v === 0 ? 1 : Math.sign(currentVelocity.v));
                    }

                    var returned = current + currentVelocity.v;

                    return returned;
                },
                /*LeanSmooth.spring:static end.*/

                /*LeanSmooth.spring$2:static start.*/
                spring$2: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    var x = LeanSmooth.spring(current.x, target.x, Bridge.ref(currentVelocity.v, "x"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var y = LeanSmooth.spring(current.y, target.y, Bridge.ref(currentVelocity.v, "y"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var z = LeanSmooth.spring(current.z, target.z, Bridge.ref(currentVelocity.v, "z"), smoothTime, maxSpeed, deltaTime, friction, accelRate);

                    return new pc.Vec3( x, y, z );
                },
                /*LeanSmooth.spring$2:static end.*/

                /*LeanSmooth.spring$1:static start.*/
                spring$1: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    var r = LeanSmooth.spring(current.r, target.r, Bridge.ref(currentVelocity.v, "r"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var g = LeanSmooth.spring(current.g, target.g, Bridge.ref(currentVelocity.v, "g"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var b = LeanSmooth.spring(current.b, target.b, Bridge.ref(currentVelocity.v, "b"), smoothTime, maxSpeed, deltaTime, friction, accelRate);
                    var a = LeanSmooth.spring(current.a, target.a, Bridge.ref(currentVelocity.v, "a"), smoothTime, maxSpeed, deltaTime, friction, accelRate);

                    return new pc.Color( r, g, b, a );
                },
                /*LeanSmooth.spring$1:static end.*/

                /*LeanSmooth.linear:static start.*/
                linear: function (current, target, moveSpeed, deltaTime) {
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (deltaTime < 0.0) {
                        deltaTime = UnityEngine.Time.deltaTime;
                    }

                    var targetGreater = (target > current);

                    var currentVelocity = deltaTime * moveSpeed * (targetGreater ? 1.0 : -1.0);

                    var returned = current + currentVelocity;

                    var returnPassed = returned - target;
                    if ((targetGreater && returnPassed > 0) || !targetGreater && returnPassed < 0) { // Has passed point, return target
                        return target;
                    }

                    return returned;
                },
                /*LeanSmooth.linear:static end.*/

                /*LeanSmooth.linear$2:static start.*/
                linear$2: function (current, target, moveSpeed, deltaTime) {
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    var x = LeanSmooth.linear(current.x, target.x, moveSpeed, deltaTime);
                    var y = LeanSmooth.linear(current.y, target.y, moveSpeed, deltaTime);
                    var z = LeanSmooth.linear(current.z, target.z, moveSpeed, deltaTime);

                    return new pc.Vec3( x, y, z );
                },
                /*LeanSmooth.linear$2:static end.*/

                /*LeanSmooth.linear$1:static start.*/
                linear$1: function (current, target, moveSpeed) {
                    var r = LeanSmooth.linear(current.r, target.r, moveSpeed);
                    var g = LeanSmooth.linear(current.g, target.g, moveSpeed);
                    var b = LeanSmooth.linear(current.b, target.b, moveSpeed);
                    var a = LeanSmooth.linear(current.a, target.a, moveSpeed);

                    return new pc.Color( r, g, b, a );
                },
                /*LeanSmooth.linear$1:static end.*/

                /*LeanSmooth.bounceOut:static start.*/
                bounceOut: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (hitDamping === void 0) { hitDamping = 0.9; }
                    if (deltaTime < 0.0) {
                        deltaTime = UnityEngine.Time.deltaTime;
                    }

                    var diff = target - current;

                    currentVelocity.v += deltaTime / smoothTime * accelRate * diff;

                    currentVelocity.v *= (1.0 - deltaTime * friction);

                    if (maxSpeed > 0.0 && maxSpeed < Math.abs(currentVelocity.v)) {
                        currentVelocity.v = maxSpeed * (currentVelocity.v === 0 ? 1 : Math.sign(currentVelocity.v));
                    }

                    var returned = current + currentVelocity.v;

                    var targetGreater = (target > current);
                    var returnPassed = returned - target;
                    if ((targetGreater && returnPassed > 0) || !targetGreater && returnPassed < 0) { // Start a bounce
                        currentVelocity.v = -currentVelocity.v * hitDamping;
                        returned = current + currentVelocity.v;
                    }

                    return returned;
                },
                /*LeanSmooth.bounceOut:static end.*/

                /*LeanSmooth.bounceOut$2:static start.*/
                bounceOut$2: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (hitDamping === void 0) { hitDamping = 0.9; }
                    var x = LeanSmooth.bounceOut(current.x, target.x, Bridge.ref(currentVelocity.v, "x"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var y = LeanSmooth.bounceOut(current.y, target.y, Bridge.ref(currentVelocity.v, "y"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var z = LeanSmooth.bounceOut(current.z, target.z, Bridge.ref(currentVelocity.v, "z"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);

                    return new pc.Vec3( x, y, z );
                },
                /*LeanSmooth.bounceOut$2:static end.*/

                /*LeanSmooth.bounceOut$1:static start.*/
                bounceOut$1: function (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (deltaTime === void 0) { deltaTime = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (hitDamping === void 0) { hitDamping = 0.9; }
                    var r = LeanSmooth.bounceOut(current.r, target.r, Bridge.ref(currentVelocity.v, "r"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var g = LeanSmooth.bounceOut(current.g, target.g, Bridge.ref(currentVelocity.v, "g"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var b = LeanSmooth.bounceOut(current.b, target.b, Bridge.ref(currentVelocity.v, "b"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);
                    var a = LeanSmooth.bounceOut(current.a, target.a, Bridge.ref(currentVelocity.v, "a"), smoothTime, maxSpeed, deltaTime, friction, accelRate, hitDamping);

                    return new pc.Color( r, g, b, a );
                },
                /*LeanSmooth.bounceOut$1:static end.*/


            }
        }
    });
    /*LeanSmooth end.*/

    /*LeanTest start.*/
    Bridge.define("LeanTest", {
        statics: {
            fields: {
                expected: 0,
                tests: 0,
                passes: 0,
                timeout: 0,
                timeoutStarted: false,
                testsFinished: false
            },
            ctors: {
                init: function () {
                    this.expected = 0;
                    this.tests = 0;
                    this.passes = 0;
                    this.timeout = 15.0;
                    this.timeoutStarted = false;
                    this.testsFinished = false;
                }
            },
            methods: {
                /*LeanTest.debug:static start.*/
                debug: function (name, didPass, failExplaination) {
                    if (failExplaination === void 0) { failExplaination = null; }
                    LeanTest.expect(didPass, name, failExplaination);
                },
                /*LeanTest.debug:static end.*/

                /*LeanTest.expect:static start.*/
                expect: function (didPass, definition, failExplaination) {
                    if (failExplaination === void 0) { failExplaination = null; }
                    var len = LeanTest.printOutLength(definition);
                    var paddingLen = (40 - Bridge.Int.clip32((len * 1.05))) | 0;
                    var padding = System.String.alignString((""), -paddingLen, "_".charCodeAt(0));
                    var logName = (LeanTest.formatB(definition) || "") + " " + (padding || "") + " [ " + ((didPass ? LeanTest.formatC("pass", "green") : LeanTest.formatC("fail", "red")) || "") + " ]";
                    if (didPass === false && failExplaination != null) {
                        logName = (logName || "") + ((" - " + (failExplaination || "")) || "");
                    }
                    console.log(logName);
                    if (didPass) {
                        LeanTest.passes = (LeanTest.passes + 1) | 0;
                    }
                    LeanTest.tests = (LeanTest.tests + 1) | 0;

                    // Debug.Log("tests:"+tests+" expected:"+expected);
                    if (LeanTest.tests === LeanTest.expected && LeanTest.testsFinished === false) {
                        LeanTest.overview();
                    } else if (LeanTest.tests > LeanTest.expected) {
                        console.log((LeanTest.formatB("Too many tests for a final report!") || "") + " set LeanTest.expected = " + LeanTest.tests);
                    }

                    if (LeanTest.timeoutStarted === false) {
                        LeanTest.timeoutStarted = true;
                        var tester = new UnityEngine.GameObject.ctor();
                        tester.name = "~LeanTest";
                        var test = Bridge.as(tester.AddComponent$1(LeanTester), LeanTester);
                        test.timeout = LeanTest.timeout;
                        tester.hideFlags = UnityEngine.HideFlags.HideAndDontSave;
                    }
                },
                /*LeanTest.expect:static end.*/

                /*LeanTest.padRight:static start.*/
                padRight: function (len) {
                    var str = "";
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        str = (str || "") + "_";
                    }
                    return str;
                },
                /*LeanTest.padRight:static end.*/

                /*LeanTest.printOutLength:static start.*/
                printOutLength: function (str) {
                    var len = 0.0;
                    for (var i = 0; i < str.length; i = (i + 1) | 0) {
                        if (str.charCodeAt(i) === "I".charCodeAt(0)) {
                            len += 0.5;
                        } else if (str.charCodeAt(i) === "J".charCodeAt(0)) {
                            len += 0.85;
                        } else {
                            len += 1.0;
                        }
                    }
                    return len;
                },
                /*LeanTest.printOutLength:static end.*/

                /*LeanTest.formatBC:static start.*/
                formatBC: function (str, color) {
                    return LeanTest.formatC(LeanTest.formatB(str), color);
                },
                /*LeanTest.formatBC:static end.*/

                /*LeanTest.formatB:static start.*/
                formatB: function (str) {
                    return "<b>" + (str || "") + "</b>";
                },
                /*LeanTest.formatB:static end.*/

                /*LeanTest.formatC:static start.*/
                formatC: function (str, color) {
                    return "<color=" + (color || "") + ">" + (str || "") + "</color>";
                },
                /*LeanTest.formatC:static end.*/

                /*LeanTest.overview:static start.*/
                overview: function () {
                    LeanTest.testsFinished = true;
                    var failedCnt = (((LeanTest.expected - LeanTest.passes) | 0));
                    var failedStr = failedCnt > 0 ? LeanTest.formatBC("" + failedCnt, "red") : "" + failedCnt;
                    console.log((LeanTest.formatB("Final Report:") || "") + " _____________________ PASSED: " + (LeanTest.formatBC("" + LeanTest.passes, "green") || "") + " FAILED: " + (failedStr || "") + " ");
                },
                /*LeanTest.overview:static end.*/


            }
        }
    });
    /*LeanTest end.*/

    /*LeanTester start.*/
    Bridge.define("LeanTester", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timeout: 0
        },
        ctors: {
            init: function () {
                this.timeout = 15.0;
            }
        },
        methods: {
            /*LeanTester.Start start.*/
            Start: function () {
                this.StartCoroutine$1(this.timeoutCheck());
            },
            /*LeanTester.Start end.*/

            /*LeanTester.timeoutCheck start.*/
            timeoutCheck: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    pauseEndTime,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    pauseEndTime = UnityEngine.Time.realtimeSinceStartup + this.timeout;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( UnityEngine.Time.realtimeSinceStartup < pauseEndTime ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = Bridge.box(0, System.Int32);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    if (LeanTest.testsFinished === false) {
                                            console.log(LeanTest.formatB("Tests timed out!"));
                                            LeanTest.overview();
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*LeanTester.timeoutCheck end.*/


        }
    });
    /*LeanTester end.*/

    /*LeanTween start.*/
    Bridge.define("LeanTween", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                throwErrors: false,
                tau: 0,
                PI_DIV2: 0,
                sequences: null,
                tweens: null,
                tweensFinished: null,
                tweensFinishedIds: null,
                tween: null,
                tweenMaxSearch: 0,
                maxTweens: 0,
                maxSequences: 0,
                frameRendered: 0,
                _tweenEmpty: null,
                dtEstimated: 0,
                dtManual: 0,
                dtActual: 0,
                global_counter: 0,
                i: 0,
                j: 0,
                finishedCnt: 0,
                punch: null,
                shake: null,
                maxTweenReached: 0,
                startSearch: 0,
                d: null,
                eventListeners: null,
                goListeners: null,
                eventsMaxSearch: 0,
                EVENTS_MAX: 0,
                LISTENERS_MAX: 0,
                INIT_LISTENERS_MAX: 0
            },
            props: {
                maxSearch: {
                    get: function () {
                        return LeanTween.tweenMaxSearch;
                    }
                },
                maxSimulataneousTweens: {
                    get: function () {
                        return LeanTween.maxTweens;
                    }
                },
                tweensRunning: {
                    get: function () {
                        var count = 0;
                        for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                            if (LeanTween.tweens[i].toggle) {
                                count = (count + 1) | 0;
                            }
                        }
                        return count;
                    }
                },
                tweenEmpty: {
                    get: function () {
                        LeanTween.init$1(LeanTween.maxTweens);
                        return LeanTween._tweenEmpty;
                    }
                }
            },
            ctors: {
                init: function () {
                    this.throwErrors = true;
                    this.tau = 6.28318548;
                    this.PI_DIV2 = 1.57079637;
                    this.tweenMaxSearch = -1;
                    this.maxTweens = 400;
                    this.maxSequences = 400;
                    this.frameRendered = -1;
                    this.dtEstimated = -1.0;
                    this.global_counter = 0;
                    this.punch = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0.0, 0.0, 0, 0), new pc.Keyframe(0.112586, 0.9976035, 0, 0), new pc.Keyframe(0.3120486, -0.1720615, 0, 0), new pc.Keyframe(0.4316337, 0.07030682, 0, 0), new pc.Keyframe(0.5524869, -0.03141804, 0, 0), new pc.Keyframe(0.6549395, 0.003909959, 0, 0), new pc.Keyframe(0.770987, -0.009817753, 0, 0), new pc.Keyframe(0.8838775, 0.001939224, 0, 0), new pc.Keyframe(1.0, 0.0, 0, 0) ]});
                    this.shake = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0.0, 0.0, 0, 0), new pc.Keyframe(0.25, 1.0, 0, 0), new pc.Keyframe(0.75, -1.0, 0, 0), new pc.Keyframe(1.0, 0.0, 0, 0) ]});
                    this.startSearch = 0;
                    this.eventsMaxSearch = 0;
                    this.EVENTS_MAX = 10;
                    this.LISTENERS_MAX = 10;
                    this.INIT_LISTENERS_MAX = LeanTween.LISTENERS_MAX;
                }
            },
            methods: {
                /*LeanTween.init:static start.*/
                init: function () {
                    LeanTween.init$1(LeanTween.maxTweens);
                },
                /*LeanTween.init:static end.*/

                /*LeanTween.init$1:static start.*/
                init$1: function (maxSimultaneousTweens) {
                    LeanTween.init$2(maxSimultaneousTweens, LeanTween.maxSequences);
                },
                /*LeanTween.init$1:static end.*/

                /*LeanTween.init$2:static start.*/
                init$2: function (maxSimultaneousTweens, maxSimultaneousSequences) {
                    if (LeanTween.tweens == null) {
                        LeanTween.maxTweens = maxSimultaneousTweens;
                        LeanTween.tweens = System.Array.init(LeanTween.maxTweens, null, LTDescr);
                        LeanTween.tweensFinished = System.Array.init(LeanTween.maxTweens, 0, System.Int32);
                        LeanTween.tweensFinishedIds = System.Array.init(LeanTween.maxTweens, 0, System.Int32);
                        LeanTween._tweenEmpty = new UnityEngine.GameObject.ctor();
                        LeanTween._tweenEmpty.name = "~LeanTween";
                        LeanTween._tweenEmpty.AddComponent$1(LeanTween);
                        LeanTween._tweenEmpty.isStatic = true;
                        LeanTween._tweenEmpty.hideFlags = UnityEngine.HideFlags.HideAndDontSave;
                        UnityEngine.Object.DontDestroyOnLoad(LeanTween._tweenEmpty);
                        for (var i = 0; i < LeanTween.maxTweens; i = (i + 1) | 0) {
                            LeanTween.tweens[i] = new LTDescr();
                        }

                        UnityEngine.SceneManagement.SceneManager.addsceneLoaded(LeanTween.onLevelWasLoaded54);

                        LeanTween.sequences = System.Array.init(maxSimultaneousSequences, null, LTSeq);

                        for (var i1 = 0; i1 < maxSimultaneousSequences; i1 = (i1 + 1) | 0) {
                            LeanTween.sequences[i1] = new LTSeq();
                        }
                    }
                },
                /*LeanTween.init$2:static end.*/

                /*LeanTween.reset:static start.*/
                reset: function () {
                    if (LeanTween.tweens != null) {
                        for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                            if (LeanTween.tweens[i] != null) {
                                LeanTween.tweens[i].toggle = false;
                            }
                        }
                    }
                    LeanTween.tweens = null;
                    UnityEngine.MonoBehaviour.Destroy(LeanTween._tweenEmpty);
                },
                /*LeanTween.reset:static end.*/

                /*LeanTween.onLevelWasLoaded54:static start.*/
                onLevelWasLoaded54: function (scene, mode) {
                    LeanTween.internalOnLevelWasLoaded(scene.index);
                },
                /*LeanTween.onLevelWasLoaded54:static end.*/

                /*LeanTween.internalOnLevelWasLoaded:static start.*/
                internalOnLevelWasLoaded: function (lvl) {
                    // Debug.Log("reseting gui");
                    LTGUI.reset();
                },
                /*LeanTween.internalOnLevelWasLoaded:static end.*/

                /*LeanTween.update:static start.*/
                update: function () {
                    var $t;
                    if (LeanTween.frameRendered !== UnityEngine.Time.frameCount) { // make sure update is only called once per frame
                        LeanTween.init();


                        LeanTween.dtEstimated = LeanTween.dtEstimated < 0.0 ? 0.0 : ($t = UnityEngine.Time.unscaledDeltaTime, LeanTween.dtEstimated = $t, $t);

                        //      Debug.Log("Time.unscaledDeltaTime:"+Time.unscaledDeltaTime);

                        LeanTween.dtActual = UnityEngine.Time.deltaTime;
                        LeanTween.maxTweenReached = 0;
                        LeanTween.finishedCnt = 0;
                        // if(tweenMaxSearch>1500)
                        //           Debug.Log("tweenMaxSearch:"+tweenMaxSearch +" maxTweens:"+maxTweens);
                        for (var i = 0; i <= LeanTween.tweenMaxSearch && i < LeanTween.maxTweens; i = (i + 1) | 0) {
                            LeanTween.tween = LeanTween.tweens[i];
                            //              if(i==0 && tweens[i].toggle)
                            //                  Debug.Log("tweens["+i+"]"+tweens[i]);
                            if (LeanTween.tween.toggle) {
                                LeanTween.maxTweenReached = i;

                                if (LeanTween.tween.updateInternal()) { // returns true if the tween is finished with it's loop
                                    LeanTween.tweensFinished[LeanTween.finishedCnt] = i;
                                    LeanTween.tweensFinishedIds[LeanTween.finishedCnt] = LeanTween.tweens[i].id;
                                    LeanTween.finishedCnt = (LeanTween.finishedCnt + 1) | 0;
                                }
                            }
                        }

                        // Debug.Log("maxTweenReached:"+maxTweenReached);
                        LeanTween.tweenMaxSearch = LeanTween.maxTweenReached;
                        LeanTween.frameRendered = UnityEngine.Time.frameCount;

                        for (var i1 = 0; i1 < LeanTween.finishedCnt; i1 = (i1 + 1) | 0) {
                            LeanTween.j = LeanTween.tweensFinished[i1];
                            LeanTween.tween = LeanTween.tweens[LeanTween.j];

                            if (LeanTween.tween.id === LeanTween.tweensFinishedIds[i1]) {
                                //              Debug.Log("removing tween:"+tween);
                                LeanTween.removeTween(LeanTween.j);
                                if (LeanTween.tween.hasExtraOnCompletes && UnityEngine.Component.op_Inequality(LeanTween.tween.trans, null)) {
                                    LeanTween.tween.callOnCompletes();
                                }
                            }
                        }

                    }
                },
                /*LeanTween.update:static end.*/

                /*LeanTween.removeTween$1:static start.*/
                removeTween$1: function (i, uniqueId) { // Only removes the tween if the unique id matches <summary>Move a GameObject to a certain location</summary>
                    if (LeanTween.tweens[i].uniqueId === uniqueId) {
                        LeanTween.removeTween(i);
                    }
                },
                /*LeanTween.removeTween$1:static end.*/

                /*LeanTween.removeTween:static start.*/
                removeTween: function (i) {
                    if (LeanTween.tweens[i].toggle) {
                        LeanTween.tweens[i].toggle = false;
                        LeanTween.tweens[i].counter = 4294967295;
                        //logError("Removing tween["+i+"]:"+tweens[i]);
                        if (LeanTween.tweens[i].destroyOnComplete) {
                            //              Debug.Log("destroying tween.type:"+tween.type+" ltRect"+(tweens[i]._optional.ltRect==null));
                            if (LeanTween.tweens[i]._optional.ltRect != null) {
                                //  Debug.Log("destroy i:"+i+" id:"+tweens[i].ltRect.id);
                                LTGUI.destroy(LeanTween.tweens[i]._optional.ltRect.id);
                            } else { // check if equal to tweenEmpty
                                if (UnityEngine.Component.op_Inequality(LeanTween.tweens[i].trans, null) && UnityEngine.GameObject.op_Inequality(LeanTween.tweens[i].trans.gameObject, LeanTween._tweenEmpty)) {
                                    UnityEngine.MonoBehaviour.Destroy(LeanTween.tweens[i].trans.gameObject);
                                }
                            }
                        }
                        //tweens[i].optional = null;
                        LeanTween.startSearch = i;
                        //Debug.Log("start search reset:"+startSearch + " i:"+i+" tweenMaxSearch:"+tweenMaxSearch);
                        if (((i + 1) | 0) >= LeanTween.tweenMaxSearch) {
                            //Debug.Log("reset to zero");
                            LeanTween.startSearch = 0;
                            //tweenMaxSearch--;
                        }
                    }
                },
                /*LeanTween.removeTween:static end.*/

                /*LeanTween.add:static start.*/
                add: function (a, b) {
                    var c = System.Array.init(a.length, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (LeanTween.i = 0; LeanTween.i < a.length; LeanTween.i = (LeanTween.i + 1) | 0) {
                        c[LeanTween.i] = a[LeanTween.i].$clone().add( b );
                    }

                    return c;
                },
                /*LeanTween.add:static end.*/

                /*LeanTween.closestRot:static start.*/
                closestRot: function (from, to) {
                    var minusWhole = 0 - (360 - to);
                    var plusWhole = 360 + to;
                    var toDiffAbs = Math.abs(to - from);
                    var minusDiff = Math.abs(minusWhole - from);
                    var plusDiff = Math.abs(plusWhole - from);
                    if (toDiffAbs < minusDiff && toDiffAbs < plusDiff) {
                        return to;
                    } else {
                        if (minusDiff < plusDiff) {
                            return minusWhole;
                        } else {
                            return plusWhole;
                        }
                    }
                },
                /*LeanTween.closestRot:static end.*/

                /*LeanTween.cancelAll:static start.*/
                cancelAll: function () {
                    LeanTween.cancelAll$1(false);
                },
                /*LeanTween.cancelAll:static end.*/

                /*LeanTween.cancelAll$1:static start.*/
                cancelAll$1: function (callComplete) {
                    LeanTween.init();
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Inequality(LeanTween.tweens[i].trans, null)) {
                            if (callComplete && !Bridge.staticEquals(LeanTween.tweens[i].optional.onComplete, null)) {
                                LeanTween.tweens[i].optional.onComplete();
                            }
                            LeanTween.removeTween(i);
                        }
                    }
                },
                /*LeanTween.cancelAll$1:static end.*/

                /*LeanTween.cancel$3:static start.*/
                cancel$3: function (gameObject) {
                    LeanTween.cancel$4(gameObject, false);
                },
                /*LeanTween.cancel$3:static end.*/

                /*LeanTween.cancel$4:static start.*/
                cancel$4: function (gameObject, callOnComplete) {
                    LeanTween.init();
                    var trans = gameObject.transform;
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        var tween = LeanTween.tweens[i];
                        if (tween != null && tween.toggle && UnityEngine.Component.op_Equality(tween.trans, trans)) {
                            if (callOnComplete && !Bridge.staticEquals(tween.optional.onComplete, null)) {
                                tween.optional.onComplete();
                            }
                            LeanTween.removeTween(i);
                        }
                    }
                },
                /*LeanTween.cancel$4:static end.*/

                /*LeanTween.cancel$6:static start.*/
                cancel$6: function (rect) {
                    LeanTween.cancel$4(rect.gameObject, false);
                },
                /*LeanTween.cancel$6:static end.*/

                /*LeanTween.cancel$5:static start.*/
                cancel$5: function (gameObject, uniqueId, callOnComplete) {
                    if (callOnComplete === void 0) { callOnComplete = false; }
                    if (uniqueId >= 0) {
                        LeanTween.init();
                        var backId = uniqueId & 65535;
                        var backCounter = uniqueId >> 16;
                        // Debug.Log("uniqueId:"+uniqueId+ " id:"+backId +" counter:"+backCounter + " setCounter:"+ tw     eens[backId].counter + " tweens[id].type:"+tweens[backId].type);
                        if (UnityEngine.Component.op_Equality(LeanTween.tweens[backId].trans, null) || (UnityEngine.GameObject.op_Equality(LeanTween.tweens[backId].trans.gameObject, gameObject) && System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter)))) {
                            if (callOnComplete && !Bridge.staticEquals(LeanTween.tweens[backId].optional.onComplete, null)) {
                                LeanTween.tweens[backId].optional.onComplete();
                            }
                            LeanTween.removeTween(backId);
                        }
                    }
                },
                /*LeanTween.cancel$5:static end.*/

                /*LeanTween.cancel:static start.*/
                cancel: function (ltRect, uniqueId) {
                    if (uniqueId >= 0) {
                        LeanTween.init();
                        var backId = uniqueId & 65535;
                        var backCounter = uniqueId >> 16;
                        // Debug.Log("uniqueId:"+uniqueId+ " id:"+backId +" action:"+(TweenAction)backType + " tweens[id].type:"+tweens[backId].type);
                        if (Bridge.referenceEquals(LeanTween.tweens[backId]._optional.ltRect, ltRect) && System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                            LeanTween.removeTween(backId);
                        }
                    }
                },
                /*LeanTween.cancel:static end.*/

                /*LeanTween.cancel$1:static start.*/
                cancel$1: function (uniqueId) {
                    LeanTween.cancel$2(uniqueId, false);
                },
                /*LeanTween.cancel$1:static end.*/

                /*LeanTween.cancel$2:static start.*/
                cancel$2: function (uniqueId, callOnComplete) {
                    if (uniqueId >= 0) {
                        LeanTween.init();
                        var backId = uniqueId & 65535;
                        var backCounter = uniqueId >> 16;
                        if (backId > ((LeanTween.tweens.length - 1) | 0)) { // sequence
                            var sequenceId = (backId - LeanTween.tweens.length) | 0;
                            var seq = LeanTween.sequences[sequenceId];
                            // Debug.Log("sequenceId:" + sequenceId+" maxSequences:"+maxSequences+" prev:"+seq.previous);

                            for (var i = 0; i < LeanTween.maxSequences; i = (i + 1) | 0) {
                                if (seq.current.tween != null) {
                                    var tweenId = seq.current.tween.uniqueId;
                                    var tweenIndex = tweenId & 65535;
                                    LeanTween.removeTween(tweenIndex);
                                }
                                if (seq.current.previous == null) {
                                    break;
                                }
                                seq.current = seq.current.previous;
                            }
                        } else { // tween
                            // Debug.Log("uniqueId:"+uniqueId+ " id:"+backId +" action:"+(TweenAction)backType + " tweens[id].type:"+tweens[backId].type);
                            if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                                if (callOnComplete && !Bridge.staticEquals(LeanTween.tweens[backId].optional.onComplete, null)) {
                                    LeanTween.tweens[backId].optional.onComplete();
                                }
                                LeanTween.removeTween(backId);
                            }
                        }
                    }
                },
                /*LeanTween.cancel$2:static end.*/

                /*LeanTween.descr:static start.*/
                descr: function (uniqueId) {
                    LeanTween.init();

                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;

                    //      Debug.Log("backId:" + backId+" backCounter:"+backCounter);
                    if (LeanTween.tweens[backId] != null && LeanTween.tweens[backId].uniqueId === uniqueId && System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                        // Debug.Log("tween count:" + tweens[backId].counter);
                        return LeanTween.tweens[backId];
                    }
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (LeanTween.tweens[i].uniqueId === uniqueId && System.Int64(LeanTween.tweens[i].counter).equals(System.Int64(backCounter))) {
                            return LeanTween.tweens[i];
                        }
                    }
                    return null;
                },
                /*LeanTween.descr:static end.*/

                /*LeanTween.description:static start.*/
                description: function (uniqueId) {
                    return LeanTween.descr(uniqueId);
                },
                /*LeanTween.description:static end.*/

                /*LeanTween.descriptions:static start.*/
                descriptions: function (gameObject) {
                    if (gameObject === void 0) { gameObject = null; }
                    if (UnityEngine.GameObject.op_Equality(gameObject, null)) {
                        return null;
                    }

                    var descrs = new (System.Collections.Generic.List$1(LTDescr)).ctor();
                    var trans = gameObject.transform;
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (LeanTween.tweens[i].toggle && UnityEngine.Component.op_Equality(LeanTween.tweens[i].trans, trans)) {
                            descrs.add(LeanTween.tweens[i]);
                        }
                    }
                    return descrs.ToArray();
                },
                /*LeanTween.descriptions:static end.*/

                /*LeanTween.pause$2:static start.*/
                pause$2: function (gameObject, uniqueId) {
                    LeanTween.pause(uniqueId);
                },
                /*LeanTween.pause$2:static end.*/

                /*LeanTween.pause:static start.*/
                pause: function (uniqueId) {
                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;
                    if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                        LeanTween.tweens[backId].pause();
                    }
                },
                /*LeanTween.pause:static end.*/

                /*LeanTween.pause$1:static start.*/
                pause$1: function (gameObject) {
                    var trans = gameObject.transform;
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Equality(LeanTween.tweens[i].trans, trans)) {
                            LeanTween.tweens[i].pause();
                        }
                    }
                },
                /*LeanTween.pause$1:static end.*/

                /*LeanTween.pauseAll:static start.*/
                pauseAll: function () {
                    LeanTween.init();
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        LeanTween.tweens[i].pause();
                    }
                },
                /*LeanTween.pauseAll:static end.*/

                /*LeanTween.resumeAll:static start.*/
                resumeAll: function () {
                    LeanTween.init();
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        LeanTween.tweens[i].resume();
                    }
                },
                /*LeanTween.resumeAll:static end.*/

                /*LeanTween.resume$2:static start.*/
                resume$2: function (gameObject, uniqueId) {
                    LeanTween.resume(uniqueId);
                },
                /*LeanTween.resume$2:static end.*/

                /*LeanTween.resume:static start.*/
                resume: function (uniqueId) {
                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;
                    if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter))) {
                        LeanTween.tweens[backId].resume();
                    }
                },
                /*LeanTween.resume:static end.*/

                /*LeanTween.resume$1:static start.*/
                resume$1: function (gameObject) {
                    var trans = gameObject.transform;
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (UnityEngine.Component.op_Equality(LeanTween.tweens[i].trans, trans)) {
                            LeanTween.tweens[i].resume();
                        }
                    }
                },
                /*LeanTween.resume$1:static end.*/

                /*LeanTween.isPaused$1:static start.*/
                isPaused$1: function (gameObject) {
                    if (gameObject === void 0) { gameObject = null; }
                    if (UnityEngine.GameObject.op_Equality(gameObject, null)) {
                        for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                            if (Bridge.equals(Bridge.box(LeanTween.tweens[i].direction, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(0.0, System.Single, System.Single.format, System.Single.getHashCode))) {
                                return true;
                            }
                        }
                        return false;
                    }
                    var trans = gameObject.transform;
                    for (var i1 = 0; i1 <= LeanTween.tweenMaxSearch; i1 = (i1 + 1) | 0) {
                        if (Bridge.equals(Bridge.box(LeanTween.tweens[i1].direction, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(0.0, System.Single, System.Single.format, System.Single.getHashCode)) && UnityEngine.Component.op_Equality(LeanTween.tweens[i1].trans, trans)) {
                            return true;
                        }
                    }
                    return false;
                },
                /*LeanTween.isPaused$1:static end.*/

                /*LeanTween.isPaused$2:static start.*/
                isPaused$2: function (rect) {
                    return LeanTween.isTweening$2(rect.gameObject);
                },
                /*LeanTween.isPaused$2:static end.*/

                /*LeanTween.isPaused:static start.*/
                isPaused: function (uniqueId) {
                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;
                    if (backId < 0 || backId >= LeanTween.maxTweens) {
                        return false;
                    }
                    // Debug.Log("tweens[backId].counter:"+tweens[backId].counter+" backCounter:"+backCounter +" toggle:"+tweens[backId].toggle);
                    if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter)) && Bridge.equals(Bridge.box(LeanTween.tweens[LeanTween.i].direction, System.Single, System.Single.format, System.Single.getHashCode), Bridge.box(0.0, System.Single, System.Single.format, System.Single.getHashCode))) {
                        return true;
                    }
                    return false;
                },
                /*LeanTween.isPaused:static end.*/

                /*LeanTween.isTweening$2:static start.*/
                isTweening$2: function (gameObject) {
                    if (gameObject === void 0) { gameObject = null; }
                    if (UnityEngine.GameObject.op_Equality(gameObject, null)) {
                        for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                            if (LeanTween.tweens[i].toggle) {
                                return true;
                            }
                        }
                        return false;
                    }
                    var trans = gameObject.transform;
                    for (var i1 = 0; i1 <= LeanTween.tweenMaxSearch; i1 = (i1 + 1) | 0) {
                        if (LeanTween.tweens[i1].toggle && UnityEngine.Component.op_Equality(LeanTween.tweens[i1].trans, trans)) {
                            return true;
                        }
                    }
                    return false;
                },
                /*LeanTween.isTweening$2:static end.*/

                /*LeanTween.isTweening$3:static start.*/
                isTweening$3: function (rect) {
                    return LeanTween.isTweening$2(rect.gameObject);
                },
                /*LeanTween.isTweening$3:static end.*/

                /*LeanTween.isTweening$1:static start.*/
                isTweening$1: function (uniqueId) {
                    var backId = uniqueId & 65535;
                    var backCounter = uniqueId >> 16;
                    if (backId < 0 || backId >= LeanTween.maxTweens) {
                        return false;
                    }
                    // Debug.Log("tweens[backId].counter:"+tweens[backId].counter+" backCounter:"+backCounter +" toggle:"+tweens[backId].toggle);
                    if (System.Int64(LeanTween.tweens[backId].counter).equals(System.Int64(backCounter)) && LeanTween.tweens[backId].toggle) {
                        return true;
                    }
                    return false;
                },
                /*LeanTween.isTweening$1:static end.*/

                /*LeanTween.isTweening:static start.*/
                isTweening: function (ltRect) {
                    for (var i = 0; i <= LeanTween.tweenMaxSearch; i = (i + 1) | 0) {
                        if (LeanTween.tweens[i].toggle && Bridge.referenceEquals(LeanTween.tweens[i]._optional.ltRect, ltRect)) {
                            return true;
                        }
                    }
                    return false;
                },
                /*LeanTween.isTweening:static end.*/

                /*LeanTween.drawBezierPath:static start.*/
                drawBezierPath: function (a, b, c, d, arrowSize, arrowTransform) {
                    if (arrowSize === void 0) { arrowSize = 0.0; }
                    if (arrowTransform === void 0) { arrowTransform = null; }
                    var last = a.$clone();
                    var p = new UnityEngine.Vector3();
                    var aa = (a.$clone().scale( -1 ).add( (b.$clone().sub( c )).scale( 3 ) ).add( d ));
                    var bb = (a.$clone().add( c )).scale( 3 ).sub( b.$clone().scale( 6 ) );
                    var cc = (b.$clone().sub( a )).scale( 3 );

                    var t;

                    if (arrowSize > 0.0) {
                        var beforePos = arrowTransform.position.$clone();
                        var beforeQ = arrowTransform.rotation.$clone();
                        var distanceTravelled = 0.0;

                        for (var k = 1.0; k <= 120.0; k++) {
                            t = k / 120.0;
                            p = ((aa.$clone().scale( t ).add( (bb) )).scale( t ).add( cc )).scale( t ).add( a );
                            UnityEngine.Gizmos.DrawLine(last.$clone(), p.$clone());
                            distanceTravelled += (p.$clone().sub( last )).length();
                            if (distanceTravelled > 1.0) {
                                distanceTravelled = distanceTravelled - 1.0;
                                /* float deltaY = p.y - last.y;
                                float deltaX = p.x - last.x;
                                float ang = Mathf.Atan(deltaY / deltaX);
                                Vector3 arrow = p + new Vector3( Mathf.Cos(ang+2.5f), Mathf.Sin(ang+2.5f), 0f)*0.5f;
                                Gizmos.DrawLine(p, arrow);
                                arrow = p + new Vector3( Mathf.Cos(ang+-2.5f), Mathf.Sin(ang+-2.5f), 0f)*0.5f;
                                Gizmos.DrawLine(p, arrow);*/

                                arrowTransform.position = p.$clone();
                                arrowTransform.LookAt$3(last.$clone(), new pc.Vec3( 0, 0, 1 ));
                                var to = arrowTransform.TransformDirection(pc.Vec3.RIGHT.clone());
                                // Debug.Log("to:"+to+" tweenEmpty.transform.position:"+arrowTransform.position);
                                var back = (last.$clone().sub( p ));
                                back = back.clone().normalize().$clone();
                                UnityEngine.Gizmos.DrawLine(p.$clone(), p.$clone().add( (to.$clone().add( back )).scale( arrowSize ) ));
                                to = arrowTransform.TransformDirection(pc.Vec3.RIGHT.clone().scale( -1 ));
                                UnityEngine.Gizmos.DrawLine(p.$clone(), p.$clone().add( (to.$clone().add( back )).scale( arrowSize ) ));
                            }
                            last = p.$clone();
                        }

                        arrowTransform.position = beforePos.$clone();
                        arrowTransform.rotation = beforeQ.$clone();
                    } else {
                        for (var k1 = 1.0; k1 <= 30.0; k1++) {
                            t = k1 / 30.0;
                            p = ((aa.$clone().scale( t ).add( (bb) )).scale( t ).add( cc )).scale( t ).add( a );
                            UnityEngine.Gizmos.DrawLine(last.$clone(), p.$clone());
                            last = p.$clone();
                        }
                    }
                },
                /*LeanTween.drawBezierPath:static end.*/

                /*LeanTween.logError:static start.*/
                logError: function (error) {
                    if (LeanTween.throwErrors) {
                        console.error(error);
                    } else {
                        console.log(error);
                    }
                    return null;
                },
                /*LeanTween.logError:static end.*/

                /*LeanTween.options$1:static start.*/
                options$1: function (seed) {
                    console.error("error this function is no longer used");
                    return null;
                },
                /*LeanTween.options$1:static end.*/

                /*LeanTween.options:static start.*/
                options: function () {
                    LeanTween.init();

                    var found = false;
                    //      Debug.Log("Search start");
                    for (LeanTween.j = 0, LeanTween.i = LeanTween.startSearch; LeanTween.j <= LeanTween.maxTweens; LeanTween.i = (LeanTween.i + 1) | 0) {
                        if (LeanTween.j >= LeanTween.maxTweens) {
                            return Bridge.as(LeanTween.logError("LeanTween - You have run out of available spaces for tweening. To avoid this error increase the number of spaces to available for tweening when you initialize the LeanTween class ex: LeanTween.init( " + (Bridge.Int.mul(LeanTween.maxTweens, 2)) + " );"), LTDescr);
                        }
                        if (LeanTween.i >= LeanTween.maxTweens) {
                            LeanTween.i = 0;
                        }
                        //          Debug.Log("searching i:"+i);
                        if (LeanTween.tweens[LeanTween.i].toggle === false) {
                            if (((LeanTween.i + 1) | 0) > LeanTween.tweenMaxSearch && ((LeanTween.i + 1) | 0) < LeanTween.maxTweens) {
                                LeanTween.tweenMaxSearch = (LeanTween.i + 1) | 0;
                            }
                            LeanTween.startSearch = (LeanTween.i + 1) | 0;
                            found = true;
                            break;
                        }

                        LeanTween.j = (LeanTween.j + 1) | 0;
                    }
                    if (found === false) {
                        LeanTween.logError("no available tween found!");
                    }

                    // Debug.Log("new tween with i:"+i+" counter:"+tweens[i].counter+" tweenMaxSearch:"+tweenMaxSearch+" tween:"+tweens[i]);
                    LeanTween.tweens[LeanTween.i].reset();

                    LeanTween.global_counter = (LeanTween.global_counter + 1) >>> 0;
                    if (LeanTween.global_counter > 32768) {
                        LeanTween.global_counter = 0;
                    }

                    LeanTween.tweens[LeanTween.i].setId(((LeanTween.i) >>> 0), LeanTween.global_counter);

                    return LeanTween.tweens[LeanTween.i];
                },
                /*LeanTween.options:static end.*/

                /*LeanTween.pushNewTween:static start.*/
                pushNewTween: function (gameObject, to, time, tween) {
                    LeanTween.init$1(LeanTween.maxTweens);
                    if (UnityEngine.GameObject.op_Equality(gameObject, null) || tween == null) {
                        return null;
                    }

                    tween.trans = gameObject.transform;
                    tween.to = to.$clone();
                    tween.time = time;

                    if (tween.time <= 0.0) {
                        tween.updateInternal();
                    }
                    //tween.hasPhysics = gameObject.rigidbody!=null;

                    return tween;
                },
                /*LeanTween.pushNewTween:static end.*/

                /*LeanTween.play:static start.*/
                play: function (rectTransform, sprites) {
                    var defaultFrameRate = 0.25;
                    var time = defaultFrameRate * sprites.length;
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( sprites.length - 1.0, 0, 0 ), time, LeanTween.options().setCanvasPlaySprite().setSprites(sprites).setRepeat(-1));
                },
                /*LeanTween.play:static end.*/

                /*LeanTween.sequence:static start.*/
                sequence: function (initSequence) {
                    if (initSequence === void 0) { initSequence = true; }
                    LeanTween.init$1(LeanTween.maxTweens);
                    // Loop through and find available sequence
                    for (var i = 0; i < LeanTween.sequences.length; i = (i + 1) | 0) {
                        //          Debug.Log("i:" + i + " sequences[i]:" + sequences[i]);
                        if (LeanTween.sequences[i].tween == null || LeanTween.sequences[i].tween.toggle === false) {
                            if (LeanTween.sequences[i].toggle === false) {
                                var seq = LeanTween.sequences[i];
                                if (initSequence) {
                                    seq.init(((((i + LeanTween.tweens.length) | 0)) >>> 0), LeanTween.global_counter);

                                    LeanTween.global_counter = (LeanTween.global_counter + 1) >>> 0;
                                    if (LeanTween.global_counter > 32768) {
                                        LeanTween.global_counter = 0;
                                    }
                                } else {
                                    seq.reset();
                                }

                                return seq;
                            }
                        }
                    }

                    return null;
                },
                /*LeanTween.sequence:static end.*/

                /*LeanTween.alpha$1:static start.*/
                alpha$1: function (gameObject, to, time) {
                    var lt = LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setAlpha());

                    var ren = gameObject.GetComponent(UnityEngine.SpriteRenderer);
                    lt.spriteRen = ren;
                    return lt;
                },
                /*LeanTween.alpha$1:static end.*/

                /*LeanTween.alpha:static start.*/
                alpha: function (ltRect, to, time) {
                    ltRect.alphaEnabled = true;
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setGUIAlpha().setRect(ltRect));
                },
                /*LeanTween.alpha:static end.*/

                /*LeanTween.alpha$2:static start.*/
                alpha$2: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasAlpha().setRect$2(rectTrans));
                },
                /*LeanTween.alpha$2:static end.*/

                /*LeanTween.textAlpha:static start.*/
                textAlpha: function (rectTransform, to, time) {
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setTextAlpha());
                },
                /*LeanTween.textAlpha:static end.*/

                /*LeanTween.alphaText:static start.*/
                alphaText: function (rectTransform, to, time) {
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setTextAlpha());
                },
                /*LeanTween.alphaText:static end.*/

                /*LeanTween.alphaCanvas:static start.*/
                alphaCanvas: function (canvasGroup, to, time) {
                    return LeanTween.pushNewTween(canvasGroup.gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCanvasGroupAlpha());
                },
                /*LeanTween.alphaCanvas:static end.*/

                /*LeanTween.alphaVertex:static start.*/
                alphaVertex: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setAlphaVertex());
                },
                /*LeanTween.alphaVertex:static end.*/

                /*LeanTween.color:static start.*/
                color: function (gameObject, to, time) {
                    var lt = LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setColor().setPoint(new pc.Vec3( to.r, to.g, to.b )));
                    var ren = gameObject.GetComponent(UnityEngine.SpriteRenderer);
                    lt.spriteRen = ren;
                    return lt;
                },
                /*LeanTween.color:static end.*/

                /*LeanTween.color$1:static start.*/
                color$1: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setCanvasColor().setRect$2(rectTrans).setPoint(new pc.Vec3( to.r, to.g, to.b )));
                },
                /*LeanTween.color$1:static end.*/

                /*LeanTween.textColor:static start.*/
                textColor: function (rectTransform, to, time) {
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setTextColor().setPoint(new pc.Vec3( to.r, to.g, to.b )));
                },
                /*LeanTween.textColor:static end.*/

                /*LeanTween.colorText:static start.*/
                colorText: function (rectTransform, to, time) {
                    return LeanTween.pushNewTween(rectTransform.gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setTextColor().setPoint(new pc.Vec3( to.r, to.g, to.b )));
                },
                /*LeanTween.colorText:static end.*/

                /*LeanTween.delayedCall:static start.*/
                delayedCall: function (delayTime, callback) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setOnComplete(callback));
                },
                /*LeanTween.delayedCall:static end.*/

                /*LeanTween.delayedCall$1:static start.*/
                delayedCall$1: function (delayTime, callback) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setOnComplete$1(callback));
                },
                /*LeanTween.delayedCall$1:static end.*/

                /*LeanTween.delayedCall$2:static start.*/
                delayedCall$2: function (gameObject, delayTime, callback) {
                    return LeanTween.pushNewTween(gameObject, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setOnComplete(callback));
                },
                /*LeanTween.delayedCall$2:static end.*/

                /*LeanTween.delayedCall$3:static start.*/
                delayedCall$3: function (gameObject, delayTime, callback) {
                    return LeanTween.pushNewTween(gameObject, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setOnComplete$1(callback));
                },
                /*LeanTween.delayedCall$3:static end.*/

                /*LeanTween.destroyAfter:static start.*/
                destroyAfter: function (rect, delayTime) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, pc.Vec3.ZERO.clone(), delayTime, LeanTween.options().setCallback().setRect(rect).setDestroyOnComplete(true));
                },
                /*LeanTween.destroyAfter:static end.*/

                /*LeanTween.move$5:static start.*/
                move$5: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, to.$clone(), time, LeanTween.options().setMove());
                },
                /*LeanTween.move$5:static end.*/

                /*LeanTween.move$4:static start.*/
                move$4: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to.x, to.y, gameObject.transform.position.z ), time, LeanTween.options().setMove());
                },
                /*LeanTween.move$4:static end.*/

                /*LeanTween.move$6:static start.*/
                move$6: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveCurved();
                    if (LeanTween.d.optional.path == null) {
                        LeanTween.d.optional.path = new LTBezierPath.$ctor1(to);
                    } else {
                        LeanTween.d.optional.path.setPoints(to);
                    }

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.move$6:static end.*/

                /*LeanTween.move$1:static start.*/
                move$1: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveCurved();
                    LeanTween.d.optional.path = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.move$1:static end.*/

                /*LeanTween.move$2:static start.*/
                move$2: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSpline();
                    LeanTween.d.optional.spline = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.move$2:static end.*/

                /*LeanTween.move:static start.*/
                move: function (ltRect, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, UnityEngine.Vector3.FromVector2(to.$clone()), time, LeanTween.options().setGUIMove().setRect(ltRect));
                },
                /*LeanTween.move:static end.*/

                /*LeanTween.move$3:static start.*/
                move$3: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, pc.Vec3.ZERO.clone(), time, LeanTween.options().setTo(to).setMoveToTransform());
                },
                /*LeanTween.move$3:static end.*/

                /*LeanTween.move$7:static start.*/
                move$7: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, to.$clone(), time, LeanTween.options().setCanvasMove().setRect$2(rectTrans));
                },
                /*LeanTween.move$7:static end.*/

                /*LeanTween.moveSpline$1:static start.*/
                moveSpline$1: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSpline();
                    LeanTween.d.optional.spline = new LTSpline.ctor(to);

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveSpline$1:static end.*/

                /*LeanTween.moveSpline:static start.*/
                moveSpline: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSpline();
                    LeanTween.d.optional.spline = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveSpline:static end.*/

                /*LeanTween.moveSplineLocal:static start.*/
                moveSplineLocal: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSplineLocal();
                    LeanTween.d.optional.spline = new LTSpline.ctor(to);

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveSplineLocal:static end.*/

                /*LeanTween.moveMargin:static start.*/
                moveMargin: function (ltRect, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, UnityEngine.Vector3.FromVector2(to.$clone()), time, LeanTween.options().setGUIMoveMargin().setRect(ltRect));
                },
                /*LeanTween.moveMargin:static end.*/

                /*LeanTween.moveX:static start.*/
                moveX: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveX());
                },
                /*LeanTween.moveX:static end.*/

                /*LeanTween.moveX$1:static start.*/
                moveX$1: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasMoveX().setRect$2(rectTrans));
                },
                /*LeanTween.moveX$1:static end.*/

                /*LeanTween.moveY:static start.*/
                moveY: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveY());
                },
                /*LeanTween.moveY:static end.*/

                /*LeanTween.moveY$1:static start.*/
                moveY$1: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasMoveY().setRect$2(rectTrans));
                },
                /*LeanTween.moveY$1:static end.*/

                /*LeanTween.moveZ:static start.*/
                moveZ: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveZ());
                },
                /*LeanTween.moveZ:static end.*/

                /*LeanTween.moveZ$1:static start.*/
                moveZ$1: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasMoveZ().setRect$2(rectTrans));
                },
                /*LeanTween.moveZ$1:static end.*/

                /*LeanTween.moveLocal$2:static start.*/
                moveLocal$2: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, to.$clone(), time, LeanTween.options().setMoveLocal());
                },
                /*LeanTween.moveLocal$2:static end.*/

                /*LeanTween.moveLocal$3:static start.*/
                moveLocal$3: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveCurvedLocal();
                    if (LeanTween.d.optional.path == null) {
                        LeanTween.d.optional.path = new LTBezierPath.$ctor1(to);
                    } else {
                        LeanTween.d.optional.path.setPoints(to);
                    }

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveLocal$3:static end.*/

                /*LeanTween.moveLocal:static start.*/
                moveLocal: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveCurvedLocal();
                    LeanTween.d.optional.path = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveLocal:static end.*/

                /*LeanTween.moveLocal$1:static start.*/
                moveLocal$1: function (gameObject, to, time) {
                    LeanTween.d = LeanTween.options().setMoveSplineLocal();
                    LeanTween.d.optional.spline = to;

                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, 0.0, 0.0 ), time, LeanTween.d);
                },
                /*LeanTween.moveLocal$1:static end.*/

                /*LeanTween.moveLocalX:static start.*/
                moveLocalX: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveLocalX());
                },
                /*LeanTween.moveLocalX:static end.*/

                /*LeanTween.moveLocalY:static start.*/
                moveLocalY: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveLocalY());
                },
                /*LeanTween.moveLocalY:static end.*/

                /*LeanTween.moveLocalZ:static start.*/
                moveLocalZ: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setMoveLocalZ());
                },
                /*LeanTween.moveLocalZ:static end.*/

                /*LeanTween.rotate$1:static start.*/
                rotate$1: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, to.$clone(), time, LeanTween.options().setRotate());
                },
                /*LeanTween.rotate$1:static end.*/

                /*LeanTween.rotate:static start.*/
                rotate: function (ltRect, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setGUIRotate().setRect(ltRect));
                },
                /*LeanTween.rotate:static end.*/

                /*LeanTween.rotate$2:static start.*/
                rotate$2: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasRotateAround().setRect$2(rectTrans).setAxis(new pc.Vec3( 0, 0, 1 )));
                },
                /*LeanTween.rotate$2:static end.*/

                /*LeanTween.rotate$3:static start.*/
                rotate$3: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, to.$clone(), time, LeanTween.options().setCanvasRotateAround().setRect$2(rectTrans).setAxis(new pc.Vec3( 0, 0, 1 )));
                },
                /*LeanTween.rotate$3:static end.*/

                /*LeanTween.rotateLocal:static start.*/
                rotateLocal: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, to.$clone(), time, LeanTween.options().setRotateLocal());
                },
                /*LeanTween.rotateLocal:static end.*/

                /*LeanTween.rotateX:static start.*/
                rotateX: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setRotateX());
                },
                /*LeanTween.rotateX:static end.*/

                /*LeanTween.rotateY:static start.*/
                rotateY: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setRotateY());
                },
                /*LeanTween.rotateY:static end.*/

                /*LeanTween.rotateZ:static start.*/
                rotateZ: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setRotateZ());
                },
                /*LeanTween.rotateZ:static end.*/

                /*LeanTween.rotateAround:static start.*/
                rotateAround: function (gameObject, axis, add, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( add, 0.0, 0.0 ), time, LeanTween.options().setAxis(axis.$clone()).setRotateAround());
                },
                /*LeanTween.rotateAround:static end.*/

                /*LeanTween.rotateAround$1:static start.*/
                rotateAround$1: function (rectTrans, axis, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasRotateAround().setRect$2(rectTrans).setAxis(axis.$clone()));
                },
                /*LeanTween.rotateAround$1:static end.*/

                /*LeanTween.rotateAroundLocal:static start.*/
                rotateAroundLocal: function (gameObject, axis, add, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( add, 0.0, 0.0 ), time, LeanTween.options().setRotateAroundLocal().setAxis(axis.$clone()));
                },
                /*LeanTween.rotateAroundLocal:static end.*/

                /*LeanTween.rotateAroundLocal$1:static start.*/
                rotateAroundLocal$1: function (rectTrans, axis, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, new pc.Vec3( to, 0.0, 0.0 ), time, LeanTween.options().setCanvasRotateAroundLocal().setRect$2(rectTrans).setAxis(axis.$clone()));
                },
                /*LeanTween.rotateAroundLocal$1:static end.*/

                /*LeanTween.scale$1:static start.*/
                scale$1: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, to.$clone(), time, LeanTween.options().setScale());
                },
                /*LeanTween.scale$1:static end.*/

                /*LeanTween.scale:static start.*/
                scale: function (ltRect, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, UnityEngine.Vector3.FromVector2(to.$clone()), time, LeanTween.options().setGUIScale().setRect(ltRect));
                },
                /*LeanTween.scale:static end.*/

                /*LeanTween.scale$2:static start.*/
                scale$2: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, to.$clone(), time, LeanTween.options().setCanvasScale().setRect$2(rectTrans));
                },
                /*LeanTween.scale$2:static end.*/

                /*LeanTween.scaleX:static start.*/
                scaleX: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setScaleX());
                },
                /*LeanTween.scaleX:static end.*/

                /*LeanTween.scaleY:static start.*/
                scaleY: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setScaleY());
                },
                /*LeanTween.scaleY:static end.*/

                /*LeanTween.scaleZ:static start.*/
                scaleZ: function (gameObject, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setScaleZ());
                },
                /*LeanTween.scaleZ:static end.*/

                /*LeanTween.value$8:static start.*/
                value$8: function (gameObject, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setFrom$1(new pc.Vec3( from, 0, 0 )));
                },
                /*LeanTween.value$8:static end.*/

                /*LeanTween.value:static start.*/
                value: function (from, to, time) {
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setFrom$1(new pc.Vec3( from, 0, 0 )));
                },
                /*LeanTween.value:static end.*/

                /*LeanTween.value$10:static start.*/
                value$10: function (gameObject, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to.x, to.y, 0 ), time, LeanTween.options().setValue3().setTo$1(new pc.Vec3( to.x, to.y, 0.0 )).setFrom$1(new pc.Vec3( from.x, from.y, 0 )));
                },
                /*LeanTween.value$10:static end.*/

                /*LeanTween.value$11:static start.*/
                value$11: function (gameObject, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, to.$clone(), time, LeanTween.options().setValue3().setFrom$1(from.$clone()));
                },
                /*LeanTween.value$11:static end.*/

                /*LeanTween.value$9:static start.*/
                value$9: function (gameObject, from, to, time) {
                    var lt = LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setCallbackColor().setPoint(new pc.Vec3( to.r, to.g, to.b )).setFromColor(from.$clone()).setHasInitialized(false));

                    var ren = gameObject.GetComponent(UnityEngine.SpriteRenderer);
                    lt.spriteRen = ren;
                    return lt;
                },
                /*LeanTween.value$9:static end.*/

                /*LeanTween.value$1:static start.*/
                value$1: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setTo$1(new pc.Vec3( to, 0, 0 )).setFrom$1(new pc.Vec3( from, 0, 0 )).setOnUpdate(callOnUpdate));
                },
                /*LeanTween.value$1:static end.*/

                /*LeanTween.value$6:static start.*/
                value$6: function (gameObject, callOnUpdateRatio, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setTo$1(new pc.Vec3( to, 0, 0 )).setFrom$1(new pc.Vec3( from, 0, 0 )).setOnUpdateRatio(callOnUpdateRatio));
                },
                /*LeanTween.value$6:static end.*/

                /*LeanTween.value$2:static start.*/
                value$2: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setCallbackColor().setPoint(new pc.Vec3( to.r, to.g, to.b )).setAxis(new pc.Vec3( from.r, from.g, from.b )).setFrom$1(new pc.Vec3( 0.0, from.a, 0.0 )).setHasInitialized(false).setOnUpdateColor(callOnUpdate));
                },
                /*LeanTween.value$2:static end.*/

                /*LeanTween.value$7:static start.*/
                value$7: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( 1.0, to.a, 0.0 ), time, LeanTween.options().setCallbackColor().setPoint(new pc.Vec3( to.r, to.g, to.b )).setAxis(new pc.Vec3( from.r, from.g, from.b )).setFrom$1(new pc.Vec3( 0.0, from.a, 0.0 )).setHasInitialized(false).setOnUpdateColor$1(callOnUpdate));
                },
                /*LeanTween.value$7:static end.*/

                /*LeanTween.value$3:static start.*/
                value$3: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to.x, to.y, 0.0 ), time, LeanTween.options().setValue3().setTo$1(new pc.Vec3( to.x, to.y, 0.0 )).setFrom$1(new pc.Vec3( from.x, from.y, 0.0 )).setOnUpdateVector2(callOnUpdate));
                },
                /*LeanTween.value$3:static end.*/

                /*LeanTween.value$4:static start.*/
                value$4: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, to.$clone(), time, LeanTween.options().setValue3().setTo$1(to.$clone()).setFrom$1(from.$clone()).setOnUpdateVector3(callOnUpdate));
                },
                /*LeanTween.value$4:static end.*/

                /*LeanTween.value$5:static start.*/
                value$5: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.pushNewTween(gameObject, new pc.Vec3( to, 0, 0 ), time, LeanTween.options().setCallback().setTo$1(new pc.Vec3( to, 0, 0 )).setFrom$1(new pc.Vec3( from, 0, 0 )).setOnUpdate$4(callOnUpdate, gameObject));
                },
                /*LeanTween.value$5:static end.*/

                /*LeanTween.delayedSound:static start.*/
                delayedSound: function (audio, pos, volume) {
                    //Debug.LogError("Delay sound??");
                    return LeanTween.pushNewTween(LeanTween.tweenEmpty, pos.$clone(), 0.0, LeanTween.options().setDelayedSound().setTo$1(pos.$clone()).setFrom$1(new pc.Vec3( volume, 0, 0 )).setAudio(audio));
                },
                /*LeanTween.delayedSound:static end.*/

                /*LeanTween.delayedSound$1:static start.*/
                delayedSound$1: function (gameObject, audio, pos, volume) {
                    //Debug.LogError("Delay sound??");
                    return LeanTween.pushNewTween(gameObject, pos.$clone(), 0.0, LeanTween.options().setDelayedSound().setTo$1(pos.$clone()).setFrom$1(new pc.Vec3( volume, 0, 0 )).setAudio(audio));
                },
                /*LeanTween.delayedSound$1:static end.*/

                /*LeanTween.size:static start.*/
                size: function (rectTrans, to, time) {
                    return LeanTween.pushNewTween(rectTrans.gameObject, UnityEngine.Vector3.FromVector2(to.$clone()), time, LeanTween.options().setCanvasSizeDelta().setRect$2(rectTrans));
                },
                /*LeanTween.size:static end.*/

                /*LeanTween.tweenOnCurve:static start.*/
                tweenOnCurve: function (tweenDescr, ratioPassed) {
                    // Debug.Log("single ratio:"+ratioPassed+" tweenDescr.animationCurve.Evaluate(ratioPassed):"+tweenDescr.animationCurve.Evaluate(ratioPassed));
                    return tweenDescr.from.x + (tweenDescr.diff.x) * tweenDescr.optional.animationCurve.value(ratioPassed);
                },
                /*LeanTween.tweenOnCurve:static end.*/

                /*LeanTween.tweenOnCurveVector:static start.*/
                tweenOnCurveVector: function (tweenDescr, ratioPassed) {
                    return new pc.Vec3( tweenDescr.from.x + (tweenDescr.diff.x) * tweenDescr.optional.animationCurve.value(ratioPassed), tweenDescr.from.y + (tweenDescr.diff.y) * tweenDescr.optional.animationCurve.value(ratioPassed), tweenDescr.from.z + (tweenDescr.diff.z) * tweenDescr.optional.animationCurve.value(ratioPassed) );
                },
                /*LeanTween.tweenOnCurveVector:static end.*/

                /*LeanTween.easeOutQuadOpt:static start.*/
                easeOutQuadOpt: function (start, diff, ratioPassed) {
                    return -diff * ratioPassed * (ratioPassed - 2) + start;
                },
                /*LeanTween.easeOutQuadOpt:static end.*/

                /*LeanTween.easeInQuadOpt:static start.*/
                easeInQuadOpt: function (start, diff, ratioPassed) {
                    return diff * ratioPassed * ratioPassed + start;
                },
                /*LeanTween.easeInQuadOpt:static end.*/

                /*LeanTween.easeInOutQuadOpt:static start.*/
                easeInOutQuadOpt: function (start, diff, ratioPassed) {
                    ratioPassed /= 0.5;
                    if (ratioPassed < 1) {
                        return diff / 2 * ratioPassed * ratioPassed + start;
                    }
                    ratioPassed--;
                    return -diff / 2 * (ratioPassed * (ratioPassed - 2) - 1) + start;
                },
                /*LeanTween.easeInOutQuadOpt:static end.*/

                /*LeanTween.easeInOutQuadOpt$1:static start.*/
                easeInOutQuadOpt$1: function (start, diff, ratioPassed) {
                    ratioPassed /= 0.5;
                    if (ratioPassed < 1) {
                        return diff.$clone().scale( 1.0 / ( 2 ) ).scale( ratioPassed ).scale( ratioPassed ).add( start );
                    }
                    ratioPassed--;
                    return diff.$clone().scale( -1 ).scale( 1.0 / ( 2 ) ).scale( (ratioPassed * (ratioPassed - 2) - 1) ).add( start );
                },
                /*LeanTween.easeInOutQuadOpt$1:static end.*/

                /*LeanTween.linear:static start.*/
                linear: function (start, end, val) {
                    return pc.math.lerp(start, end, val);
                },
                /*LeanTween.linear:static end.*/

                /*LeanTween.clerp:static start.*/
                clerp: function (start, end, val) {
                    var min = 0.0;
                    var max = 360.0;
                    var half = Math.abs((max - min) / 2.0);
                    var retval = 0.0;
                    var diff = 0.0;
                    if ((end - start) < -half) {
                        diff = ((max - start) + end) * val;
                        retval = start + diff;
                    } else if ((end - start) > half) {
                        diff = -((max - end) + start) * val;
                        retval = start + diff;
                    } else {
                        retval = start + (end - start) * val;
                    }
                    return retval;
                },
                /*LeanTween.clerp:static end.*/

                /*LeanTween.spring:static start.*/
                spring: function (start, end, val) {
                    val = Math.max(0, Math.min(1, val));
                    val = (Math.sin(val * UnityEngine.Mathf.PI * (0.2 + 2.5 * val * val * val)) * Math.pow(1.0 - val, 2.2) + val) * (1.0 + (1.2 * (1.0 - val)));
                    return start + (end - start) * val;
                },
                /*LeanTween.spring:static end.*/

                /*LeanTween.easeInQuad:static start.*/
                easeInQuad: function (start, end, val) {
                    end -= start;
                    return end * val * val + start;
                },
                /*LeanTween.easeInQuad:static end.*/

                /*LeanTween.easeOutQuad:static start.*/
                easeOutQuad: function (start, end, val) {
                    end -= start;
                    return -end * val * (val - 2) + start;
                },
                /*LeanTween.easeOutQuad:static end.*/

                /*LeanTween.easeInOutQuad:static start.*/
                easeInOutQuad: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * val * val + start;
                    }
                    val--;
                    return -end / 2 * (val * (val - 2) - 1) + start;
                },
                /*LeanTween.easeInOutQuad:static end.*/

                /*LeanTween.easeInOutQuadOpt2:static start.*/
                easeInOutQuadOpt2: function (start, diffBy2, val, val2) {
                    val /= 0.5;
                    if (val < 1) {
                        return diffBy2 * val2 + start;
                    }
                    val--;
                    return -diffBy2 * ((val2 - 2) - 1.0) + start;
                },
                /*LeanTween.easeInOutQuadOpt2:static end.*/

                /*LeanTween.easeInCubic:static start.*/
                easeInCubic: function (start, end, val) {
                    end -= start;
                    return end * val * val * val + start;
                },
                /*LeanTween.easeInCubic:static end.*/

                /*LeanTween.easeOutCubic:static start.*/
                easeOutCubic: function (start, end, val) {
                    val--;
                    end -= start;
                    return end * (val * val * val + 1) + start;
                },
                /*LeanTween.easeOutCubic:static end.*/

                /*LeanTween.easeInOutCubic:static start.*/
                easeInOutCubic: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * val * val * val + start;
                    }
                    val -= 2;
                    return end / 2 * (val * val * val + 2) + start;
                },
                /*LeanTween.easeInOutCubic:static end.*/

                /*LeanTween.easeInQuart:static start.*/
                easeInQuart: function (start, end, val) {
                    end -= start;
                    return end * val * val * val * val + start;
                },
                /*LeanTween.easeInQuart:static end.*/

                /*LeanTween.easeOutQuart:static start.*/
                easeOutQuart: function (start, end, val) {
                    val--;
                    end -= start;
                    return -end * (val * val * val * val - 1) + start;
                },
                /*LeanTween.easeOutQuart:static end.*/

                /*LeanTween.easeInOutQuart:static start.*/
                easeInOutQuart: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * val * val * val * val + start;
                    }
                    val -= 2;
                    return -end / 2 * (val * val * val * val - 2) + start;
                },
                /*LeanTween.easeInOutQuart:static end.*/

                /*LeanTween.easeInQuint:static start.*/
                easeInQuint: function (start, end, val) {
                    end -= start;
                    return end * val * val * val * val * val + start;
                },
                /*LeanTween.easeInQuint:static end.*/

                /*LeanTween.easeOutQuint:static start.*/
                easeOutQuint: function (start, end, val) {
                    val--;
                    end -= start;
                    return end * (val * val * val * val * val + 1) + start;
                },
                /*LeanTween.easeOutQuint:static end.*/

                /*LeanTween.easeInOutQuint:static start.*/
                easeInOutQuint: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * val * val * val * val * val + start;
                    }
                    val -= 2;
                    return end / 2 * (val * val * val * val * val + 2) + start;
                },
                /*LeanTween.easeInOutQuint:static end.*/

                /*LeanTween.easeInSine:static start.*/
                easeInSine: function (start, end, val) {
                    end -= start;
                    return -end * Math.cos(val / 1 * (1.57079637)) + end + start;
                },
                /*LeanTween.easeInSine:static end.*/

                /*LeanTween.easeOutSine:static start.*/
                easeOutSine: function (start, end, val) {
                    end -= start;
                    return end * Math.sin(val / 1 * (1.57079637)) + start;
                },
                /*LeanTween.easeOutSine:static end.*/

                /*LeanTween.easeInOutSine:static start.*/
                easeInOutSine: function (start, end, val) {
                    end -= start;
                    return -end / 2 * (Math.cos(UnityEngine.Mathf.PI * val / 1) - 1) + start;
                },
                /*LeanTween.easeInOutSine:static end.*/

                /*LeanTween.easeInExpo:static start.*/
                easeInExpo: function (start, end, val) {
                    end -= start;
                    return end * Math.pow(2, 10 * (val / 1 - 1)) + start;
                },
                /*LeanTween.easeInExpo:static end.*/

                /*LeanTween.easeOutExpo:static start.*/
                easeOutExpo: function (start, end, val) {
                    end -= start;
                    return end * (-Math.pow(2, -10 * val / 1) + 1) + start;
                },
                /*LeanTween.easeOutExpo:static end.*/

                /*LeanTween.easeInOutExpo:static start.*/
                easeInOutExpo: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return end / 2 * Math.pow(2, 10 * (val - 1)) + start;
                    }
                    val--;
                    return end / 2 * (-Math.pow(2, -10 * val) + 2) + start;
                },
                /*LeanTween.easeInOutExpo:static end.*/

                /*LeanTween.easeInCirc:static start.*/
                easeInCirc: function (start, end, val) {
                    end -= start;
                    return -end * (Math.sqrt(1 - val * val) - 1) + start;
                },
                /*LeanTween.easeInCirc:static end.*/

                /*LeanTween.easeOutCirc:static start.*/
                easeOutCirc: function (start, end, val) {
                    val--;
                    end -= start;
                    return end * Math.sqrt(1 - val * val) + start;
                },
                /*LeanTween.easeOutCirc:static end.*/

                /*LeanTween.easeInOutCirc:static start.*/
                easeInOutCirc: function (start, end, val) {
                    val /= 0.5;
                    end -= start;
                    if (val < 1) {
                        return -end / 2 * (Math.sqrt(1 - val * val) - 1) + start;
                    }
                    val -= 2;
                    return end / 2 * (Math.sqrt(1 - val * val) + 1) + start;
                },
                /*LeanTween.easeInOutCirc:static end.*/

                /*LeanTween.easeInBounce:static start.*/
                easeInBounce: function (start, end, val) {
                    end -= start;
                    var d = 1.0;
                    return end - LeanTween.easeOutBounce(0, end, d - val) + start;
                },
                /*LeanTween.easeInBounce:static end.*/

                /*LeanTween.easeOutBounce:static start.*/
                easeOutBounce: function (start, end, val) {
                    val /= 1.0;
                    end -= start;
                    if (val < (0.363636374)) {
                        return end * (7.5625 * val * val) + start;
                    } else if (val < (0.727272749)) {
                        val -= (0.545454562);
                        return end * (7.5625 * (val) * val + 0.75) + start;
                    } else if (val < (0.90909090909090906)) {
                        val -= (0.8181818);
                        return end * (7.5625 * (val) * val + 0.9375) + start;
                    } else {
                        val -= (0.954545438);
                        return end * (7.5625 * (val) * val + 0.984375) + start;
                    }
                },
                /*LeanTween.easeOutBounce:static end.*/

                /*LeanTween.easeInOutBounce:static start.*/
                easeInOutBounce: function (start, end, val) {
                    end -= start;
                    var d = 1.0;
                    if (val < d / 2) {
                        return LeanTween.easeInBounce(0, end, val * 2) * 0.5 + start;
                    } else {
                        return LeanTween.easeOutBounce(0, end, val * 2 - d) * 0.5 + end * 0.5 + start;
                    }
                },
                /*LeanTween.easeInOutBounce:static end.*/

                /*LeanTween.easeInBack:static start.*/
                easeInBack: function (start, end, val, overshoot) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    end -= start;
                    val /= 1;
                    var s = 1.70158 * overshoot;
                    return end * (val) * val * ((s + 1) * val - s) + start;
                },
                /*LeanTween.easeInBack:static end.*/

                /*LeanTween.easeOutBack:static start.*/
                easeOutBack: function (start, end, val, overshoot) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    var s = 1.70158 * overshoot;
                    end -= start;
                    val = (val / 1) - 1;
                    return end * ((val) * val * ((s + 1) * val + s) + 1) + start;
                },
                /*LeanTween.easeOutBack:static end.*/

                /*LeanTween.easeInOutBack:static start.*/
                easeInOutBack: function (start, end, val, overshoot) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    var s = 1.70158 * overshoot;
                    end -= start;
                    val /= 0.5;
                    if ((val) < 1) {
                        s *= (1.525) * overshoot;
                        return end / 2 * (val * val * (((s) + 1) * val - s)) + start;
                    }
                    val -= 2;
                    s *= (1.525) * overshoot;
                    return end / 2 * ((val) * val * (((s) + 1) * val + s) + 2) + start;
                },
                /*LeanTween.easeInOutBack:static end.*/

                /*LeanTween.easeInElastic:static start.*/
                easeInElastic: function (start, end, val, overshoot, period) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    if (period === void 0) { period = 0.3; }
                    end -= start;

                    var p = period;
                    var s = 0.0;
                    var a = 0.0;

                    if (val === 0.0) {
                        return start;
                    }

                    if (val === 1.0) {
                        return start + end;
                    }

                    if (a === 0.0 || a < Math.abs(end)) {
                        a = end;
                        s = p / 4.0;
                    } else {
                        s = p / (6.28318548) * Math.asin(end / a);
                    }

                    if (overshoot > 1.0 && val > 0.6) {
                        overshoot = 1.0 + ((1.0 - val) / 0.4 * (overshoot - 1.0));
                    }
                    // Debug.Log("ease in elastic val:"+val+" a:"+a+" overshoot:"+overshoot);

                    val = val - 1.0;
                    return start - (a * Math.pow(2.0, 10.0 * val) * Math.sin((val - s) * (6.28318548) / p)) * overshoot;
                },
                /*LeanTween.easeInElastic:static end.*/

                /*LeanTween.easeOutElastic:static start.*/
                easeOutElastic: function (start, end, val, overshoot, period) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    if (period === void 0) { period = 0.3; }
                    end -= start;

                    var p = period;
                    var s = 0.0;
                    var a = 0.0;

                    if (val === 0.0) {
                        return start;
                    }

                    // Debug.Log("ease out elastic val:"+val+" a:"+a);
                    if (val === 1.0) {
                        return start + end;
                    }

                    if (a === 0.0 || a < Math.abs(end)) {
                        a = end;
                        s = p / 4.0;
                    } else {
                        s = p / (6.28318548) * Math.asin(end / a);
                    }
                    if (overshoot > 1.0 && val < 0.4) {
                        overshoot = 1.0 + (val / 0.4 * (overshoot - 1.0));
                    }
                    // Debug.Log("ease out elastic val:"+val+" a:"+a+" overshoot:"+overshoot);

                    return start + end + a * Math.pow(2.0, -10.0 * val) * Math.sin((val - s) * (6.28318548) / p) * overshoot;
                },
                /*LeanTween.easeOutElastic:static end.*/

                /*LeanTween.easeInOutElastic:static start.*/
                easeInOutElastic: function (start, end, val, overshoot, period) {
                    if (overshoot === void 0) { overshoot = 1.0; }
                    if (period === void 0) { period = 0.3; }
                    end -= start;

                    var p = period;
                    var s = 0.0;
                    var a = 0.0;

                    if (val === 0.0) {
                        return start;
                    }

                    val = val / (0.5);
                    if (val === 2.0) {
                        return start + end;
                    }

                    if (a === 0.0 || a < Math.abs(end)) {
                        a = end;
                        s = p / 4.0;
                    } else {
                        s = p / (6.28318548) * Math.asin(end / a);
                    }

                    if (overshoot > 1.0) {
                        if (val < 0.2) {
                            overshoot = 1.0 + (val / 0.2 * (overshoot - 1.0));
                        } else if (val > 0.8) {
                            overshoot = 1.0 + ((1.0 - val) / 0.2 * (overshoot - 1.0));
                        }
                    }

                    if (val < 1.0) {
                        val = val - 1.0;
                        return start - 0.5 * (a * Math.pow(2.0, 10.0 * val) * Math.sin((val - s) * (6.28318548) / p)) * overshoot;
                    }
                    val = val - 1.0;
                    return end + start + a * Math.pow(2.0, -10.0 * val) * Math.sin((val - s) * (6.28318548) / p) * 0.5 * overshoot;
                },
                /*LeanTween.easeInOutElastic:static end.*/

                /*LeanTween.followDamp:static start.*/
                followDamp: function (trans, target, prop, smoothTime, maxSpeed) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    var d = LeanTween.pushNewTween(trans.gameObject, pc.Vec3.ZERO.clone(), 3.40282347E+38, LeanTween.options().setFollow().setTarget(target));

                    switch (prop) {
                        case LeanProp.localPosition: 
                            d.optional.axis = d.trans.localPosition.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.damp$2(d.optional.axis.$clone(), d.toTrans.localPosition.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime);
                                d.trans.localPosition = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.position: 
                            d.diff = d.trans.position.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.damp$2(d.optional.axis.$clone(), d.toTrans.position.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime);
                                d.trans.position = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.localX: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosX(d.trans, LeanSmooth.damp(d.trans.localPosition.x, d.toTrans.localPosition.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.localY: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosY(d.trans, LeanSmooth.damp(d.trans.localPosition.y, d.toTrans.localPosition.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.localZ: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosZ(d.trans, LeanSmooth.damp(d.trans.localPosition.z, d.toTrans.localPosition.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.x: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosX(d.trans, LeanSmooth.damp(d.trans.position.x, d.toTrans.position.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.y: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosY(d.trans, LeanSmooth.damp(d.trans.position.y, d.toTrans.position.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.z: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosZ(d.trans, LeanSmooth.damp(d.trans.position.z, d.toTrans.position.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime));
                            };
                            break;
                        case LeanProp.scale: 
                            d.easeInternal = function () {
                                d.trans.localScale = LeanSmooth.damp$2(d.trans.localScale.$clone(), d.toTrans.localScale.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime);
                            };
                            break;
                        case LeanProp.color: 
                            d.easeInternal = function () {
                                var col = LeanSmooth.damp$1(LeanTweenExt.LeanColor$1(d.trans), LeanTweenExt.LeanColor$1(d.toTrans), Bridge.ref(d.optional, "color"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime);
                                d.trans.GetComponent(UnityEngine.Renderer).material.color = col.$clone();
                            };
                            break;
                    }

                    return d;
                },
                /*LeanTween.followDamp:static end.*/

                /*LeanTween.followSpring:static start.*/
                followSpring: function (trans, target, prop, smoothTime, maxSpeed, friction, accelRate) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    var d = LeanTween.pushNewTween(trans.gameObject, pc.Vec3.ZERO.clone(), 3.40282347E+38, LeanTween.options().setFollow().setTarget(target));
                    switch (prop) {
                        case LeanProp.localPosition: 
                            d.optional.axis = d.trans.localPosition.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.spring$2(d.optional.axis.$clone(), d.toTrans.localPosition.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate);
                                d.trans.localPosition = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.position: 
                            d.diff = d.trans.position.$clone();
                            d.easeInternal = function () {
                                d.diff = LeanSmooth.spring$2(d.diff.$clone(), d.toTrans.position.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate);
                                d.trans.position = d.diff.$clone(); // + d.toInternal;
                            };
                            break;
                        case LeanProp.localX: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosX(d.trans, LeanSmooth.spring(d.trans.localPosition.x, d.toTrans.localPosition.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.localY: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosY(d.trans, LeanSmooth.spring(d.trans.localPosition.y, d.toTrans.localPosition.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.localZ: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosZ(d.trans, LeanSmooth.spring(d.trans.localPosition.z, d.toTrans.localPosition.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.x: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosX(d.trans, LeanSmooth.spring(d.trans.position.x, d.toTrans.position.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.y: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosY(d.trans, LeanSmooth.spring(d.trans.position.y, d.toTrans.position.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.z: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosZ(d.trans, LeanSmooth.spring(d.trans.position.z, d.toTrans.position.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate));
                            };
                            break;
                        case LeanProp.scale: 
                            d.easeInternal = function () {
                                d.trans.localScale = LeanSmooth.spring$2(d.trans.localScale.$clone(), d.toTrans.localScale.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate);
                            };
                            break;
                        case LeanProp.color: 
                            d.easeInternal = function () {
                                var col = LeanSmooth.spring$1(LeanTweenExt.LeanColor$1(d.trans), LeanTweenExt.LeanColor$1(d.toTrans), Bridge.ref(d.optional, "color"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate);
                                d.trans.GetComponent(UnityEngine.Renderer).material.color = col.$clone();
                            };
                            break;
                    }

                    return d;
                },
                /*LeanTween.followSpring:static end.*/

                /*LeanTween.followBounceOut:static start.*/
                followBounceOut: function (trans, target, prop, smoothTime, maxSpeed, friction, accelRate, hitDamping) {
                    if (maxSpeed === void 0) { maxSpeed = -1.0; }
                    if (friction === void 0) { friction = 2.0; }
                    if (accelRate === void 0) { accelRate = 0.5; }
                    if (hitDamping === void 0) { hitDamping = 0.9; }
                    var d = LeanTween.pushNewTween(trans.gameObject, pc.Vec3.ZERO.clone(), 3.40282347E+38, LeanTween.options().setFollow().setTarget(target));
                    switch (prop) {
                        case LeanProp.localPosition: 
                            d.optional.axis = d.trans.localPosition.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.bounceOut$2(d.optional.axis.$clone(), d.toTrans.localPosition.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping);
                                d.trans.localPosition = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.position: 
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.bounceOut$2(d.optional.axis.$clone(), d.toTrans.position.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping);
                                d.trans.position = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.localX: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosX(d.trans, LeanSmooth.bounceOut(d.trans.localPosition.x, d.toTrans.localPosition.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.localY: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosY(d.trans, LeanSmooth.bounceOut(d.trans.localPosition.y, d.toTrans.localPosition.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.localZ: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosZ(d.trans, LeanSmooth.bounceOut(d.trans.localPosition.z, d.toTrans.localPosition.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.x: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosX(d.trans, LeanSmooth.bounceOut(d.trans.position.x, d.toTrans.position.x, Bridge.ref(d.fromInternal, "x"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.y: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosY(d.trans, LeanSmooth.bounceOut(d.trans.position.y, d.toTrans.position.y, Bridge.ref(d.fromInternal, "y"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.z: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosZ(d.trans, LeanSmooth.bounceOut(d.trans.position.z, d.toTrans.position.z, Bridge.ref(d.fromInternal, "z"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping));
                            };
                            break;
                        case LeanProp.scale: 
                            d.easeInternal = function () {
                                d.trans.localScale = LeanSmooth.bounceOut$2(d.trans.localScale.$clone(), d.toTrans.localScale.$clone(), Bridge.ref(d, "fromInternal"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping);
                            };
                            break;
                        case LeanProp.color: 
                            d.easeInternal = function () {
                                var col = LeanSmooth.bounceOut$1(LeanTweenExt.LeanColor$1(d.trans), LeanTweenExt.LeanColor$1(d.toTrans), Bridge.ref(d.optional, "color"), smoothTime, maxSpeed, UnityEngine.Time.deltaTime, friction, accelRate, hitDamping);
                                d.trans.GetComponent(UnityEngine.Renderer).material.color = col.$clone();
                            };
                            break;
                    }

                    return d;
                },
                /*LeanTween.followBounceOut:static end.*/

                /*LeanTween.followLinear:static start.*/
                followLinear: function (trans, target, prop, moveSpeed) {
                    var d = LeanTween.pushNewTween(trans.gameObject, pc.Vec3.ZERO.clone(), 3.40282347E+38, LeanTween.options().setFollow().setTarget(target));
                    switch (prop) {
                        case LeanProp.localPosition: 
                            d.optional.axis = d.trans.localPosition.$clone();
                            d.easeInternal = function () {
                                d.optional.axis = LeanSmooth.linear$2(d.optional.axis.$clone(), d.toTrans.localPosition.$clone(), moveSpeed);
                                d.trans.localPosition = d.optional.axis.$clone().add( d.toInternal );
                            };
                            break;
                        case LeanProp.position: 
                            d.easeInternal = function () {
                                d.trans.position = LeanSmooth.linear$2(d.trans.position.$clone(), d.toTrans.position.$clone(), moveSpeed);
                            };
                            break;
                        case LeanProp.localX: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosX(d.trans, LeanSmooth.linear(d.trans.localPosition.x, d.toTrans.localPosition.x, moveSpeed));
                            };
                            break;
                        case LeanProp.localY: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosY(d.trans, LeanSmooth.linear(d.trans.localPosition.y, d.toTrans.localPosition.y, moveSpeed));
                            };
                            break;
                        case LeanProp.localZ: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetLocalPosZ(d.trans, LeanSmooth.linear(d.trans.localPosition.z, d.toTrans.localPosition.z, moveSpeed));
                            };
                            break;
                        case LeanProp.x: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosX(d.trans, LeanSmooth.linear(d.trans.position.x, d.toTrans.position.x, moveSpeed));
                            };
                            break;
                        case LeanProp.y: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosY(d.trans, LeanSmooth.linear(d.trans.position.y, d.toTrans.position.y, moveSpeed));
                            };
                            break;
                        case LeanProp.z: 
                            d.easeInternal = function () {
                                LeanTweenExt.LeanSetPosZ(d.trans, LeanSmooth.linear(d.trans.position.z, d.toTrans.position.z, moveSpeed));
                            };
                            break;
                        case LeanProp.scale: 
                            d.easeInternal = function () {
                                d.trans.localScale = LeanSmooth.linear$2(d.trans.localScale.$clone(), d.toTrans.localScale.$clone(), moveSpeed);
                            };
                            break;
                        case LeanProp.color: 
                            d.easeInternal = function () {
                                var col = LeanSmooth.linear$1(LeanTweenExt.LeanColor$1(d.trans), LeanTweenExt.LeanColor$1(d.toTrans), moveSpeed);
                                d.trans.GetComponent(UnityEngine.Renderer).material.color = col.$clone();
                            };
                            break;
                    }

                    return d;
                },
                /*LeanTween.followLinear:static end.*/

                /*LeanTween.addListener:static start.*/
                addListener: function (eventId, callback) {
                    LeanTween.addListener$1(LeanTween.tweenEmpty, eventId, callback);
                },
                /*LeanTween.addListener:static end.*/

                /*LeanTween.addListener$1:static start.*/
                addListener$1: function (caller, eventId, callback) {
                    if (LeanTween.eventListeners == null) {
                        LeanTween.INIT_LISTENERS_MAX = LeanTween.LISTENERS_MAX;
                        LeanTween.eventListeners = System.Array.init(Bridge.Int.mul(LeanTween.EVENTS_MAX, LeanTween.LISTENERS_MAX), null, Function);
                        LeanTween.goListeners = System.Array.init(Bridge.Int.mul(LeanTween.EVENTS_MAX, LeanTween.LISTENERS_MAX), null, UnityEngine.GameObject);
                    }
                    // Debug.Log("searching for an empty space for:"+caller + " eventid:"+event);
                    for (LeanTween.i = 0; LeanTween.i < LeanTween.INIT_LISTENERS_MAX; LeanTween.i = (LeanTween.i + 1) | 0) {
                        var point = (Bridge.Int.mul(eventId, LeanTween.INIT_LISTENERS_MAX) + LeanTween.i) | 0;
                        if (UnityEngine.GameObject.op_Equality(LeanTween.goListeners[point], null) || Bridge.staticEquals(LeanTween.eventListeners[point], null)) {
                            LeanTween.eventListeners[point] = callback;
                            LeanTween.goListeners[point] = caller;
                            if (LeanTween.i >= LeanTween.eventsMaxSearch) {
                                LeanTween.eventsMaxSearch = (LeanTween.i + 1) | 0;
                            }
                            // Debug.Log("adding event for:"+caller.name);

                            return;
                        }
                        if (UnityEngine.GameObject.op_Equality(LeanTween.goListeners[point], caller) && Bridge.equals(LeanTween.eventListeners[point], callback)) {
                            // Debug.Log("This event is already being listened for.");
                            return;
                        }
                    }
                    console.error("You ran out of areas to add listeners, consider increasing LISTENERS_MAX, ex: LeanTween.LISTENERS_MAX = " + (Bridge.Int.mul(LeanTween.LISTENERS_MAX, 2)));
                },
                /*LeanTween.addListener$1:static end.*/

                /*LeanTween.removeListener$1:static start.*/
                removeListener$1: function (eventId, callback) {
                    return LeanTween.removeListener$2(LeanTween.tweenEmpty, eventId, callback);
                },
                /*LeanTween.removeListener$1:static end.*/

                /*LeanTween.removeListener:static start.*/
                removeListener: function (eventId) {
                    var point = (Bridge.Int.mul(eventId, LeanTween.INIT_LISTENERS_MAX) + LeanTween.i) | 0;
                    LeanTween.eventListeners[point] = null;
                    LeanTween.goListeners[point] = null;
                    return true;
                },
                /*LeanTween.removeListener:static end.*/

                /*LeanTween.removeListener$2:static start.*/
                removeListener$2: function (caller, eventId, callback) {
                    for (LeanTween.i = 0; LeanTween.i < LeanTween.eventsMaxSearch; LeanTween.i = (LeanTween.i + 1) | 0) {
                        var point = (Bridge.Int.mul(eventId, LeanTween.INIT_LISTENERS_MAX) + LeanTween.i) | 0;
                        if (UnityEngine.GameObject.op_Equality(LeanTween.goListeners[point], caller) && Bridge.equals(LeanTween.eventListeners[point], callback)) {
                            LeanTween.eventListeners[point] = null;
                            LeanTween.goListeners[point] = null;
                            return true;
                        }
                    }
                    return false;
                },
                /*LeanTween.removeListener$2:static end.*/

                /*LeanTween.dispatchEvent:static start.*/
                dispatchEvent: function (eventId) {
                    LeanTween.dispatchEvent$1(eventId, null);
                },
                /*LeanTween.dispatchEvent:static end.*/

                /*LeanTween.dispatchEvent$1:static start.*/
                dispatchEvent$1: function (eventId, data) {
                    for (var k = 0; k < LeanTween.eventsMaxSearch; k = (k + 1) | 0) {
                        var point = (Bridge.Int.mul(eventId, LeanTween.INIT_LISTENERS_MAX) + k) | 0;
                        if (!Bridge.staticEquals(LeanTween.eventListeners[point], null)) {
                            if (UnityEngine.Object.op_Implicit(LeanTween.goListeners[point])) {
                                LeanTween.eventListeners[point](new LTEvent(eventId, data));
                            } else {
                                LeanTween.eventListeners[point] = null;
                            }
                        }
                    }
                },
                /*LeanTween.dispatchEvent$1:static end.*/


            }
        },
        methods: {
            /*LeanTween.Update start.*/
            Update: function () {
                LeanTween.update();
            },
            /*LeanTween.Update end.*/


        }
    });
    /*LeanTween end.*/

    /*LeanTweenExt start.*/
    Bridge.define("LeanTweenExt", {
        statics: {
            methods: {
                /*LeanTweenExt.LeanAlpha$1:static start.*/
                LeanAlpha$1: function (gameObject, to, time) {
                    return LeanTween.alpha$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanAlpha$1:static end.*/

                /*LeanTweenExt.LeanAlpha$2:static start.*/
                LeanAlpha$2: function (rectTransform, to, time) {
                    return LeanTween.alpha$2(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanAlpha$2:static end.*/

                /*LeanTweenExt.LeanAlpha:static start.*/
                LeanAlpha: function (canvas, to, time) {
                    return LeanTween.alphaCanvas(canvas, to, time);
                },
                /*LeanTweenExt.LeanAlpha:static end.*/

                /*LeanTweenExt.LeanAlphaVertex:static start.*/
                LeanAlphaVertex: function (gameObject, to, time) {
                    return LeanTween.alphaVertex(gameObject, to, time);
                },
                /*LeanTweenExt.LeanAlphaVertex:static end.*/

                /*LeanTweenExt.LeanAlphaText:static start.*/
                LeanAlphaText: function (rectTransform, to, time) {
                    return LeanTween.alphaText(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanAlphaText:static end.*/

                /*LeanTweenExt.LeanCancel:static start.*/
                LeanCancel: function (gameObject) {
                    LeanTween.cancel$3(gameObject);
                },
                /*LeanTweenExt.LeanCancel:static end.*/

                /*LeanTweenExt.LeanCancel$1:static start.*/
                LeanCancel$1: function (gameObject, callOnComplete) {
                    LeanTween.cancel$4(gameObject, callOnComplete);
                },
                /*LeanTweenExt.LeanCancel$1:static end.*/

                /*LeanTweenExt.LeanCancel$2:static start.*/
                LeanCancel$2: function (gameObject, uniqueId, callOnComplete) {
                    if (callOnComplete === void 0) { callOnComplete = false; }
                    LeanTween.cancel$5(gameObject, uniqueId, callOnComplete);
                },
                /*LeanTweenExt.LeanCancel$2:static end.*/

                /*LeanTweenExt.LeanCancel$3:static start.*/
                LeanCancel$3: function (rectTransform) {
                    LeanTween.cancel$6(rectTransform);
                },
                /*LeanTweenExt.LeanCancel$3:static end.*/

                /*LeanTweenExt.LeanColor:static start.*/
                LeanColor: function (gameObject, to, time) {
                    return LeanTween.color(gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanColor:static end.*/

                /*LeanTweenExt.LeanColor$1:static start.*/
                LeanColor$1: function (transform) {
                    return transform.GetComponent(UnityEngine.Renderer).material.color.$clone();
                },
                /*LeanTweenExt.LeanColor$1:static end.*/

                /*LeanTweenExt.LeanColorText:static start.*/
                LeanColorText: function (rectTransform, to, time) {
                    return LeanTween.colorText(rectTransform, to.$clone(), time);
                },
                /*LeanTweenExt.LeanColorText:static end.*/

                /*LeanTweenExt.LeanDelayedCall:static start.*/
                LeanDelayedCall: function (gameObject, delayTime, callback) {
                    return LeanTween.delayedCall$2(gameObject, delayTime, callback);
                },
                /*LeanTweenExt.LeanDelayedCall:static end.*/

                /*LeanTweenExt.LeanDelayedCall$1:static start.*/
                LeanDelayedCall$1: function (gameObject, delayTime, callback) {
                    return LeanTween.delayedCall$3(gameObject, delayTime, callback);
                },
                /*LeanTweenExt.LeanDelayedCall$1:static end.*/

                /*LeanTweenExt.LeanIsPaused:static start.*/
                LeanIsPaused: function (gameObject) {
                    return LeanTween.isPaused$1(gameObject);
                },
                /*LeanTweenExt.LeanIsPaused:static end.*/

                /*LeanTweenExt.LeanIsPaused$1:static start.*/
                LeanIsPaused$1: function (rectTransform) {
                    return LeanTween.isPaused$2(rectTransform);
                },
                /*LeanTweenExt.LeanIsPaused$1:static end.*/

                /*LeanTweenExt.LeanIsTweening:static start.*/
                LeanIsTweening: function (gameObject) {
                    return LeanTween.isTweening$2(gameObject);
                },
                /*LeanTweenExt.LeanIsTweening:static end.*/

                /*LeanTweenExt.LeanMove$3:static start.*/
                LeanMove$3: function (gameObject, to, time) {
                    return LeanTween.move$5(gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanMove$3:static end.*/

                /*LeanTweenExt.LeanMove$9:static start.*/
                LeanMove$9: function (transform, to, time) {
                    return LeanTween.move$5(transform.gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanMove$9:static end.*/

                /*LeanTweenExt.LeanMove$5:static start.*/
                LeanMove$5: function (rectTransform, to, time) {
                    return LeanTween.move$7(rectTransform, to.$clone(), time);
                },
                /*LeanTweenExt.LeanMove$5:static end.*/

                /*LeanTweenExt.LeanMove$2:static start.*/
                LeanMove$2: function (gameObject, to, time) {
                    return LeanTween.move$4(gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanMove$2:static end.*/

                /*LeanTweenExt.LeanMove$8:static start.*/
                LeanMove$8: function (transform, to, time) {
                    return LeanTween.move$4(transform.gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanMove$8:static end.*/

                /*LeanTweenExt.LeanMove$4:static start.*/
                LeanMove$4: function (gameObject, to, time) {
                    return LeanTween.move$6(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$4:static end.*/

                /*LeanTweenExt.LeanMove:static start.*/
                LeanMove: function (gameObject, to, time) {
                    return LeanTween.move$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove:static end.*/

                /*LeanTweenExt.LeanMove$1:static start.*/
                LeanMove$1: function (gameObject, to, time) {
                    return LeanTween.move$2(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$1:static end.*/

                /*LeanTweenExt.LeanMove$10:static start.*/
                LeanMove$10: function (transform, to, time) {
                    return LeanTween.move$6(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$10:static end.*/

                /*LeanTweenExt.LeanMove$6:static start.*/
                LeanMove$6: function (transform, to, time) {
                    return LeanTween.move$1(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$6:static end.*/

                /*LeanTweenExt.LeanMove$7:static start.*/
                LeanMove$7: function (transform, to, time) {
                    return LeanTween.move$2(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMove$7:static end.*/

                /*LeanTweenExt.LeanMoveLocal$2:static start.*/
                LeanMoveLocal$2: function (gameObject, to, time) {
                    return LeanTween.moveLocal$2(gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanMoveLocal$2:static end.*/

                /*LeanTweenExt.LeanMoveLocal:static start.*/
                LeanMoveLocal: function (gameObject, to, time) {
                    return LeanTween.moveLocal(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal:static end.*/

                /*LeanTweenExt.LeanMoveLocal$1:static start.*/
                LeanMoveLocal$1: function (gameObject, to, time) {
                    return LeanTween.moveLocal$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal$1:static end.*/

                /*LeanTweenExt.LeanMoveLocal$5:static start.*/
                LeanMoveLocal$5: function (transform, to, time) {
                    return LeanTween.moveLocal$2(transform.gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanMoveLocal$5:static end.*/

                /*LeanTweenExt.LeanMoveLocal$3:static start.*/
                LeanMoveLocal$3: function (transform, to, time) {
                    return LeanTween.moveLocal(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal$3:static end.*/

                /*LeanTweenExt.LeanMoveLocal$4:static start.*/
                LeanMoveLocal$4: function (transform, to, time) {
                    return LeanTween.moveLocal$1(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocal$4:static end.*/

                /*LeanTweenExt.LeanMoveLocalX:static start.*/
                LeanMoveLocalX: function (gameObject, to, time) {
                    return LeanTween.moveLocalX(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalX:static end.*/

                /*LeanTweenExt.LeanMoveLocalX$1:static start.*/
                LeanMoveLocalX$1: function (transform, to, time) {
                    return LeanTween.moveLocalX(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalX$1:static end.*/

                /*LeanTweenExt.LeanMoveLocalY:static start.*/
                LeanMoveLocalY: function (gameObject, to, time) {
                    return LeanTween.moveLocalY(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalY:static end.*/

                /*LeanTweenExt.LeanMoveLocalY$1:static start.*/
                LeanMoveLocalY$1: function (transform, to, time) {
                    return LeanTween.moveLocalY(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalY$1:static end.*/

                /*LeanTweenExt.LeanMoveLocalZ:static start.*/
                LeanMoveLocalZ: function (gameObject, to, time) {
                    return LeanTween.moveLocalZ(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalZ:static end.*/

                /*LeanTweenExt.LeanMoveLocalZ$1:static start.*/
                LeanMoveLocalZ$1: function (transform, to, time) {
                    return LeanTween.moveLocalZ(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveLocalZ$1:static end.*/

                /*LeanTweenExt.LeanMoveSpline$1:static start.*/
                LeanMoveSpline$1: function (gameObject, to, time) {
                    return LeanTween.moveSpline$1(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSpline$1:static end.*/

                /*LeanTweenExt.LeanMoveSpline:static start.*/
                LeanMoveSpline: function (gameObject, to, time) {
                    return LeanTween.moveSpline(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSpline:static end.*/

                /*LeanTweenExt.LeanMoveSpline$3:static start.*/
                LeanMoveSpline$3: function (transform, to, time) {
                    return LeanTween.moveSpline$1(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSpline$3:static end.*/

                /*LeanTweenExt.LeanMoveSpline$2:static start.*/
                LeanMoveSpline$2: function (transform, to, time) {
                    return LeanTween.moveSpline(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSpline$2:static end.*/

                /*LeanTweenExt.LeanMoveSplineLocal:static start.*/
                LeanMoveSplineLocal: function (gameObject, to, time) {
                    return LeanTween.moveSplineLocal(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSplineLocal:static end.*/

                /*LeanTweenExt.LeanMoveSplineLocal$1:static start.*/
                LeanMoveSplineLocal$1: function (transform, to, time) {
                    return LeanTween.moveSplineLocal(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveSplineLocal$1:static end.*/

                /*LeanTweenExt.LeanMoveX:static start.*/
                LeanMoveX: function (gameObject, to, time) {
                    return LeanTween.moveX(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveX:static end.*/

                /*LeanTweenExt.LeanMoveX$2:static start.*/
                LeanMoveX$2: function (transform, to, time) {
                    return LeanTween.moveX(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveX$2:static end.*/

                /*LeanTweenExt.LeanMoveX$1:static start.*/
                LeanMoveX$1: function (rectTransform, to, time) {
                    return LeanTween.moveX$1(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanMoveX$1:static end.*/

                /*LeanTweenExt.LeanMoveY:static start.*/
                LeanMoveY: function (gameObject, to, time) {
                    return LeanTween.moveY(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveY:static end.*/

                /*LeanTweenExt.LeanMoveY$2:static start.*/
                LeanMoveY$2: function (transform, to, time) {
                    return LeanTween.moveY(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveY$2:static end.*/

                /*LeanTweenExt.LeanMoveY$1:static start.*/
                LeanMoveY$1: function (rectTransform, to, time) {
                    return LeanTween.moveY$1(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanMoveY$1:static end.*/

                /*LeanTweenExt.LeanMoveZ:static start.*/
                LeanMoveZ: function (gameObject, to, time) {
                    return LeanTween.moveZ(gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveZ:static end.*/

                /*LeanTweenExt.LeanMoveZ$2:static start.*/
                LeanMoveZ$2: function (transform, to, time) {
                    return LeanTween.moveZ(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanMoveZ$2:static end.*/

                /*LeanTweenExt.LeanMoveZ$1:static start.*/
                LeanMoveZ$1: function (rectTransform, to, time) {
                    return LeanTween.moveZ$1(rectTransform, to, time);
                },
                /*LeanTweenExt.LeanMoveZ$1:static end.*/

                /*LeanTweenExt.LeanPause:static start.*/
                LeanPause: function (gameObject) {
                    LeanTween.pause$1(gameObject);
                },
                /*LeanTweenExt.LeanPause:static end.*/

                /*LeanTweenExt.LeanPlay:static start.*/
                LeanPlay: function (rectTransform, sprites) {
                    return LeanTween.play(rectTransform, sprites);
                },
                /*LeanTweenExt.LeanPlay:static end.*/

                /*LeanTweenExt.LeanResume:static start.*/
                LeanResume: function (gameObject) {
                    LeanTween.resume$1(gameObject);
                },
                /*LeanTweenExt.LeanResume:static end.*/

                /*LeanTweenExt.LeanRotate:static start.*/
                LeanRotate: function (gameObject, to, time) {
                    return LeanTween.rotate$1(gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanRotate:static end.*/

                /*LeanTweenExt.LeanRotate$2:static start.*/
                LeanRotate$2: function (transform, to, time) {
                    return LeanTween.rotate$1(transform.gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanRotate$2:static end.*/

                /*LeanTweenExt.LeanRotate$1:static start.*/
                LeanRotate$1: function (rectTransform, to, time) {
                    return LeanTween.rotate$3(rectTransform, to.$clone(), time);
                },
                /*LeanTweenExt.LeanRotate$1:static end.*/

                /*LeanTweenExt.LeanRotateAround:static start.*/
                LeanRotateAround: function (gameObject, axis, add, time) {
                    return LeanTween.rotateAround(gameObject, axis.$clone(), add, time);
                },
                /*LeanTweenExt.LeanRotateAround:static end.*/

                /*LeanTweenExt.LeanRotateAround$2:static start.*/
                LeanRotateAround$2: function (transform, axis, add, time) {
                    return LeanTween.rotateAround(transform.gameObject, axis.$clone(), add, time);
                },
                /*LeanTweenExt.LeanRotateAround$2:static end.*/

                /*LeanTweenExt.LeanRotateAround$1:static start.*/
                LeanRotateAround$1: function (rectTransform, axis, add, time) {
                    return LeanTween.rotateAround$1(rectTransform, axis.$clone(), add, time);
                },
                /*LeanTweenExt.LeanRotateAround$1:static end.*/

                /*LeanTweenExt.LeanRotateAroundLocal:static start.*/
                LeanRotateAroundLocal: function (gameObject, axis, add, time) {
                    return LeanTween.rotateAroundLocal(gameObject, axis.$clone(), add, time);
                },
                /*LeanTweenExt.LeanRotateAroundLocal:static end.*/

                /*LeanTweenExt.LeanRotateAroundLocal$2:static start.*/
                LeanRotateAroundLocal$2: function (transform, axis, add, time) {
                    return LeanTween.rotateAroundLocal(transform.gameObject, axis.$clone(), add, time);
                },
                /*LeanTweenExt.LeanRotateAroundLocal$2:static end.*/

                /*LeanTweenExt.LeanRotateAroundLocal$1:static start.*/
                LeanRotateAroundLocal$1: function (rectTransform, axis, add, time) {
                    return LeanTween.rotateAroundLocal$1(rectTransform, axis.$clone(), add, time);
                },
                /*LeanTweenExt.LeanRotateAroundLocal$1:static end.*/

                /*LeanTweenExt.LeanRotateX:static start.*/
                LeanRotateX: function (gameObject, to, time) {
                    return LeanTween.rotateX(gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateX:static end.*/

                /*LeanTweenExt.LeanRotateX$1:static start.*/
                LeanRotateX$1: function (transform, to, time) {
                    return LeanTween.rotateX(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateX$1:static end.*/

                /*LeanTweenExt.LeanRotateY:static start.*/
                LeanRotateY: function (gameObject, to, time) {
                    return LeanTween.rotateY(gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateY:static end.*/

                /*LeanTweenExt.LeanRotateY$1:static start.*/
                LeanRotateY$1: function (transform, to, time) {
                    return LeanTween.rotateY(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateY$1:static end.*/

                /*LeanTweenExt.LeanRotateZ:static start.*/
                LeanRotateZ: function (gameObject, to, time) {
                    return LeanTween.rotateZ(gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateZ:static end.*/

                /*LeanTweenExt.LeanRotateZ$1:static start.*/
                LeanRotateZ$1: function (transform, to, time) {
                    return LeanTween.rotateZ(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanRotateZ$1:static end.*/

                /*LeanTweenExt.LeanScale:static start.*/
                LeanScale: function (gameObject, to, time) {
                    return LeanTween.scale$1(gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanScale:static end.*/

                /*LeanTweenExt.LeanScale$2:static start.*/
                LeanScale$2: function (transform, to, time) {
                    return LeanTween.scale$1(transform.gameObject, to.$clone(), time);
                },
                /*LeanTweenExt.LeanScale$2:static end.*/

                /*LeanTweenExt.LeanScale$1:static start.*/
                LeanScale$1: function (rectTransform, to, time) {
                    return LeanTween.scale$2(rectTransform, to.$clone(), time);
                },
                /*LeanTweenExt.LeanScale$1:static end.*/

                /*LeanTweenExt.LeanScaleX:static start.*/
                LeanScaleX: function (gameObject, to, time) {
                    return LeanTween.scaleX(gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleX:static end.*/

                /*LeanTweenExt.LeanScaleX$1:static start.*/
                LeanScaleX$1: function (transform, to, time) {
                    return LeanTween.scaleX(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleX$1:static end.*/

                /*LeanTweenExt.LeanScaleY:static start.*/
                LeanScaleY: function (gameObject, to, time) {
                    return LeanTween.scaleY(gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleY:static end.*/

                /*LeanTweenExt.LeanScaleY$1:static start.*/
                LeanScaleY$1: function (transform, to, time) {
                    return LeanTween.scaleY(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleY$1:static end.*/

                /*LeanTweenExt.LeanScaleZ:static start.*/
                LeanScaleZ: function (gameObject, to, time) {
                    return LeanTween.scaleZ(gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleZ:static end.*/

                /*LeanTweenExt.LeanScaleZ$1:static start.*/
                LeanScaleZ$1: function (transform, to, time) {
                    return LeanTween.scaleZ(transform.gameObject, to, time);
                },
                /*LeanTweenExt.LeanScaleZ$1:static end.*/

                /*LeanTweenExt.LeanSize:static start.*/
                LeanSize: function (rectTransform, to, time) {
                    return LeanTween.size(rectTransform, to.$clone(), time);
                },
                /*LeanTweenExt.LeanSize:static end.*/

                /*LeanTweenExt.LeanValue$7:static start.*/
                LeanValue$7: function (gameObject, from, to, time) {
                    return LeanTween.value$9(gameObject, from.$clone(), to.$clone(), time);
                },
                /*LeanTweenExt.LeanValue$7:static end.*/

                /*LeanTweenExt.LeanValue$6:static start.*/
                LeanValue$6: function (gameObject, from, to, time) {
                    return LeanTween.value$8(gameObject, from, to, time);
                },
                /*LeanTweenExt.LeanValue$6:static end.*/

                /*LeanTweenExt.LeanValue$8:static start.*/
                LeanValue$8: function (gameObject, from, to, time) {
                    return LeanTween.value$10(gameObject, from.$clone(), to.$clone(), time);
                },
                /*LeanTweenExt.LeanValue$8:static end.*/

                /*LeanTweenExt.LeanValue$9:static start.*/
                LeanValue$9: function (gameObject, from, to, time) {
                    return LeanTween.value$11(gameObject, from.$clone(), to.$clone(), time);
                },
                /*LeanTweenExt.LeanValue$9:static end.*/

                /*LeanTweenExt.LeanValue:static start.*/
                LeanValue: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$1(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue:static end.*/

                /*LeanTweenExt.LeanValue$5:static start.*/
                LeanValue$5: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$6(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue$5:static end.*/

                /*LeanTweenExt.LeanValue$4:static start.*/
                LeanValue$4: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$5(gameObject, callOnUpdate, from, to, time);
                },
                /*LeanTweenExt.LeanValue$4:static end.*/

                /*LeanTweenExt.LeanValue$1:static start.*/
                LeanValue$1: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$2(gameObject, callOnUpdate, from.$clone(), to.$clone(), time);
                },
                /*LeanTweenExt.LeanValue$1:static end.*/

                /*LeanTweenExt.LeanValue$2:static start.*/
                LeanValue$2: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$3(gameObject, callOnUpdate, from.$clone(), to.$clone(), time);
                },
                /*LeanTweenExt.LeanValue$2:static end.*/

                /*LeanTweenExt.LeanValue$3:static start.*/
                LeanValue$3: function (gameObject, callOnUpdate, from, to, time) {
                    return LeanTween.value$4(gameObject, callOnUpdate, from.$clone(), to.$clone(), time);
                },
                /*LeanTweenExt.LeanValue$3:static end.*/

                /*LeanTweenExt.LeanSetPosX:static start.*/
                LeanSetPosX: function (transform, val) {
                    transform.position = new pc.Vec3( val, transform.position.y, transform.position.z );
                },
                /*LeanTweenExt.LeanSetPosX:static end.*/

                /*LeanTweenExt.LeanSetPosY:static start.*/
                LeanSetPosY: function (transform, val) {
                    transform.position = new pc.Vec3( transform.position.x, val, transform.position.z );
                },
                /*LeanTweenExt.LeanSetPosY:static end.*/

                /*LeanTweenExt.LeanSetPosZ:static start.*/
                LeanSetPosZ: function (transform, val) {
                    transform.position = new pc.Vec3( transform.position.x, transform.position.y, val );
                },
                /*LeanTweenExt.LeanSetPosZ:static end.*/

                /*LeanTweenExt.LeanSetLocalPosX:static start.*/
                LeanSetLocalPosX: function (transform, val) {
                    transform.localPosition = new pc.Vec3( val, transform.localPosition.y, transform.localPosition.z );
                },
                /*LeanTweenExt.LeanSetLocalPosX:static end.*/

                /*LeanTweenExt.LeanSetLocalPosY:static start.*/
                LeanSetLocalPosY: function (transform, val) {
                    transform.localPosition = new pc.Vec3( transform.localPosition.x, val, transform.localPosition.z );
                },
                /*LeanTweenExt.LeanSetLocalPosY:static end.*/

                /*LeanTweenExt.LeanSetLocalPosZ:static start.*/
                LeanSetLocalPosZ: function (transform, val) {
                    transform.localPosition = new pc.Vec3( transform.localPosition.x, transform.localPosition.y, val );
                },
                /*LeanTweenExt.LeanSetLocalPosZ:static end.*/


            }
        }
    });
    /*LeanTweenExt end.*/

    /*LeanTweenType start.*/
    Bridge.define("LeanTweenType", {
        $kind: "enum",
        statics: {
            fields: {
                notUsed: 0,
                linear: 1,
                easeOutQuad: 2,
                easeInQuad: 3,
                easeInOutQuad: 4,
                easeInCubic: 5,
                easeOutCubic: 6,
                easeInOutCubic: 7,
                easeInQuart: 8,
                easeOutQuart: 9,
                easeInOutQuart: 10,
                easeInQuint: 11,
                easeOutQuint: 12,
                easeInOutQuint: 13,
                easeInSine: 14,
                easeOutSine: 15,
                easeInOutSine: 16,
                easeInExpo: 17,
                easeOutExpo: 18,
                easeInOutExpo: 19,
                easeInCirc: 20,
                easeOutCirc: 21,
                easeInOutCirc: 22,
                easeInBounce: 23,
                easeOutBounce: 24,
                easeInOutBounce: 25,
                easeInBack: 26,
                easeOutBack: 27,
                easeInOutBack: 28,
                easeInElastic: 29,
                easeOutElastic: 30,
                easeInOutElastic: 31,
                easeSpring: 32,
                easeShake: 33,
                punch: 34,
                once: 35,
                clamp: 36,
                pingPong: 37,
                animationCurve: 38
            }
        }
    });
    /*LeanTweenType end.*/

    /*LTBezier start.*/
    Bridge.define("LTBezier", {
        fields: {
            length: 0,
            a: null,
            aa: null,
            bb: null,
            cc: null,
            len: 0,
            arcLengths: null
        },
        ctors: {
            init: function () {
                this.a = new UnityEngine.Vector3();
                this.aa = new UnityEngine.Vector3();
                this.bb = new UnityEngine.Vector3();
                this.cc = new UnityEngine.Vector3();
            },
            ctor: function (a, b, c, d, precision) {
                this.$initialize();
                this.a = a.$clone();
                this.aa = (a.$clone().scale( -1 ).add( (b.$clone().sub( c )).scale( 3 ) ).add( d ));
                this.bb = (a.$clone().add( c )).scale( 3 ).sub( b.$clone().scale( 6 ) );
                this.cc = (b.$clone().sub( a )).scale( 3 );

                this.len = 1.0 / precision;
                this.arcLengths = System.Array.init(((Bridge.Int.clip32(this.len) + 1) | 0), 0, System.Single);
                this.arcLengths[0] = 0;

                var ov = a.$clone();
                var v = new UnityEngine.Vector3();
                var clen = 0.0;
                for (var i = 1; i <= this.len; i = (i + 1) | 0) {
                    v = this.bezierPoint(i * precision);
                    clen += (ov.$clone().sub( v )).length();
                    this.arcLengths[i] = clen;
                    ov = v.$clone();
                }
                this.length = clen;
            }
        },
        methods: {
            /*LTBezier.map start.*/
            map: function (u) {
                var targetLength = u * this.arcLengths[Bridge.Int.clip32(this.len)];
                var low = 0;
                var high = Bridge.Int.clip32(this.len);
                var index = 0;
                while (low < high) {
                    index = (low + (Bridge.Int.clip32(((((high - low) | 0)) / 2.0)) | 0)) | 0;
                    if (this.arcLengths[index] < targetLength) {
                        low = (index + 1) | 0;
                    } else {
                        high = index;
                    }
                }
                if (this.arcLengths[index] > targetLength) {
                    index = (index - 1) | 0;
                }
                if (index < 0) {
                    index = 0;
                }

                return (index + (targetLength - this.arcLengths[index]) / (this.arcLengths[((index + 1) | 0)] - this.arcLengths[index])) / this.len;
            },
            /*LTBezier.map end.*/

            /*LTBezier.bezierPoint start.*/
            bezierPoint: function (t) {
                return ((this.aa.$clone().scale( t ).add( (this.bb) )).scale( t ).add( this.cc )).scale( t ).add( this.a );
            },
            /*LTBezier.bezierPoint end.*/

            /*LTBezier.point start.*/
            point: function (t) {
                return this.bezierPoint(this.map(t));
            },
            /*LTBezier.point end.*/


        }
    });
    /*LTBezier end.*/

    /*LTBezierPath start.*/
    Bridge.define("LTBezierPath", {
        fields: {
            pts: null,
            length: 0,
            orientToPath: false,
            orientToPath2d: false,
            beziers: null,
            lengthRatio: null,
            currentBezier: 0,
            previousBezier: 0
        },
        props: {
            distance: {
                get: function () {
                    return this.length;
                }
            }
        },
        ctors: {
            init: function () {
                this.currentBezier = 0;
                this.previousBezier = 0;
            },
            ctor: function () {
                this.$initialize();
            },
            $ctor1: function (pts_) {
                this.$initialize();
                this.setPoints(pts_);
            }
        },
        methods: {
            /*LTBezierPath.setPoints start.*/
            setPoints: function (pts_) {
                if (pts_.length < 4) {
                    LeanTween.logError("LeanTween - When passing values for a vector path, you must pass four or more values!");
                }
                if (pts_.length % 4 !== 0) {
                    LeanTween.logError("LeanTween - When passing values for a vector path, they must be in sets of four: controlPoint1, controlPoint2, endPoint2, controlPoint2, controlPoint2...");
                }

                this.pts = pts_;

                var k = 0;
                this.beziers = System.Array.init(((Bridge.Int.div(this.pts.length, 4)) | 0), null, LTBezier);
                this.lengthRatio = System.Array.init(this.beziers.length, 0, System.Single);
                var i;
                this.length = 0;
                for (i = 0; i < this.pts.length; i = (i + 4) | 0) {
                    this.beziers[k] = new LTBezier(this.pts[((i + 0) | 0)].$clone(), this.pts[((i + 2) | 0)].$clone(), this.pts[((i + 1) | 0)].$clone(), this.pts[((i + 3) | 0)].$clone(), 0.05);
                    this.length += this.beziers[k].length;
                    k = (k + 1) | 0;
                }
                // Debug.Log("beziers.Length:"+beziers.Length + " beziers:"+beziers);
                for (i = 0; i < this.beziers.length; i = (i + 1) | 0) {
                    this.lengthRatio[i] = this.beziers[i].length / this.length;
                }
            },
            /*LTBezierPath.setPoints end.*/

            /*LTBezierPath.point start.*/
            point: function (ratio) {
                var added = 0.0;
                for (var i = 0; i < this.lengthRatio.length; i = (i + 1) | 0) {
                    added += this.lengthRatio[i];
                    if (added >= ratio) {
                        return this.beziers[i].point((ratio - (added - this.lengthRatio[i])) / this.lengthRatio[i]);
                    }
                }
                return this.beziers[((this.lengthRatio.length - 1) | 0)].point(1.0);
            },
            /*LTBezierPath.point end.*/

            /*LTBezierPath.place2d start.*/
            place2d: function (transform, ratio) {
                transform.position = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    var v3Dir = this.point(ratio).sub( transform.position );
                    var angle = Math.atan2(v3Dir.y, v3Dir.x) * UnityEngine.Mathf.Rad2Deg;
                    transform.eulerAngles = new pc.Vec3( 0, 0, angle );
                }
            },
            /*LTBezierPath.place2d end.*/

            /*LTBezierPath.placeLocal2d start.*/
            placeLocal2d: function (transform, ratio) {
                transform.localPosition = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    var v3Dir = this.point(ratio).sub( transform.localPosition );
                    var angle = Math.atan2(v3Dir.y, v3Dir.x) * UnityEngine.Mathf.Rad2Deg;
                    transform.localEulerAngles = new pc.Vec3( 0, 0, angle );
                }
            },
            /*LTBezierPath.placeLocal2d end.*/

            /*LTBezierPath.place start.*/
            place: function (transform, ratio) {
                this.place$1(transform, ratio, pc.Vec3.UP.clone());

            },
            /*LTBezierPath.place end.*/

            /*LTBezierPath.place$1 start.*/
            place$1: function (transform, ratio, worldUp) {
                transform.position = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    transform.LookAt$3(this.point(ratio), worldUp.$clone());
                }

            },
            /*LTBezierPath.place$1 end.*/

            /*LTBezierPath.placeLocal start.*/
            placeLocal: function (transform, ratio) {
                this.placeLocal$1(transform, ratio, pc.Vec3.UP.clone());
            },
            /*LTBezierPath.placeLocal end.*/

            /*LTBezierPath.placeLocal$1 start.*/
            placeLocal$1: function (transform, ratio, worldUp) {
                // Debug.Log("place ratio:" + ratio + " greater:"+(ratio>1f));
                ratio = Math.max(0, Math.min(1, ratio));
                transform.localPosition = this.point(ratio);
                // Debug.Log("ratio:" + ratio + " +:" + (ratio + 0.001f));
                ratio = Math.max(0, Math.min(1, ratio + 0.001));

                if (ratio <= 1.0) {
                    transform.LookAt$3(transform.parent.TransformPoint$1(this.point(ratio)), worldUp.$clone());
                }
            },
            /*LTBezierPath.placeLocal$1 end.*/

            /*LTBezierPath.gizmoDraw start.*/
            gizmoDraw: function (t) {
                if (t === void 0) { t = -1.0; }
                var prevPt = this.point(0);

                for (var i = 1; i <= 120; i = (i + 1) | 0) {
                    var pm = i / 120.0;
                    var currPt2 = this.point(pm);
                    //Gizmos.color = new Color(UnityEngine.Random.Range(0f,1f),UnityEngine.Random.Range(0f,1f),UnityEngine.Random.Range(0f,1f),1);
                    UnityEngine.Gizmos.color = (this.previousBezier === this.currentBezier) ? new pc.Color( 1, 0, 1, 1 ) : new pc.Color( 0.5, 0.5, 0.5, 1 );
                    UnityEngine.Gizmos.DrawLine(currPt2.$clone(), prevPt.$clone());
                    prevPt = currPt2.$clone();
                    this.previousBezier = this.currentBezier;
                }
            },
            /*LTBezierPath.gizmoDraw end.*/

            /*LTBezierPath.ratioAtPoint start.*/
            ratioAtPoint: function (pt, precision) {
                if (precision === void 0) { precision = 0.01; }
                var closestDist = 3.40282347E+38;
                var closestI = 0;
                var maxIndex = Math.round(1.0 / precision);
                for (var i = 0; i < maxIndex; i = (i + 1) | 0) {
                    var ratio = i / maxIndex;
                    var dist = pc.Vec3.distance( pt, this.point(ratio) );
                    // Debug.Log("i:"+i+" dist:"+dist);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestI = i;
                    }
                }
                //Debug.Log("closestI:"+closestI+" maxIndex:"+maxIndex);
                return closestI / (maxIndex);
            },
            /*LTBezierPath.ratioAtPoint end.*/


        },
        overloads: {
            "place(Transform, float, Vector3)": "place$1",
            "placeLocal(Transform, float, Vector3)": "placeLocal$1"
        }
    });
    /*LTBezierPath end.*/

    /*LTDescr start.*/
    Bridge.define("LTDescr", {
        statics: {
            fields: {
                val: 0,
                dt: 0,
                newVect: null
            },
            ctors: {
                init: function () {
                    this.newVect = new UnityEngine.Vector3();
                }
            },
            methods: {
                /*LTDescr.alphaRecursive$1:static start.*/
                alphaRecursive$1: function (transform, val, useRecursion) {
                    var $t, $t1;
                    if (useRecursion === void 0) { useRecursion = true; }
                    var renderer = transform.gameObject.GetComponent(UnityEngine.Renderer);
                    if (UnityEngine.Component.op_Inequality(renderer, null)) {
                        $t = Bridge.getEnumerator(renderer.materials);
                        try {
                            while ($t.moveNext()) {
                                var mat = $t.Current;
                                if (mat.HasProperty$1("_Color")) {
                                    mat.color = new pc.Color( mat.color.r, mat.color.g, mat.color.b, val );
                                } else if (mat.HasProperty$1("_TintColor")) {
                                    var col = mat.GetColor$1("_TintColor");
                                    mat.SetColor$1("_TintColor", new pc.Color( col.r, col.g, col.b, val ));
                                }
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    if (useRecursion && transform.childCount > 0) {
                        $t1 = Bridge.getEnumerator(transform);
                        try {
                            while ($t1.moveNext()) {
                                var child = Bridge.cast($t1.Current, UnityEngine.Transform);
                                LTDescr.alphaRecursive$1(child, val);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.alphaRecursive$1:static end.*/

                /*LTDescr.alphaRecursive:static start.*/
                alphaRecursive: function (rectTransform, val, recursiveLevel) {
                    var $t;
                    if (recursiveLevel === void 0) { recursiveLevel = 0; }
                    if (rectTransform.childCount > 0) {
                        $t = Bridge.getEnumerator(rectTransform);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.RectTransform);
                                var uiImage = child.GetComponent(UnityEngine.UI.Image);
                                if (UnityEngine.MonoBehaviour.op_Inequality(uiImage, null)) {
                                    var c = uiImage.color.$clone();
                                    c.a = val;
                                    uiImage.color = c.$clone();
                                } else {
                                    uiImage = child.GetComponent(UnityEngine.UI.RawImage);
                                    if (UnityEngine.MonoBehaviour.op_Inequality(uiImage, null)) {
                                        var c1 = uiImage.color.$clone();
                                        c1.a = val;
                                        uiImage.color = c1.$clone();
                                    }
                                }

                                LTDescr.alphaRecursive(child, val, ((recursiveLevel + 1) | 0));
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.alphaRecursive:static end.*/

                /*LTDescr.colorRecursive$1:static start.*/
                colorRecursive$1: function (transform, toColor, useRecursion) {
                    var $t, $t1;
                    if (useRecursion === void 0) { useRecursion = true; }
                    var ren = transform.gameObject.GetComponent(UnityEngine.Renderer);
                    if (UnityEngine.Component.op_Inequality(ren, null)) {
                        $t = Bridge.getEnumerator(ren.materials);
                        try {
                            while ($t.moveNext()) {
                                var mat = $t.Current;
                                mat.color = toColor.$clone();
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                    if (useRecursion && transform.childCount > 0) {
                        $t1 = Bridge.getEnumerator(transform);
                        try {
                            while ($t1.moveNext()) {
                                var child = Bridge.cast($t1.Current, UnityEngine.Transform);
                                LTDescr.colorRecursive$1(child, toColor.$clone());
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.colorRecursive$1:static end.*/

                /*LTDescr.colorRecursive:static start.*/
                colorRecursive: function (rectTransform, toColor) {
                    var $t;

                    if (rectTransform.childCount > 0) {
                        $t = Bridge.getEnumerator(rectTransform);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.RectTransform);
                                var uiImage = child.GetComponent(UnityEngine.UI.Image);
                                if (UnityEngine.MonoBehaviour.op_Inequality(uiImage, null)) {
                                    uiImage.color = toColor.$clone();
                                } else {
                                    uiImage = child.GetComponent(UnityEngine.UI.RawImage);
                                    if (UnityEngine.MonoBehaviour.op_Inequality(uiImage, null)) {
                                        uiImage.color = toColor.$clone();
                                    }
                                }
                                LTDescr.colorRecursive(child, toColor.$clone());
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.colorRecursive:static end.*/

                /*LTDescr.alphaRecursiveSprite:static start.*/
                alphaRecursiveSprite: function (transform, val) {
                    var $t;
                    if (transform.childCount > 0) {
                        $t = Bridge.getEnumerator(transform);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                var ren = child.GetComponent(UnityEngine.SpriteRenderer);
                                if (UnityEngine.Component.op_Inequality(ren, null)) {
                                    ren.color = new pc.Color( ren.color.r, ren.color.g, ren.color.b, val );
                                }
                                LTDescr.alphaRecursiveSprite(child, val);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.alphaRecursiveSprite:static end.*/

                /*LTDescr.colorRecursiveSprite:static start.*/
                colorRecursiveSprite: function (transform, toColor) {
                    var $t;
                    if (transform.childCount > 0) {
                        $t = Bridge.getEnumerator(transform);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                var ren = transform.gameObject.GetComponent(UnityEngine.SpriteRenderer);
                                if (UnityEngine.Component.op_Inequality(ren, null)) {
                                    ren.color = toColor.$clone();
                                }
                                LTDescr.colorRecursiveSprite(child, toColor.$clone());
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.colorRecursiveSprite:static end.*/

                /*LTDescr.textAlphaChildrenRecursive:static start.*/
                textAlphaChildrenRecursive: function (trans, val, useRecursion) {
                    var $t;
                    if (useRecursion === void 0) { useRecursion = true; }

                    if (useRecursion && trans.childCount > 0) {
                        $t = Bridge.getEnumerator(trans);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                var uiText = child.GetComponent(UnityEngine.UI.Text);
                                if (UnityEngine.MonoBehaviour.op_Inequality(uiText, null)) {
                                    var c = uiText.color.$clone();
                                    c.a = val;
                                    uiText.color = c.$clone();
                                }
                                LTDescr.textAlphaChildrenRecursive(child, val);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.textAlphaChildrenRecursive:static end.*/

                /*LTDescr.textAlphaRecursive:static start.*/
                textAlphaRecursive: function (trans, val, useRecursion) {
                    var $t;
                    if (useRecursion === void 0) { useRecursion = true; }
                    var uiText = trans.GetComponent(UnityEngine.UI.Text);
                    if (UnityEngine.MonoBehaviour.op_Inequality(uiText, null)) {
                        var c = uiText.color.$clone();
                        c.a = val;
                        uiText.color = c.$clone();
                    }
                    if (useRecursion && trans.childCount > 0) {
                        $t = Bridge.getEnumerator(trans);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                LTDescr.textAlphaRecursive(child, val);
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.textAlphaRecursive:static end.*/

                /*LTDescr.textColorRecursive:static start.*/
                textColorRecursive: function (trans, toColor) {
                    var $t;
                    if (trans.childCount > 0) {
                        $t = Bridge.getEnumerator(trans);
                        try {
                            while ($t.moveNext()) {
                                var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                var uiText = child.GetComponent(UnityEngine.UI.Text);
                                if (UnityEngine.MonoBehaviour.op_Inequality(uiText, null)) {
                                    uiText.color = toColor.$clone();
                                }
                                LTDescr.textColorRecursive(child, toColor.$clone());
                            }
                        } finally {
                            if (Bridge.is($t, System.IDisposable)) {
                                $t.System$IDisposable$Dispose();
                            }
                        }
                    }
                },
                /*LTDescr.textColorRecursive:static end.*/

                /*LTDescr.tweenColor:static start.*/
                tweenColor: function (tween, val) {
                    var diff3 = tween._optional.point.$clone().sub( tween._optional.axis );
                    var diffAlpha = tween.to.y - tween.from.y;
                    return new pc.Color( tween._optional.axis.x + diff3.x * val, tween._optional.axis.y + diff3.y * val, tween._optional.axis.z + diff3.z * val, tween.from.y + diffAlpha * val );
                },
                /*LTDescr.tweenColor:static end.*/


            }
        },
        fields: {
            toggle: false,
            useEstimatedTime: false,
            useFrames: false,
            useManualTime: false,
            usesNormalDt: false,
            hasInitiliazed: false,
            hasExtraOnCompletes: false,
            hasPhysics: false,
            onCompleteOnRepeat: false,
            onCompleteOnStart: false,
            useRecursion: false,
            ratioPassed: 0,
            passed: 0,
            delay: 0,
            time: 0,
            speed: 0,
            lastVal: 0,
            _id: 0,
            loopCount: 0,
            counter: 0,
            direction: 0,
            directionLast: 0,
            overshoot: 0,
            period: 0,
            scale: 0,
            destroyOnComplete: false,
            trans: null,
            fromInternal: null,
            toInternal: null,
            diff: null,
            diffDiv2: null,
            type: 0,
            easeType: 0,
            loopType: 0,
            hasUpdateCallback: false,
            easeMethod: null,
            easeInternal: null,
            initInternal: null,
            spriteRen: null,
            rectTransform: null,
            uiText: null,
            uiImage: null,
            rawImage: null,
            sprites: null,
            _optional: null
        },
        props: {
            from: {
                get: function () {
                    return this.fromInternal.$clone();
                },
                set: function (value) {
                    this.fromInternal = value.$clone();
                }
            },
            to: {
                get: function () {
                    return this.toInternal.$clone();
                },
                set: function (value) {
                    this.toInternal = value.$clone();
                }
            },
            toTrans: {
                get: function () {
                    return this.optional.toTrans;
                }
            },
            uniqueId: {
                get: function () {
                    var toId = (this._id | ((this.counter << 16) >>> 0)) >>> 0;

                    /* uint backId = toId & 0xFFFF;
                    			uint backCounter = toId >> 16;
                    			if(_id!=backId || backCounter!=counter){
                    				Debug.LogError("BAD CONVERSION toId:"+_id);
                    			}*/

                    return (toId | 0);
                }
            },
            id: {
                get: function () {
                    return this.uniqueId;
                }
            },
            optional: {
                get: function () {
                    return this._optional;
                },
                set: function (value) {
                    this._optional = value;
                }
            }
        },
        ctors: {
            init: function () {
                this.fromInternal = new UnityEngine.Vector3();
                this.toInternal = new UnityEngine.Vector3();
                this.diff = new UnityEngine.Vector3();
                this.diffDiv2 = new UnityEngine.Vector3();
                this.counter = 4294967295;
                this._optional = new LTDescrOptional();
            },
            ctor: function () {
                this.$initialize();

            }
        },
        methods: {
            /*LTDescr.toString start.*/
            toString: function () {
                return ((UnityEngine.Component.op_Inequality(this.trans, null) ? "name:" + (this.trans.gameObject.name || "") : "gameObject:null") || "") + " toggle:" + System.Boolean.toString(this.toggle) + " passed:" + System.Single.format(this.passed) + " time:" + System.Single.format(this.time) + " delay:" + System.Single.format(this.delay) + " direction:" + System.Single.format(this.direction) + " from:" + this.from + " to:" + this.to + " diff:" + this.diff + " type:" + System.Enum.toString(TweenAction, this.type) + " ease:" + System.Enum.toString(LeanTweenType, this.easeType) + " useEstimatedTime:" + System.Boolean.toString(this.useEstimatedTime) + " id:" + this.id + " hasInitiliazed:" + System.Boolean.toString(this.hasInitiliazed);
            },
            /*LTDescr.toString end.*/

            /*LTDescr.cancel start.*/
            cancel: function (gameObject) {
                // Debug.Log("canceling id:"+this._id+" this.uniqueId:"+this.uniqueId+" go:"+this.trans.gameObject);
                if (UnityEngine.GameObject.op_Equality(gameObject, this.trans.gameObject)) {
                    LeanTween.removeTween$1((this._id | 0), this.uniqueId);
                }
                return this;
            },
            /*LTDescr.cancel end.*/

            /*LTDescr.reset start.*/
            reset: function () {
                var $t;
                this.toggle = (this.useRecursion = (this.usesNormalDt = true));
                this.trans = null;
                this.spriteRen = null;
                this.passed = (this.delay = (this.lastVal = 0.0));
                this.hasUpdateCallback = (this.useEstimatedTime = (this.useFrames = (this.hasInitiliazed = (this.onCompleteOnRepeat = (this.destroyOnComplete = (this.onCompleteOnStart = (this.useManualTime = (this.hasExtraOnCompletes = false))))))));
                this.easeType = LeanTweenType.linear;
                this.loopType = LeanTweenType.once;
                this.loopCount = 0;
                this.direction = (this.directionLast = (this.overshoot = (this.scale = 1.0)));
                this.period = 0.3;
                this.speed = -1.0;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeLinear);
                this.from = ($t = pc.Vec3.ZERO.clone(), this.to = $t.$clone(), $t);
                this._optional.reset();
            },
            /*LTDescr.reset end.*/

            /*LTDescr.setFollow start.*/
            setFollow: function () {
                this.type = TweenAction.FOLLOW;
                return this;
            },
            /*LTDescr.setFollow end.*/

            /*LTDescr.setMoveX start.*/
            setMoveX: function () {
                this.type = TweenAction.MOVE_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.position.x;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.position = new pc.Vec3( this.easeMethod().x, this.trans.position.y, this.trans.position.z );
                });
                return this;
            },
            /*LTDescr.setMoveX end.*/

            /*LTDescr.setMoveY start.*/
            setMoveY: function () {
                this.type = TweenAction.MOVE_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.position.y;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.position = new pc.Vec3( this.trans.position.x, this.easeMethod().x, this.trans.position.z );
                });
                return this;
            },
            /*LTDescr.setMoveY end.*/

            /*LTDescr.setMoveZ start.*/
            setMoveZ: function () {
                this.type = TweenAction.MOVE_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.position.z;
                });
                ;
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.position = new pc.Vec3( this.trans.position.x, this.trans.position.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setMoveZ end.*/

            /*LTDescr.setMoveLocalX start.*/
            setMoveLocalX: function () {
                this.type = TweenAction.MOVE_LOCAL_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localPosition.x;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localPosition = new pc.Vec3( this.easeMethod().x, this.trans.localPosition.y, this.trans.localPosition.z );
                });
                return this;
            },
            /*LTDescr.setMoveLocalX end.*/

            /*LTDescr.setMoveLocalY start.*/
            setMoveLocalY: function () {
                this.type = TweenAction.MOVE_LOCAL_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localPosition.y;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localPosition = new pc.Vec3( this.trans.localPosition.x, this.easeMethod().x, this.trans.localPosition.z );
                });
                return this;
            },
            /*LTDescr.setMoveLocalY end.*/

            /*LTDescr.setMoveLocalZ start.*/
            setMoveLocalZ: function () {
                this.type = TweenAction.MOVE_LOCAL_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localPosition.z;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localPosition = new pc.Vec3( this.trans.localPosition.x, this.trans.localPosition.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setMoveLocalZ end.*/

            /*LTDescr.initFromInternal start.*/
            initFromInternal: function () {
                this.fromInternal.x = 0;
            },
            /*LTDescr.initFromInternal end.*/

            /*LTDescr.setOffset start.*/
            setOffset: function (offset) {
                this.toInternal = offset.$clone();
                return this;
            },
            /*LTDescr.setOffset end.*/

            /*LTDescr.setMoveCurved start.*/
            setMoveCurved: function () {
                this.type = TweenAction.MOVE_CURVED;
                this.initInternal = Bridge.fn.cacheBind(this, this.initFromInternal);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (this._optional.path.orientToPath) {
                        if (this._optional.path.orientToPath2d) {
                            this._optional.path.place2d(this.trans, LTDescr.val);
                        } else {
                            this._optional.path.place(this.trans, LTDescr.val);
                        }
                    } else {
                        this.trans.position = this._optional.path.point(LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setMoveCurved end.*/

            /*LTDescr.setMoveCurvedLocal start.*/
            setMoveCurvedLocal: function () {
                this.type = TweenAction.MOVE_CURVED_LOCAL;
                this.initInternal = Bridge.fn.cacheBind(this, this.initFromInternal);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (this._optional.path.orientToPath) {
                        if (this._optional.path.orientToPath2d) {
                            this._optional.path.placeLocal2d(this.trans, LTDescr.val);
                        } else {
                            this._optional.path.placeLocal(this.trans, LTDescr.val);
                        }
                    } else {
                        this.trans.localPosition = this._optional.path.point(LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setMoveCurvedLocal end.*/

            /*LTDescr.setMoveSpline start.*/
            setMoveSpline: function () {
                this.type = TweenAction.MOVE_SPLINE;
                this.initInternal = Bridge.fn.cacheBind(this, this.initFromInternal);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (this._optional.spline.orientToPath) {
                        if (this._optional.spline.orientToPath2d) {
                            this._optional.spline.place2d(this.trans, LTDescr.val);
                        } else {
                            this._optional.spline.place(this.trans, LTDescr.val);
                        }
                    } else {
                        this.trans.position = this._optional.spline.point(LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setMoveSpline end.*/

            /*LTDescr.setMoveSplineLocal start.*/
            setMoveSplineLocal: function () {
                this.type = TweenAction.MOVE_SPLINE_LOCAL;
                this.initInternal = Bridge.fn.cacheBind(this, this.initFromInternal);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (this._optional.spline.orientToPath) {
                        if (this._optional.spline.orientToPath2d) {
                            this._optional.spline.placeLocal2d(this.trans, LTDescr.val);
                        } else {
                            this._optional.spline.placeLocal(this.trans, LTDescr.val);
                        }
                    } else {
                        this.trans.localPosition = this._optional.spline.point(LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setMoveSplineLocal end.*/

            /*LTDescr.setScaleX start.*/
            setScaleX: function () {
                this.type = TweenAction.SCALE_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localScale.x;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localScale = new pc.Vec3( this.easeMethod().x, this.trans.localScale.y, this.trans.localScale.z );
                });
                return this;
            },
            /*LTDescr.setScaleX end.*/

            /*LTDescr.setScaleY start.*/
            setScaleY: function () {
                this.type = TweenAction.SCALE_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localScale.y;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localScale = new pc.Vec3( this.trans.localScale.x, this.easeMethod().x, this.trans.localScale.z );
                });
                return this;
            },
            /*LTDescr.setScaleY end.*/

            /*LTDescr.setScaleZ start.*/
            setScaleZ: function () {
                this.type = TweenAction.SCALE_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.localScale.z;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.localScale = new pc.Vec3( this.trans.localScale.x, this.trans.localScale.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setScaleZ end.*/

            /*LTDescr.setRotateX start.*/
            setRotateX: function () {
                this.type = TweenAction.ROTATE_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.eulerAngles.x;
                    this.toInternal.x = LeanTween.closestRot(this.fromInternal.x, this.toInternal.x);
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.eulerAngles = new pc.Vec3( this.easeMethod().x, this.trans.eulerAngles.y, this.trans.eulerAngles.z );
                });
                return this;
            },
            /*LTDescr.setRotateX end.*/

            /*LTDescr.setRotateY start.*/
            setRotateY: function () {
                this.type = TweenAction.ROTATE_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.eulerAngles.y;
                    this.toInternal.x = LeanTween.closestRot(this.fromInternal.x, this.toInternal.x);
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.eulerAngles = new pc.Vec3( this.trans.eulerAngles.x, this.easeMethod().x, this.trans.eulerAngles.z );
                });
                return this;
            },
            /*LTDescr.setRotateY end.*/

            /*LTDescr.setRotateZ start.*/
            setRotateZ: function () {
                this.type = TweenAction.ROTATE_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.eulerAngles.z;
                    this.toInternal.x = LeanTween.closestRot(this.fromInternal.x, this.toInternal.x);
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.eulerAngles = new pc.Vec3( this.trans.eulerAngles.x, this.trans.eulerAngles.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setRotateZ end.*/

            /*LTDescr.setRotateAround start.*/
            setRotateAround: function () {
                this.type = TweenAction.ROTATE_AROUND;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = 0.0;
                    this._optional.origRotation = this.trans.rotation.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var origPos = this.trans.localPosition.$clone();
                    var rotateAroundPt = this.trans.TransformPoint$1(this._optional.point);
                    // Debug.Log("this._optional.point:"+this._optional.point);
                    this.trans.RotateAround(rotateAroundPt.$clone(), this._optional.axis.$clone(), -this._optional.lastVal);
                    var diff = origPos.$clone().sub( this.trans.localPosition );

                    this.trans.localPosition = origPos.$clone().sub( diff ); // Subtract the amount the object has been shifted over by the rotate, to get it back to it's orginal position
                    this.trans.rotation = this._optional.origRotation.$clone();

                    rotateAroundPt = this.trans.TransformPoint$1(this._optional.point);
                    this.trans.RotateAround(rotateAroundPt.$clone(), this._optional.axis.$clone(), LTDescr.val);

                    this._optional.lastVal = LTDescr.val;
                });
                return this;
            },
            /*LTDescr.setRotateAround end.*/

            /*LTDescr.setRotateAroundLocal start.*/
            setRotateAroundLocal: function () {
                this.type = TweenAction.ROTATE_AROUND_LOCAL;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = 0.0;
                    this._optional.origRotation = this.trans.localRotation.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var origPos = this.trans.localPosition.$clone();
                    this.trans.RotateAround(this.trans.TransformPoint$1(this._optional.point), this.trans.TransformDirection(this._optional.axis.$clone()), -this._optional.lastVal);
                    var diff = origPos.$clone().sub( this.trans.localPosition );

                    this.trans.localPosition = origPos.$clone().sub( diff ); // Subtract the amount the object has been shifted over by the rotate, to get it back to it's orginal position
                    this.trans.localRotation = this._optional.origRotation.$clone();
                    var rotateAroundPt = this.trans.TransformPoint$1(this._optional.point);
                    this.trans.RotateAround(rotateAroundPt.$clone(), this.trans.TransformDirection(this._optional.axis.$clone()), LTDescr.val);

                    this._optional.lastVal = LTDescr.val;
                });
                return this;
            },
            /*LTDescr.setRotateAroundLocal end.*/

            /*LTDescr.setAlpha start.*/
            setAlpha: function () {
                this.type = TweenAction.ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    var $t;
                    var ren = this.trans.GetComponent(UnityEngine.SpriteRenderer);
                    if (UnityEngine.Component.op_Inequality(ren, null)) {
                        this.fromInternal.x = ren.color.a;
                    } else {
                        if (UnityEngine.Component.op_Inequality(this.trans.GetComponent(UnityEngine.Renderer), null) && this.trans.GetComponent(UnityEngine.Renderer).material.HasProperty$1("_Color")) {
                            this.fromInternal.x = this.trans.GetComponent(UnityEngine.Renderer).material.color.a;
                        } else if (UnityEngine.Component.op_Inequality(this.trans.GetComponent(UnityEngine.Renderer), null) && this.trans.GetComponent(UnityEngine.Renderer).material.HasProperty$1("_TintColor")) {
                            var col = this.trans.GetComponent(UnityEngine.Renderer).material.GetColor$1("_TintColor");
                            this.fromInternal.x = col.a;
                        } else if (this.trans.childCount > 0) {
                            $t = Bridge.getEnumerator(this.trans);
                            try {
                                while ($t.moveNext()) {
                                    var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                    if (UnityEngine.Component.op_Inequality(child.gameObject.GetComponent(UnityEngine.Renderer), null)) {
                                        var col1 = child.gameObject.GetComponent(UnityEngine.Renderer).material.color.$clone();
                                        this.fromInternal.x = col1.a;
                                        break;
                                    }
                                }
                            } finally {
                                if (Bridge.is($t, System.IDisposable)) {
                                    $t.System$IDisposable$Dispose();
                                }
                            }
                        }
                    }

                    this.easeInternal = Bridge.fn.bind(this, function () {
                        LTDescr.val = this.easeMethod().x;
                        if (UnityEngine.Component.op_Inequality(this.spriteRen, null)) {
                            this.spriteRen.color = new pc.Color( this.spriteRen.color.r, this.spriteRen.color.g, this.spriteRen.color.b, LTDescr.val );
                            LTDescr.alphaRecursiveSprite(this.trans, LTDescr.val);
                        } else {
                            LTDescr.alphaRecursive$1(this.trans, LTDescr.val, this.useRecursion);
                        }
                    });

                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (UnityEngine.Component.op_Inequality(this.spriteRen, null)) {
                        this.spriteRen.color = new pc.Color( this.spriteRen.color.r, this.spriteRen.color.g, this.spriteRen.color.b, LTDescr.val );
                        LTDescr.alphaRecursiveSprite(this.trans, LTDescr.val);
                    } else {
                        LTDescr.alphaRecursive$1(this.trans, LTDescr.val, this.useRecursion);
                    }
                });
                return this;
            },
            /*LTDescr.setAlpha end.*/

            /*LTDescr.setTextAlpha start.*/
            setTextAlpha: function () {
                this.type = TweenAction.TEXT_ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiText = this.trans.GetComponent(UnityEngine.UI.Text);
                    this.fromInternal.x = UnityEngine.MonoBehaviour.op_Inequality(this.uiText, null) ? this.uiText.color.a : 1.0;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.textAlphaRecursive(this.trans, this.easeMethod().x, this.useRecursion);
                });
                return this;
            },
            /*LTDescr.setTextAlpha end.*/

            /*LTDescr.setAlphaVertex start.*/
            setAlphaVertex: function () {
                this.type = TweenAction.ALPHA_VERTEX;
                this.initInternal = Bridge.fn.bind(this, function () {
                    var $t;
                    this.fromInternal.x = ($t = this.trans.GetComponent(UnityEngine.MeshFilter).mesh.colors32)[0].a;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var $t;
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var mesh = this.trans.GetComponent(UnityEngine.MeshFilter).mesh;
                    var vertices = mesh.vertices;
                    var colors = System.Array.init(vertices.length, function (){
                        return new UnityEngine.Color32();
                    }, UnityEngine.Color32);
                    if (colors.length === 0) { //MaxFW fix: add vertex colors if the mesh doesn't have any             
                        var transparentWhiteColor32 = new UnityEngine.Color32.$ctor1(255, 255, 255, 0);
                        colors = System.Array.init(mesh.vertices.length, function (){
                            return new UnityEngine.Color32();
                        }, UnityEngine.Color32);
                        for (var k = 0; k < colors.length; k = (k + 1) | 0) {
                            colors[k] = transparentWhiteColor32.$clone();
                        }
                        mesh.colors32 = colors;
                    } // fix end
                    var c = ($t = mesh.colors32)[0].$clone();
                    c = UnityEngine.Color32.op_Implicit$1(new pc.Color( c.r, c.g, c.b, LTDescr.val ));
                    for (var k1 = 0; k1 < vertices.length; k1 = (k1 + 1) | 0) {
                        colors[k1] = c.$clone();
                    }
                    mesh.colors32 = colors;
                });
                return this;
            },
            /*LTDescr.setAlphaVertex end.*/

            /*LTDescr.setColor start.*/
            setColor: function () {
                this.type = TweenAction.COLOR;
                this.initInternal = Bridge.fn.bind(this, function () {
                    var $t;
                    var renColor = this.trans.GetComponent(UnityEngine.SpriteRenderer);
                    if (UnityEngine.Component.op_Inequality(renColor, null)) {
                        this.setFromColor(renColor.color.$clone());
                    } else {
                        if (UnityEngine.Component.op_Inequality(this.trans.GetComponent(UnityEngine.Renderer), null) && this.trans.GetComponent(UnityEngine.Renderer).material.HasProperty$1("_Color")) {
                            var col = this.trans.GetComponent(UnityEngine.Renderer).material.color.$clone();
                            this.setFromColor(col.$clone());
                        } else if (UnityEngine.Component.op_Inequality(this.trans.GetComponent(UnityEngine.Renderer), null) && this.trans.GetComponent(UnityEngine.Renderer).material.HasProperty$1("_TintColor")) {
                            var col1 = this.trans.GetComponent(UnityEngine.Renderer).material.GetColor$1("_TintColor");
                            this.setFromColor(col1.$clone());
                        } else if (this.trans.childCount > 0) {
                            $t = Bridge.getEnumerator(this.trans);
                            try {
                                while ($t.moveNext()) {
                                    var child = Bridge.cast($t.Current, UnityEngine.Transform);
                                    if (UnityEngine.Component.op_Inequality(child.gameObject.GetComponent(UnityEngine.Renderer), null)) {
                                        var col2 = child.gameObject.GetComponent(UnityEngine.Renderer).material.color.$clone();
                                        this.setFromColor(col2.$clone());
                                        break;
                                    }
                                }
                            } finally {
                                if (Bridge.is($t, System.IDisposable)) {
                                    $t.System$IDisposable$Dispose();
                                }
                            }
                        }
                    }
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var toColor = LTDescr.tweenColor(this, LTDescr.val);


                    if (UnityEngine.Component.op_Inequality(this.spriteRen, null)) {
                        this.spriteRen.color = toColor.$clone();
                        LTDescr.colorRecursiveSprite(this.trans, toColor.$clone());
                    } else {
                        // Debug.Log("val:"+val+" tween:"+tween+" tween.diff:"+tween.diff);
                        if (this.type === TweenAction.COLOR) {
                            LTDescr.colorRecursive$1(this.trans, toColor.$clone(), this.useRecursion);
                        }

                    }
                    if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColor, null)) {
                        this._optional.onUpdateColor(toColor.$clone());
                    } else if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColorObject, null)) {
                        this._optional.onUpdateColorObject(toColor.$clone(), this._optional.onUpdateParam);
                    }
                });
                return this;
            },
            /*LTDescr.setColor end.*/

            /*LTDescr.setCallbackColor start.*/
            setCallbackColor: function () {
                this.type = TweenAction.CALLBACK_COLOR;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.diff = new pc.Vec3( 1.0, 0.0, 0.0 );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var toColor = LTDescr.tweenColor(this, LTDescr.val);

                    if (UnityEngine.Component.op_Inequality(this.spriteRen, null)) {
                        this.spriteRen.color = toColor.$clone();
                        LTDescr.colorRecursiveSprite(this.trans, toColor.$clone());
                    } else {
                        // Debug.Log("val:"+val+" tween:"+tween+" tween.diff:"+tween.diff);
                        if (this.type === TweenAction.COLOR) {
                            LTDescr.colorRecursive$1(this.trans, toColor.$clone(), this.useRecursion);
                        }

                    }
                    if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColor, null)) {
                        this._optional.onUpdateColor(toColor.$clone());
                    } else if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColorObject, null)) {
                        this._optional.onUpdateColorObject(toColor.$clone(), this._optional.onUpdateParam);
                    }
                });
                return this;
            },
            /*LTDescr.setCallbackColor end.*/

            /*LTDescr.setTextColor start.*/
            setTextColor: function () {
                this.type = TweenAction.TEXT_COLOR;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiText = this.trans.GetComponent(UnityEngine.UI.Text);
                    this.setFromColor(UnityEngine.MonoBehaviour.op_Inequality(this.uiText, null) ? this.uiText.color.$clone() : new pc.Color( 1, 1, 1, 1 ));
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var toColor = LTDescr.tweenColor(this, LTDescr.val);
                    this.uiText.color = toColor.$clone();
                    if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColor, null)) {
                        this._optional.onUpdateColor(toColor.$clone());
                    }

                    if (this.useRecursion && this.trans.childCount > 0) {
                        LTDescr.textColorRecursive(this.trans, toColor.$clone());
                    }
                });
                return this;
            },
            /*LTDescr.setTextColor end.*/

            /*LTDescr.setCanvasAlpha start.*/
            setCanvasAlpha: function () {
                this.type = TweenAction.CANVAS_ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiImage = this.trans.GetComponent(UnityEngine.UI.Image);
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiImage, null)) {
                        this.fromInternal.x = this.uiImage.color.a;
                    } else {
                        this.rawImage = this.trans.GetComponent(UnityEngine.UI.RawImage);
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null)) {
                            this.fromInternal.x = this.rawImage.color.a;
                        } else {
                            this.fromInternal.x = 1.0;
                        }
                    }

                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiImage, null)) {
                        var c = this.uiImage.color.$clone();
                        c.a = LTDescr.val;
                        this.uiImage.color = c.$clone();
                    } else if (UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null)) {
                        var c1 = this.rawImage.color.$clone();
                        c1.a = LTDescr.val;
                        this.rawImage.color = c1.$clone();
                    }
                    if (this.useRecursion) {
                        LTDescr.alphaRecursive(this.rectTransform, LTDescr.val, 0);
                        LTDescr.textAlphaChildrenRecursive(this.rectTransform, LTDescr.val);
                    }
                });
                return this;
            },
            /*LTDescr.setCanvasAlpha end.*/

            /*LTDescr.setCanvasGroupAlpha start.*/
            setCanvasGroupAlpha: function () {
                this.type = TweenAction.CANVASGROUP_ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.trans.GetComponent(UnityEngine.CanvasGroup).alpha;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.trans.GetComponent(UnityEngine.CanvasGroup).alpha = this.easeMethod().x;
                });
                return this;
            },
            /*LTDescr.setCanvasGroupAlpha end.*/

            /*LTDescr.setCanvasColor start.*/
            setCanvasColor: function () {
                this.type = TweenAction.CANVAS_COLOR;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiImage = this.trans.GetComponent(UnityEngine.UI.Image);
                    if (UnityEngine.MonoBehaviour.op_Equality(this.uiImage, null)) {
                        this.rawImage = this.trans.GetComponent(UnityEngine.UI.RawImage);
                        this.setFromColor(UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null) ? this.rawImage.color.$clone() : new pc.Color( 1, 1, 1, 1 ));
                    } else {
                        this.setFromColor(this.uiImage.color.$clone());
                    }

                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var toColor = LTDescr.tweenColor(this, LTDescr.val);
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.uiImage, null)) {
                        this.uiImage.color = toColor.$clone();
                    } else if (UnityEngine.MonoBehaviour.op_Inequality(this.rawImage, null)) {
                        this.rawImage.color = toColor.$clone();
                    }

                    if (LTDescr.dt !== 0.0 && !Bridge.staticEquals(this._optional.onUpdateColor, null)) {
                        this._optional.onUpdateColor(toColor.$clone());
                    }

                    if (this.useRecursion) {
                        LTDescr.colorRecursive(this.rectTransform, toColor.$clone());
                    }
                });
                return this;
            },
            /*LTDescr.setCanvasColor end.*/

            /*LTDescr.setCanvasMoveX start.*/
            setCanvasMoveX: function () {
                this.type = TweenAction.CANVAS_MOVE_X;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.rectTransform.anchoredPosition3D.x;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var c = this.rectTransform.anchoredPosition3D.$clone();
                    this.rectTransform.anchoredPosition3D = new pc.Vec3( this.easeMethod().x, c.y, c.z );
                });
                return this;
            },
            /*LTDescr.setCanvasMoveX end.*/

            /*LTDescr.setCanvasMoveY start.*/
            setCanvasMoveY: function () {
                this.type = TweenAction.CANVAS_MOVE_Y;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.rectTransform.anchoredPosition3D.y;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var c = this.rectTransform.anchoredPosition3D.$clone();
                    this.rectTransform.anchoredPosition3D = new pc.Vec3( c.x, this.easeMethod().x, c.z );
                });
                return this;
            },
            /*LTDescr.setCanvasMoveY end.*/

            /*LTDescr.setCanvasMoveZ start.*/
            setCanvasMoveZ: function () {
                this.type = TweenAction.CANVAS_MOVE_Z;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this.rectTransform.anchoredPosition3D.z;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var c = this.rectTransform.anchoredPosition3D.$clone();
                    this.rectTransform.anchoredPosition3D = new pc.Vec3( c.x, c.y, this.easeMethod().x );
                });
                return this;
            },
            /*LTDescr.setCanvasMoveZ end.*/

            /*LTDescr.initCanvasRotateAround start.*/
            initCanvasRotateAround: function () {
                this.lastVal = 0.0;
                this.fromInternal.x = 0.0;
                this._optional.origRotation = this.rectTransform.rotation.$clone();
            },
            /*LTDescr.initCanvasRotateAround end.*/

            /*LTDescr.setCanvasRotateAround start.*/
            setCanvasRotateAround: function () {
                this.type = TweenAction.CANVAS_ROTATEAROUND;
                this.initInternal = Bridge.fn.cacheBind(this, this.initCanvasRotateAround);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var rect = this.rectTransform;
                    var origPos = rect.localPosition.$clone();
                    rect.RotateAround(rect.TransformPoint$1(this._optional.point), this._optional.axis.$clone(), -LTDescr.val);
                    var diff = origPos.$clone().sub( rect.localPosition );

                    rect.localPosition = origPos.$clone().sub( diff ); // Subtract the amount the object has been shifted over by the rotate, to get it back to it's orginal position
                    rect.rotation = this._optional.origRotation.$clone();
                    rect.RotateAround(rect.TransformPoint$1(this._optional.point), this._optional.axis.$clone(), LTDescr.val);
                });
                return this;
            },
            /*LTDescr.setCanvasRotateAround end.*/

            /*LTDescr.setCanvasRotateAroundLocal start.*/
            setCanvasRotateAroundLocal: function () {
                this.type = TweenAction.CANVAS_ROTATEAROUND_LOCAL;
                this.initInternal = Bridge.fn.cacheBind(this, this.initCanvasRotateAround);
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var rect = this.rectTransform;
                    var origPos = rect.localPosition.$clone();
                    rect.RotateAround(rect.TransformPoint$1(this._optional.point), rect.TransformDirection(this._optional.axis.$clone()), -LTDescr.val);
                    var diff = origPos.$clone().sub( rect.localPosition );

                    rect.localPosition = origPos.$clone().sub( diff ); // Subtract the amount the object has been shifted over by the rotate, to get it back to it's orginal position
                    rect.rotation = this._optional.origRotation.$clone();
                    rect.RotateAround(rect.TransformPoint$1(this._optional.point), rect.TransformDirection(this._optional.axis.$clone()), LTDescr.val);
                });
                return this;
            },
            /*LTDescr.setCanvasRotateAroundLocal end.*/

            /*LTDescr.setCanvasPlaySprite start.*/
            setCanvasPlaySprite: function () {
                this.type = TweenAction.CANVAS_PLAYSPRITE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.uiImage = this.trans.GetComponent(UnityEngine.UI.Image);
                    this.fromInternal.x = 0.0;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    LTDescr.val = LTDescr.newVect.x;
                    var frame = Bridge.Int.clip32(Math.round(LTDescr.val));
                    this.uiImage.sprite = this.sprites[frame];
                });
                return this;
            },
            /*LTDescr.setCanvasPlaySprite end.*/

            /*LTDescr.setCanvasMove start.*/
            setCanvasMove: function () {
                this.type = TweenAction.CANVAS_MOVE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal = this.rectTransform.anchoredPosition3D.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.rectTransform.anchoredPosition3D = this.easeMethod();
                });
                return this;
            },
            /*LTDescr.setCanvasMove end.*/

            /*LTDescr.setCanvasScale start.*/
            setCanvasScale: function () {
                this.type = TweenAction.CANVAS_SCALE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.rectTransform.localScale.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.rectTransform.localScale = this.easeMethod();
                });
                return this;
            },
            /*LTDescr.setCanvasScale end.*/

            /*LTDescr.setCanvasSizeDelta start.*/
            setCanvasSizeDelta: function () {
                this.type = TweenAction.CANVAS_SIZEDELTA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = UnityEngine.Vector3.FromVector2(this.rectTransform.sizeDelta.$clone());
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.rectTransform.sizeDelta = UnityEngine.Vector2.FromVector3(this.easeMethod());
                });
                return this;
            },
            /*LTDescr.setCanvasSizeDelta end.*/

            /*LTDescr.callback start.*/
            callback: function () {
                LTDescr.newVect = this.easeMethod();
                LTDescr.val = LTDescr.newVect.x;
            },
            /*LTDescr.callback end.*/

            /*LTDescr.setCallback start.*/
            setCallback: function () {
                this.type = TweenAction.CALLBACK;
                this.initInternal = function () { };
                this.easeInternal = Bridge.fn.cacheBind(this, this.callback);
                return this;
            },
            /*LTDescr.setCallback end.*/

            /*LTDescr.setValue3 start.*/
            setValue3: function () {
                this.type = TweenAction.VALUE3;
                this.initInternal = function () { };
                this.easeInternal = Bridge.fn.cacheBind(this, this.callback);
                return this;
            },
            /*LTDescr.setValue3 end.*/

            /*LTDescr.setMove start.*/
            setMove: function () {
                this.type = TweenAction.MOVE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.position.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.position = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setMove end.*/

            /*LTDescr.setMoveLocal start.*/
            setMoveLocal: function () {
                this.type = TweenAction.MOVE_LOCAL;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.localPosition.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.localPosition = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setMoveLocal end.*/

            /*LTDescr.setMoveToTransform start.*/
            setMoveToTransform: function () {
                this.type = TweenAction.MOVE_TO_TRANSFORM;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.position.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this.to = this._optional.toTrans.position.$clone();
                    this.diff = this.to.$clone().sub( this.from );
                    this.diffDiv2 = this.diff.$clone().scale( 0.5 );

                    LTDescr.newVect = this.easeMethod();
                    this.trans.position = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setMoveToTransform end.*/

            /*LTDescr.setRotate start.*/
            setRotate: function () {
                this.type = TweenAction.ROTATE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.eulerAngles.$clone();
                    this.to = new pc.Vec3( LeanTween.closestRot(this.fromInternal.x, this.toInternal.x), LeanTween.closestRot(this.from.y, this.to.y), LeanTween.closestRot(this.from.z, this.to.z) );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.eulerAngles = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setRotate end.*/

            /*LTDescr.setRotateLocal start.*/
            setRotateLocal: function () {
                this.type = TweenAction.ROTATE_LOCAL;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.localEulerAngles.$clone();
                    this.to = new pc.Vec3( LeanTween.closestRot(this.fromInternal.x, this.toInternal.x), LeanTween.closestRot(this.from.y, this.to.y), LeanTween.closestRot(this.from.z, this.to.z) );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.localEulerAngles = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setRotateLocal end.*/

            /*LTDescr.setScale start.*/
            setScale: function () {
                this.type = TweenAction.SCALE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = this.trans.localScale.$clone();
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    LTDescr.newVect = this.easeMethod();
                    this.trans.localScale = LTDescr.newVect.$clone();
                });
                return this;
            },
            /*LTDescr.setScale end.*/

            /*LTDescr.setScale$1 start.*/
            setScale$1: function (scale) {
                this.scale = scale;
                return this;
            },
            /*LTDescr.setScale$1 end.*/

            /*LTDescr.setGUIMove start.*/
            setGUIMove: function () {
                this.type = TweenAction.GUI_MOVE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = new pc.Vec3( this._optional.ltRect.rect.x, this._optional.ltRect.rect.y, 0 );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var v = this.easeMethod();
                    this._optional.ltRect.rect = new UnityEngine.Rect.$ctor1(v.x, v.y, this._optional.ltRect.rect.width, this._optional.ltRect.rect.height);
                });
                return this;
            },
            /*LTDescr.setGUIMove end.*/

            /*LTDescr.setGUIMoveMargin start.*/
            setGUIMoveMargin: function () {
                this.type = TweenAction.GUI_MOVE_MARGIN;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = UnityEngine.Vector3.FromVector2(new pc.Vec2( this._optional.ltRect.margin.x, this._optional.ltRect.margin.y ));
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var v = this.easeMethod();
                    this._optional.ltRect.margin = new pc.Vec2( v.x, v.y );
                });
                return this;
            },
            /*LTDescr.setGUIMoveMargin end.*/

            /*LTDescr.setGUIScale start.*/
            setGUIScale: function () {
                this.type = TweenAction.GUI_SCALE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.from = new pc.Vec3( this._optional.ltRect.rect.width, this._optional.ltRect.rect.height, 0 );
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    var v = this.easeMethod();
                    this._optional.ltRect.rect = new UnityEngine.Rect.$ctor1(this._optional.ltRect.rect.x, this._optional.ltRect.rect.y, v.x, v.y);
                });
                return this;
            },
            /*LTDescr.setGUIScale end.*/

            /*LTDescr.setGUIAlpha start.*/
            setGUIAlpha: function () {
                this.type = TweenAction.GUI_ALPHA;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.fromInternal.x = this._optional.ltRect.alpha;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this._optional.ltRect.alpha = this.easeMethod().x;
                });
                return this;
            },
            /*LTDescr.setGUIAlpha end.*/

            /*LTDescr.setGUIRotate start.*/
            setGUIRotate: function () {
                this.type = TweenAction.GUI_ROTATE;
                this.initInternal = Bridge.fn.bind(this, function () {
                    if (this._optional.ltRect.rotateEnabled === false) {
                        this._optional.ltRect.rotateEnabled = true;
                        this._optional.ltRect.resetForRotation();
                    }

                    this.fromInternal.x = this._optional.ltRect.rotation;
                });
                this.easeInternal = Bridge.fn.bind(this, function () {
                    this._optional.ltRect.rotation = this.easeMethod().x;
                });
                return this;
            },
            /*LTDescr.setGUIRotate end.*/

            /*LTDescr.setDelayedSound start.*/
            setDelayedSound: function () {
                this.type = TweenAction.DELAYED_SOUND;
                this.initInternal = Bridge.fn.bind(this, function () {
                    this.hasExtraOnCompletes = true;
                });
                this.easeInternal = Bridge.fn.cacheBind(this, this.callback);
                return this;
            },
            /*LTDescr.setDelayedSound end.*/

            /*LTDescr.setTarget start.*/
            setTarget: function (trans) {
                this.optional.toTrans = trans;
                return this;
            },
            /*LTDescr.setTarget end.*/

            /*LTDescr.init start.*/
            init: function () {
                this.hasInitiliazed = true;

                this.usesNormalDt = !(this.useEstimatedTime || this.useManualTime || this.useFrames); // only set this to true if it uses non of the other timing modes

                if (this.useFrames) {
                    this.optional.initFrameCount = UnityEngine.Time.frameCount;
                }

                if (this.time <= 0.0) {
                    this.time = Number.EPSILON;
                }

                if (!Bridge.staticEquals(this.initInternal, null)) {
                    this.initInternal();
                }

                this.diff = this.to.$clone().sub( this.from );
                this.diffDiv2 = this.diff.$clone().scale( 0.5 );

                if (!Bridge.staticEquals(this._optional.onStart, null)) {
                    this._optional.onStart();
                }

                if (this.onCompleteOnStart) {
                    this.callOnCompletes();
                }

                if (this.speed >= 0) {
                    this.initSpeed();
                }
            },
            /*LTDescr.init end.*/

            /*LTDescr.initSpeed start.*/
            initSpeed: function () {
                if (this.type === TweenAction.MOVE_CURVED || this.type === TweenAction.MOVE_CURVED_LOCAL) {
                    this.time = this._optional.path.distance / this.speed;
                } else if (this.type === TweenAction.MOVE_SPLINE || this.type === TweenAction.MOVE_SPLINE_LOCAL) {
                    this.time = this._optional.spline.distance / this.speed;
                } else {
                    this.time = (this.to.$clone().sub( this.from )).length() / this.speed;
                }
            },
            /*LTDescr.initSpeed end.*/

            /*LTDescr.updateNow start.*/
            updateNow: function () {
                this.updateInternal();
                return this;
            },
            /*LTDescr.updateNow end.*/

            /*LTDescr.updateInternal start.*/
            updateInternal: function () {

                var directionLocal = this.direction;
                if (this.usesNormalDt) {
                    LTDescr.dt = LeanTween.dtActual;
                } else if (this.useEstimatedTime) {
                    LTDescr.dt = LeanTween.dtEstimated;
                } else if (this.useFrames) {
                    LTDescr.dt = this.optional.initFrameCount === 0 ? 0 : 1;
                    this.optional.initFrameCount = UnityEngine.Time.frameCount;
                } else if (this.useManualTime) {
                    LTDescr.dt = LeanTween.dtManual;
                }

                //		Debug.Log ("tween:" + this+ " dt:"+dt);
                if (this.delay <= 0.0 && directionLocal !== 0.0) {
                    if (UnityEngine.Component.op_Equality(this.trans, null)) {
                        return true;
                    }

                    // initialize if has not done so yet
                    if (!this.hasInitiliazed) {
                        this.init();
                    }

                    LTDescr.dt = LTDescr.dt * directionLocal;
                    this.passed += LTDescr.dt;

                    this.passed = Math.max(0.0, Math.min(this.passed, this.time));

                    this.ratioPassed = (this.passed / this.time); // need to clamp when finished so it will finish at the exact spot and not overshoot

                    this.easeInternal();

                    if (this.hasUpdateCallback) {
                        this._optional.callOnUpdate(LTDescr.val, this.ratioPassed);
                    }

                    var isTweenFinished = directionLocal > 0.0 ? this.passed >= this.time : this.passed <= 0.0;
                    //			Debug.Log("lt "+this+" dt:"+dt+" fin:"+isTweenFinished);
                    if (isTweenFinished) { // increment or flip tween
                        this.loopCount = (this.loopCount - 1) | 0;
                        if (this.loopType === LeanTweenType.pingPong) {
                            this.direction = 0.0 - directionLocal;
                        } else {
                            this.passed = Number.EPSILON;
                        }

                        isTweenFinished = this.loopCount === 0 || this.loopType === LeanTweenType.once; // only return true if it is fully complete

                        if (isTweenFinished === false && this.onCompleteOnRepeat && this.hasExtraOnCompletes) {
                            this.callOnCompletes();
                        } // this only gets called if onCompleteOnRepeat is set to true, otherwise LeanTween class takes care of calling it

                        return isTweenFinished;
                    }
                } else {
                    this.delay -= LTDescr.dt;
                }

                return false;
            },
            /*LTDescr.updateInternal end.*/

            /*LTDescr.callOnCompletes start.*/
            callOnCompletes: function () {
                if (this.type === TweenAction.GUI_ROTATE) {
                    this._optional.ltRect.rotateFinished = true;
                }

                if (this.type === TweenAction.DELAYED_SOUND) {
                    UnityEngine.AudioSource.PlayClipAtPoint(Bridge.cast(this._optional.onCompleteParam, UnityEngine.AudioClip), this.to.$clone(), this.from.x);
                }
                if (!Bridge.staticEquals(this._optional.onComplete, null)) {
                    this._optional.onComplete();
                } else if (!Bridge.staticEquals(this._optional.onCompleteObject, null)) {
                    this._optional.onCompleteObject(this._optional.onCompleteParam);
                }
            },
            /*LTDescr.callOnCompletes end.*/

            /*LTDescr.setFromColor start.*/
            setFromColor: function (col) {
                this.from = new pc.Vec3( 0.0, col.a, 0.0 );
                this.diff = new pc.Vec3( 1.0, 0.0, 0.0 );
                this._optional.axis = new pc.Vec3( col.r, col.g, col.b );
                return this;
            },
            /*LTDescr.setFromColor end.*/

            /*LTDescr.pause start.*/
            pause: function () {
                if (this.direction !== 0.0) { // check if tween is already paused
                    this.directionLast = this.direction;
                    this.direction = 0.0;
                }

                return this;
            },
            /*LTDescr.pause end.*/

            /*LTDescr.resume start.*/
            resume: function () {
                this.direction = this.directionLast;

                return this;
            },
            /*LTDescr.resume end.*/

            /*LTDescr.setAxis start.*/
            setAxis: function (axis) {
                this._optional.axis = axis.$clone();
                return this;
            },
            /*LTDescr.setAxis end.*/

            /*LTDescr.setDelay start.*/
            setDelay: function (delay) {
                this.delay = delay;

                return this;
            },
            /*LTDescr.setDelay end.*/

            /*LTDescr.setEase start.*/
            setEase: function (easeType) {

                switch (easeType) {
                    case LeanTweenType.linear: 
                        this.setEaseLinear();
                        break;
                    case LeanTweenType.easeOutQuad: 
                        this.setEaseOutQuad();
                        break;
                    case LeanTweenType.easeInQuad: 
                        this.setEaseInQuad();
                        break;
                    case LeanTweenType.easeInOutQuad: 
                        this.setEaseInOutQuad();
                        break;
                    case LeanTweenType.easeInCubic: 
                        this.setEaseInCubic();
                        break;
                    case LeanTweenType.easeOutCubic: 
                        this.setEaseOutCubic();
                        break;
                    case LeanTweenType.easeInOutCubic: 
                        this.setEaseInOutCubic();
                        break;
                    case LeanTweenType.easeInQuart: 
                        this.setEaseInQuart();
                        break;
                    case LeanTweenType.easeOutQuart: 
                        this.setEaseOutQuart();
                        break;
                    case LeanTweenType.easeInOutQuart: 
                        this.setEaseInOutQuart();
                        break;
                    case LeanTweenType.easeInQuint: 
                        this.setEaseInQuint();
                        break;
                    case LeanTweenType.easeOutQuint: 
                        this.setEaseOutQuint();
                        break;
                    case LeanTweenType.easeInOutQuint: 
                        this.setEaseInOutQuint();
                        break;
                    case LeanTweenType.easeInSine: 
                        this.setEaseInSine();
                        break;
                    case LeanTweenType.easeOutSine: 
                        this.setEaseOutSine();
                        break;
                    case LeanTweenType.easeInOutSine: 
                        this.setEaseInOutSine();
                        break;
                    case LeanTweenType.easeInExpo: 
                        this.setEaseInExpo();
                        break;
                    case LeanTweenType.easeOutExpo: 
                        this.setEaseOutExpo();
                        break;
                    case LeanTweenType.easeInOutExpo: 
                        this.setEaseInOutExpo();
                        break;
                    case LeanTweenType.easeInCirc: 
                        this.setEaseInCirc();
                        break;
                    case LeanTweenType.easeOutCirc: 
                        this.setEaseOutCirc();
                        break;
                    case LeanTweenType.easeInOutCirc: 
                        this.setEaseInOutCirc();
                        break;
                    case LeanTweenType.easeInBounce: 
                        this.setEaseInBounce();
                        break;
                    case LeanTweenType.easeOutBounce: 
                        this.setEaseOutBounce();
                        break;
                    case LeanTweenType.easeInOutBounce: 
                        this.setEaseInOutBounce();
                        break;
                    case LeanTweenType.easeInBack: 
                        this.setEaseInBack();
                        break;
                    case LeanTweenType.easeOutBack: 
                        this.setEaseOutBack();
                        break;
                    case LeanTweenType.easeInOutBack: 
                        this.setEaseInOutBack();
                        break;
                    case LeanTweenType.easeInElastic: 
                        this.setEaseInElastic();
                        break;
                    case LeanTweenType.easeOutElastic: 
                        this.setEaseOutElastic();
                        break;
                    case LeanTweenType.easeInOutElastic: 
                        this.setEaseInOutElastic();
                        break;
                    case LeanTweenType.punch: 
                        this.setEasePunch();
                        break;
                    case LeanTweenType.easeShake: 
                        this.setEaseShake();
                        break;
                    case LeanTweenType.easeSpring: 
                        this.setEaseSpring();
                        break;
                    default: 
                        this.setEaseLinear();
                        break;
                }

                return this;
            },
            /*LTDescr.setEase end.*/

            /*LTDescr.setEase$1 start.*/
            setEase$1: function (easeCurve) {
                this._optional.animationCurve = easeCurve;
                this.easeMethod = Bridge.fn.cacheBind(this, this.tweenOnCurve);
                this.easeType = LeanTweenType.animationCurve;
                return this;
            },
            /*LTDescr.setEase$1 end.*/

            /*LTDescr.setEaseLinear start.*/
            setEaseLinear: function () {
                this.easeType = LeanTweenType.linear;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeLinear);
                return this;
            },
            /*LTDescr.setEaseLinear end.*/

            /*LTDescr.setEaseSpring start.*/
            setEaseSpring: function () {
                this.easeType = LeanTweenType.easeSpring;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeSpring);
                return this;
            },
            /*LTDescr.setEaseSpring end.*/

            /*LTDescr.setEaseInQuad start.*/
            setEaseInQuad: function () {
                this.easeType = LeanTweenType.easeInQuad;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInQuad);
                return this;
            },
            /*LTDescr.setEaseInQuad end.*/

            /*LTDescr.setEaseOutQuad start.*/
            setEaseOutQuad: function () {
                this.easeType = LeanTweenType.easeOutQuad;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutQuad);
                return this;
            },
            /*LTDescr.setEaseOutQuad end.*/

            /*LTDescr.setEaseInOutQuad start.*/
            setEaseInOutQuad: function () {
                this.easeType = LeanTweenType.easeInOutQuad;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutQuad);
                return this;
            },
            /*LTDescr.setEaseInOutQuad end.*/

            /*LTDescr.setEaseInCubic start.*/
            setEaseInCubic: function () {
                this.easeType = LeanTweenType.easeInCubic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInCubic);
                return this;
            },
            /*LTDescr.setEaseInCubic end.*/

            /*LTDescr.setEaseOutCubic start.*/
            setEaseOutCubic: function () {
                this.easeType = LeanTweenType.easeOutCubic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutCubic);
                return this;
            },
            /*LTDescr.setEaseOutCubic end.*/

            /*LTDescr.setEaseInOutCubic start.*/
            setEaseInOutCubic: function () {
                this.easeType = LeanTweenType.easeInOutCubic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutCubic);
                return this;
            },
            /*LTDescr.setEaseInOutCubic end.*/

            /*LTDescr.setEaseInQuart start.*/
            setEaseInQuart: function () {
                this.easeType = LeanTweenType.easeInQuart;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInQuart);
                return this;
            },
            /*LTDescr.setEaseInQuart end.*/

            /*LTDescr.setEaseOutQuart start.*/
            setEaseOutQuart: function () {
                this.easeType = LeanTweenType.easeOutQuart;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutQuart);
                return this;
            },
            /*LTDescr.setEaseOutQuart end.*/

            /*LTDescr.setEaseInOutQuart start.*/
            setEaseInOutQuart: function () {
                this.easeType = LeanTweenType.easeInOutQuart;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutQuart);
                return this;
            },
            /*LTDescr.setEaseInOutQuart end.*/

            /*LTDescr.setEaseInQuint start.*/
            setEaseInQuint: function () {
                this.easeType = LeanTweenType.easeInQuint;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInQuint);
                return this;
            },
            /*LTDescr.setEaseInQuint end.*/

            /*LTDescr.setEaseOutQuint start.*/
            setEaseOutQuint: function () {
                this.easeType = LeanTweenType.easeOutQuint;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutQuint);
                return this;
            },
            /*LTDescr.setEaseOutQuint end.*/

            /*LTDescr.setEaseInOutQuint start.*/
            setEaseInOutQuint: function () {
                this.easeType = LeanTweenType.easeInOutQuint;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutQuint);
                return this;
            },
            /*LTDescr.setEaseInOutQuint end.*/

            /*LTDescr.setEaseInSine start.*/
            setEaseInSine: function () {
                this.easeType = LeanTweenType.easeInSine;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInSine);
                return this;
            },
            /*LTDescr.setEaseInSine end.*/

            /*LTDescr.setEaseOutSine start.*/
            setEaseOutSine: function () {
                this.easeType = LeanTweenType.easeOutSine;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutSine);
                return this;
            },
            /*LTDescr.setEaseOutSine end.*/

            /*LTDescr.setEaseInOutSine start.*/
            setEaseInOutSine: function () {
                this.easeType = LeanTweenType.easeInOutSine;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutSine);
                return this;
            },
            /*LTDescr.setEaseInOutSine end.*/

            /*LTDescr.setEaseInExpo start.*/
            setEaseInExpo: function () {
                this.easeType = LeanTweenType.easeInExpo;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInExpo);
                return this;
            },
            /*LTDescr.setEaseInExpo end.*/

            /*LTDescr.setEaseOutExpo start.*/
            setEaseOutExpo: function () {
                this.easeType = LeanTweenType.easeOutExpo;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutExpo);
                return this;
            },
            /*LTDescr.setEaseOutExpo end.*/

            /*LTDescr.setEaseInOutExpo start.*/
            setEaseInOutExpo: function () {
                this.easeType = LeanTweenType.easeInOutExpo;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutExpo);
                return this;
            },
            /*LTDescr.setEaseInOutExpo end.*/

            /*LTDescr.setEaseInCirc start.*/
            setEaseInCirc: function () {
                this.easeType = LeanTweenType.easeInCirc;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInCirc);
                return this;
            },
            /*LTDescr.setEaseInCirc end.*/

            /*LTDescr.setEaseOutCirc start.*/
            setEaseOutCirc: function () {
                this.easeType = LeanTweenType.easeOutCirc;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutCirc);
                return this;
            },
            /*LTDescr.setEaseOutCirc end.*/

            /*LTDescr.setEaseInOutCirc start.*/
            setEaseInOutCirc: function () {
                this.easeType = LeanTweenType.easeInOutCirc;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutCirc);
                return this;
            },
            /*LTDescr.setEaseInOutCirc end.*/

            /*LTDescr.setEaseInBounce start.*/
            setEaseInBounce: function () {
                this.easeType = LeanTweenType.easeInBounce;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInBounce);
                return this;
            },
            /*LTDescr.setEaseInBounce end.*/

            /*LTDescr.setEaseOutBounce start.*/
            setEaseOutBounce: function () {
                this.easeType = LeanTweenType.easeOutBounce;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutBounce);
                return this;
            },
            /*LTDescr.setEaseOutBounce end.*/

            /*LTDescr.setEaseInOutBounce start.*/
            setEaseInOutBounce: function () {
                this.easeType = LeanTweenType.easeInOutBounce;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutBounce);
                return this;
            },
            /*LTDescr.setEaseInOutBounce end.*/

            /*LTDescr.setEaseInBack start.*/
            setEaseInBack: function () {
                this.easeType = LeanTweenType.easeInBack;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInBack);
                return this;
            },
            /*LTDescr.setEaseInBack end.*/

            /*LTDescr.setEaseOutBack start.*/
            setEaseOutBack: function () {
                this.easeType = LeanTweenType.easeOutBack;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutBack);
                return this;
            },
            /*LTDescr.setEaseOutBack end.*/

            /*LTDescr.setEaseInOutBack start.*/
            setEaseInOutBack: function () {
                this.easeType = LeanTweenType.easeInOutBack;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutBack);
                return this;
            },
            /*LTDescr.setEaseInOutBack end.*/

            /*LTDescr.setEaseInElastic start.*/
            setEaseInElastic: function () {
                this.easeType = LeanTweenType.easeInElastic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInElastic);
                return this;
            },
            /*LTDescr.setEaseInElastic end.*/

            /*LTDescr.setEaseOutElastic start.*/
            setEaseOutElastic: function () {
                this.easeType = LeanTweenType.easeOutElastic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeOutElastic);
                return this;
            },
            /*LTDescr.setEaseOutElastic end.*/

            /*LTDescr.setEaseInOutElastic start.*/
            setEaseInOutElastic: function () {
                this.easeType = LeanTweenType.easeInOutElastic;
                this.easeMethod = Bridge.fn.cacheBind(this, this.easeInOutElastic);
                return this;
            },
            /*LTDescr.setEaseInOutElastic end.*/

            /*LTDescr.setEasePunch start.*/
            setEasePunch: function () {
                this._optional.animationCurve = LeanTween.punch;
                this.toInternal.x = this.from.x + this.to.x;
                this.easeMethod = Bridge.fn.cacheBind(this, this.tweenOnCurve);
                return this;
            },
            /*LTDescr.setEasePunch end.*/

            /*LTDescr.setEaseShake start.*/
            setEaseShake: function () {
                this._optional.animationCurve = LeanTween.shake;
                this.toInternal.x = this.from.x + this.to.x;
                this.easeMethod = Bridge.fn.cacheBind(this, this.tweenOnCurve);
                return this;
            },
            /*LTDescr.setEaseShake end.*/

            /*LTDescr.tweenOnCurve start.*/
            tweenOnCurve: function () {
                return new pc.Vec3( this.from.x + (this.diff.x) * this._optional.animationCurve.value(this.ratioPassed), this.from.y + (this.diff.y) * this._optional.animationCurve.value(this.ratioPassed), this.from.z + (this.diff.z) * this._optional.animationCurve.value(this.ratioPassed) );
            },
            /*LTDescr.tweenOnCurve end.*/

            /*LTDescr.easeInOutQuad start.*/
            easeInOutQuad: function () {
                LTDescr.val = this.ratioPassed * 2.0;

                if (LTDescr.val < 1.0) {
                    LTDescr.val = LTDescr.val * LTDescr.val;
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val = (1.0 - LTDescr.val) * (LTDescr.val - 3.0) + 1.0;
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutQuad end.*/

            /*LTDescr.easeInQuad start.*/
            easeInQuad: function () {
                LTDescr.val = this.ratioPassed * this.ratioPassed;
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInQuad end.*/

            /*LTDescr.easeOutQuad start.*/
            easeOutQuad: function () {
                LTDescr.val = this.ratioPassed;
                LTDescr.val = -LTDescr.val * (LTDescr.val - 2.0);
                return (this.diff.$clone().scale( LTDescr.val ).add( this.from ));
            },
            /*LTDescr.easeOutQuad end.*/

            /*LTDescr.easeLinear start.*/
            easeLinear: function () {
                LTDescr.val = this.ratioPassed;
                return new pc.Vec3( this.from.x + this.diff.x * LTDescr.val, this.from.y + this.diff.y * LTDescr.val, this.from.z + this.diff.z * LTDescr.val );
            },
            /*LTDescr.easeLinear end.*/

            /*LTDescr.easeSpring start.*/
            easeSpring: function () {
                LTDescr.val = Math.max(0, Math.min(1, this.ratioPassed));
                LTDescr.val = (Math.sin(LTDescr.val * UnityEngine.Mathf.PI * (0.2 + 2.5 * LTDescr.val * LTDescr.val * LTDescr.val)) * Math.pow(1.0 - LTDescr.val, 2.2) + LTDescr.val) * (1.0 + (1.2 * (1.0 - LTDescr.val)));
                return this.from.$clone().add( this.diff.$clone().scale( LTDescr.val ) );
            },
            /*LTDescr.easeSpring end.*/

            /*LTDescr.easeInCubic start.*/
            easeInCubic: function () {
                LTDescr.val = this.ratioPassed * this.ratioPassed * this.ratioPassed;
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInCubic end.*/

            /*LTDescr.easeOutCubic start.*/
            easeOutCubic: function () {
                LTDescr.val = this.ratioPassed - 1.0;
                LTDescr.val = (LTDescr.val * LTDescr.val * LTDescr.val + 1);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutCubic end.*/

            /*LTDescr.easeInOutCubic start.*/
            easeInOutCubic: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val;
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val -= 2.0;
                LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val + 2.0;
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutCubic end.*/

            /*LTDescr.easeInQuart start.*/
            easeInQuart: function () {
                LTDescr.val = this.ratioPassed * this.ratioPassed * this.ratioPassed * this.ratioPassed;
                return this.diff.$clone().scale( LTDescr.val ).add( this.from );
            },
            /*LTDescr.easeInQuart end.*/

            /*LTDescr.easeOutQuart start.*/
            easeOutQuart: function () {
                LTDescr.val = this.ratioPassed - 1.0;
                LTDescr.val = -(LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val - 1);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutQuart end.*/

            /*LTDescr.easeInOutQuart start.*/
            easeInOutQuart: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val;
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val -= 2.0;
                //		val = (val * val * val * val - 2f);
                return this.diffDiv2.$clone().scale( -1 ).scale( (LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val - 2.0) ).add( this.from );
            },
            /*LTDescr.easeInOutQuart end.*/

            /*LTDescr.easeInQuint start.*/
            easeInQuint: function () {
                LTDescr.val = this.ratioPassed;
                LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val;
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInQuint end.*/

            /*LTDescr.easeOutQuint start.*/
            easeOutQuint: function () {
                LTDescr.val = this.ratioPassed - 1.0;
                LTDescr.val = (LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val + 1.0);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutQuint end.*/

            /*LTDescr.easeInOutQuint start.*/
            easeInOutQuint: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    LTDescr.val = LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val;
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val -= 2.0;
                LTDescr.val = (LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val * LTDescr.val + 2.0);
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutQuint end.*/

            /*LTDescr.easeInSine start.*/
            easeInSine: function () {
                LTDescr.val = -Math.cos(this.ratioPassed * LeanTween.PI_DIV2);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.diff.x + this.from.x, this.diff.y * LTDescr.val + this.diff.y + this.from.y, this.diff.z * LTDescr.val + this.diff.z + this.from.z );
            },
            /*LTDescr.easeInSine end.*/

            /*LTDescr.easeOutSine start.*/
            easeOutSine: function () {
                LTDescr.val = Math.sin(this.ratioPassed * LeanTween.PI_DIV2);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutSine end.*/

            /*LTDescr.easeInOutSine start.*/
            easeInOutSine: function () {
                LTDescr.val = -(Math.cos(UnityEngine.Mathf.PI * this.ratioPassed) - 1.0);
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutSine end.*/

            /*LTDescr.easeInExpo start.*/
            easeInExpo: function () {
                LTDescr.val = Math.pow(2.0, 10.0 * (this.ratioPassed - 1.0));
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInExpo end.*/

            /*LTDescr.easeOutExpo start.*/
            easeOutExpo: function () {
                LTDescr.val = (-Math.pow(2.0, -10.0 * this.ratioPassed) + 1.0);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutExpo end.*/

            /*LTDescr.easeInOutExpo start.*/
            easeInOutExpo: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1) {
                    return this.diffDiv2.$clone().scale( Math.pow(2, 10 * (LTDescr.val - 1)) ).add( this.from );
                }
                LTDescr.val--;
                return this.diffDiv2.$clone().scale( (-Math.pow(2, -10 * LTDescr.val) + 2) ).add( this.from );
            },
            /*LTDescr.easeInOutExpo end.*/

            /*LTDescr.easeInCirc start.*/
            easeInCirc: function () {
                LTDescr.val = -(Math.sqrt(1.0 - this.ratioPassed * this.ratioPassed) - 1.0);
                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInCirc end.*/

            /*LTDescr.easeOutCirc start.*/
            easeOutCirc: function () {
                LTDescr.val = this.ratioPassed - 1.0;
                LTDescr.val = Math.sqrt(1.0 - LTDescr.val * LTDescr.val);

                return new pc.Vec3( this.diff.x * LTDescr.val + this.from.x, this.diff.y * LTDescr.val + this.from.y, this.diff.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeOutCirc end.*/

            /*LTDescr.easeInOutCirc start.*/
            easeInOutCirc: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    LTDescr.val = -(Math.sqrt(1.0 - LTDescr.val * LTDescr.val) - 1.0);
                    return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
                }
                LTDescr.val -= 2.0;
                LTDescr.val = (Math.sqrt(1.0 - LTDescr.val * LTDescr.val) + 1.0);
                return new pc.Vec3( this.diffDiv2.x * LTDescr.val + this.from.x, this.diffDiv2.y * LTDescr.val + this.from.y, this.diffDiv2.z * LTDescr.val + this.from.z );
            },
            /*LTDescr.easeInOutCirc end.*/

            /*LTDescr.easeInBounce start.*/
            easeInBounce: function () {
                LTDescr.val = this.ratioPassed;
                LTDescr.val = 1.0 - LTDescr.val;
                return new pc.Vec3( this.diff.x - LeanTween.easeOutBounce(0, this.diff.x, LTDescr.val) + this.from.x, this.diff.y - LeanTween.easeOutBounce(0, this.diff.y, LTDescr.val) + this.from.y, this.diff.z - LeanTween.easeOutBounce(0, this.diff.z, LTDescr.val) + this.from.z );
            },
            /*LTDescr.easeInBounce end.*/

            /*LTDescr.easeOutBounce start.*/
            easeOutBounce: function () {
                LTDescr.val = this.ratioPassed;
                var valM, valN; // bounce values
                if (LTDescr.val < ((valM = 1 - 1.75 * this.overshoot / 2.75))) {
                    LTDescr.val = 1 / valM / valM * LTDescr.val * LTDescr.val;
                } else if (LTDescr.val < ((valN = 1 - 0.75 * this.overshoot / 2.75))) {
                    LTDescr.val -= (valM + valN) / 2;
                    // first bounce, height: 1/4
                    LTDescr.val = 7.5625 * LTDescr.val * LTDescr.val + 1 - 0.25 * this.overshoot * this.overshoot;
                } else if (LTDescr.val < ((valM = 1 - 0.25 * this.overshoot / 2.75))) {
                    LTDescr.val -= (valM + valN) / 2;
                    // second bounce, height: 1/16
                    LTDescr.val = 7.5625 * LTDescr.val * LTDescr.val + 1 - 0.0625 * this.overshoot * this.overshoot;
                } else { // valN = 1
                    LTDescr.val -= (valM + 1) / 2;
                    // third bounce, height: 1/64
                    LTDescr.val = 7.5625 * LTDescr.val * LTDescr.val + 1 - 0.015625 * this.overshoot * this.overshoot;
                }
                return this.diff.$clone().scale( LTDescr.val ).add( this.from );
            },
            /*LTDescr.easeOutBounce end.*/

            /*LTDescr.easeInOutBounce start.*/
            easeInOutBounce: function () {
                LTDescr.val = this.ratioPassed * 2.0;
                if (LTDescr.val < 1.0) {
                    return new pc.Vec3( LeanTween.easeInBounce(0, this.diff.x, LTDescr.val) * 0.5 + this.from.x, LeanTween.easeInBounce(0, this.diff.y, LTDescr.val) * 0.5 + this.from.y, LeanTween.easeInBounce(0, this.diff.z, LTDescr.val) * 0.5 + this.from.z );
                } else {
                    LTDescr.val = LTDescr.val - 1.0;
                    return new pc.Vec3( LeanTween.easeOutBounce(0, this.diff.x, LTDescr.val) * 0.5 + this.diffDiv2.x + this.from.x, LeanTween.easeOutBounce(0, this.diff.y, LTDescr.val) * 0.5 + this.diffDiv2.y + this.from.y, LeanTween.easeOutBounce(0, this.diff.z, LTDescr.val) * 0.5 + this.diffDiv2.z + this.from.z );
                }
            },
            /*LTDescr.easeInOutBounce end.*/

            /*LTDescr.easeInBack start.*/
            easeInBack: function () {
                LTDescr.val = this.ratioPassed;
                LTDescr.val /= 1;
                var s = 1.70158 * this.overshoot;
                return this.diff.$clone().scale( (LTDescr.val) ).scale( LTDescr.val ).scale( ((s + 1) * LTDescr.val - s) ).add( this.from );
            },
            /*LTDescr.easeInBack end.*/

            /*LTDescr.easeOutBack start.*/
            easeOutBack: function () {
                var s = 1.70158 * this.overshoot;
                LTDescr.val = (this.ratioPassed / 1) - 1;
                LTDescr.val = ((LTDescr.val) * LTDescr.val * ((s + 1) * LTDescr.val + s) + 1);
                return this.diff.$clone().scale( LTDescr.val ).add( this.from );
            },
            /*LTDescr.easeOutBack end.*/

            /*LTDescr.easeInOutBack start.*/
            easeInOutBack: function () {
                var s = 1.70158 * this.overshoot;
                LTDescr.val = this.ratioPassed * 2.0;
                if ((LTDescr.val) < 1) {
                    s *= (1.525) * this.overshoot;
                    return this.diffDiv2.$clone().scale( (LTDescr.val * LTDescr.val * (((s) + 1) * LTDescr.val - s)) ).add( this.from );
                }
                LTDescr.val -= 2;
                s *= (1.525) * this.overshoot;
                LTDescr.val = ((LTDescr.val) * LTDescr.val * (((s) + 1) * LTDescr.val + s) + 2);
                return this.diffDiv2.$clone().scale( LTDescr.val ).add( this.from );
            },
            /*LTDescr.easeInOutBack end.*/

            /*LTDescr.easeInElastic start.*/
            easeInElastic: function () {
                return new pc.Vec3( LeanTween.easeInElastic(this.from.x, this.to.x, this.ratioPassed, this.overshoot, this.period), LeanTween.easeInElastic(this.from.y, this.to.y, this.ratioPassed, this.overshoot, this.period), LeanTween.easeInElastic(this.from.z, this.to.z, this.ratioPassed, this.overshoot, this.period) );
            },
            /*LTDescr.easeInElastic end.*/

            /*LTDescr.easeOutElastic start.*/
            easeOutElastic: function () {
                return new pc.Vec3( LeanTween.easeOutElastic(this.from.x, this.to.x, this.ratioPassed, this.overshoot, this.period), LeanTween.easeOutElastic(this.from.y, this.to.y, this.ratioPassed, this.overshoot, this.period), LeanTween.easeOutElastic(this.from.z, this.to.z, this.ratioPassed, this.overshoot, this.period) );
            },
            /*LTDescr.easeOutElastic end.*/

            /*LTDescr.easeInOutElastic start.*/
            easeInOutElastic: function () {
                return new pc.Vec3( LeanTween.easeInOutElastic(this.from.x, this.to.x, this.ratioPassed, this.overshoot, this.period), LeanTween.easeInOutElastic(this.from.y, this.to.y, this.ratioPassed, this.overshoot, this.period), LeanTween.easeInOutElastic(this.from.z, this.to.z, this.ratioPassed, this.overshoot, this.period) );
            },
            /*LTDescr.easeInOutElastic end.*/

            /*LTDescr.setOvershoot start.*/
            setOvershoot: function (overshoot) {
                this.overshoot = overshoot;
                return this;
            },
            /*LTDescr.setOvershoot end.*/

            /*LTDescr.setPeriod start.*/
            setPeriod: function (period) {
                this.period = period;
                return this;
            },
            /*LTDescr.setPeriod end.*/

            /*LTDescr.setTo$1 start.*/
            setTo$1: function (to) {
                if (this.hasInitiliazed) {
                    this.to = to.$clone();
                    this.diff = to.$clone().sub( this.from );
                } else {
                    this.to = to.$clone();
                }

                return this;
            },
            /*LTDescr.setTo$1 end.*/

            /*LTDescr.setTo start.*/
            setTo: function (to) {
                this._optional.toTrans = to;
                return this;
            },
            /*LTDescr.setTo end.*/

            /*LTDescr.setFrom$1 start.*/
            setFrom$1: function (from) {
                if (UnityEngine.Object.op_Implicit(this.trans)) {
                    this.init();
                }
                this.from = from.$clone();
                // this.hasInitiliazed = true; // this is set, so that the "from" value isn't overwritten later on when the tween starts
                this.diff = this.to.$clone().sub( this.from );
                this.diffDiv2 = this.diff.$clone().scale( 0.5 );
                return this;
            },
            /*LTDescr.setFrom$1 end.*/

            /*LTDescr.setFrom start.*/
            setFrom: function (from) {
                return this.setFrom$1(new pc.Vec3( from, 0.0, 0.0 ));
            },
            /*LTDescr.setFrom end.*/

            /*LTDescr.setDiff start.*/
            setDiff: function (diff) {
                this.diff = diff.$clone();
                return this;
            },
            /*LTDescr.setDiff end.*/

            /*LTDescr.setHasInitialized start.*/
            setHasInitialized: function (has) {
                this.hasInitiliazed = has;
                return this;
            },
            /*LTDescr.setHasInitialized end.*/

            /*LTDescr.setId start.*/
            setId: function (id, global_counter) {
                this._id = id;
                this.counter = global_counter;
                // Debug.Log("Global counter:"+global_counter);
                return this;
            },
            /*LTDescr.setId end.*/

            /*LTDescr.setPassed start.*/
            setPassed: function (passed) {
                this.passed = passed;
                return this;
            },
            /*LTDescr.setPassed end.*/

            /*LTDescr.setTime start.*/
            setTime: function (time) {
                var passedTimeRatio = this.passed / this.time;
                this.passed = time * passedTimeRatio;
                this.time = time;
                return this;
            },
            /*LTDescr.setTime end.*/

            /*LTDescr.setSpeed start.*/
            setSpeed: function (speed) {
                this.speed = speed;
                if (this.hasInitiliazed) {
                    this.initSpeed();
                }
                return this;
            },
            /*LTDescr.setSpeed end.*/

            /*LTDescr.setRepeat start.*/
            setRepeat: function (repeat) {
                this.loopCount = repeat;
                if ((repeat > 1 && this.loopType === LeanTweenType.once) || (repeat < 0 && this.loopType === LeanTweenType.once)) {
                    this.loopType = LeanTweenType.clamp;
                }
                if (this.type === TweenAction.CALLBACK || this.type === TweenAction.CALLBACK_COLOR) {
                    this.setOnCompleteOnRepeat(true);
                }
                return this;
            },
            /*LTDescr.setRepeat end.*/

            /*LTDescr.setLoopType start.*/
            setLoopType: function (loopType) {
                this.loopType = loopType;
                return this;
            },
            /*LTDescr.setLoopType end.*/

            /*LTDescr.setUseEstimatedTime start.*/
            setUseEstimatedTime: function (useEstimatedTime) {
                this.useEstimatedTime = useEstimatedTime;
                this.usesNormalDt = false;
                return this;
            },
            /*LTDescr.setUseEstimatedTime end.*/

            /*LTDescr.setIgnoreTimeScale start.*/
            setIgnoreTimeScale: function (useUnScaledTime) {
                this.useEstimatedTime = useUnScaledTime;
                this.usesNormalDt = false;
                return this;
            },
            /*LTDescr.setIgnoreTimeScale end.*/

            /*LTDescr.setUseFrames start.*/
            setUseFrames: function (useFrames) {
                this.useFrames = useFrames;
                this.usesNormalDt = false;
                return this;
            },
            /*LTDescr.setUseFrames end.*/

            /*LTDescr.setUseManualTime start.*/
            setUseManualTime: function (useManualTime) {
                this.useManualTime = useManualTime;
                this.usesNormalDt = false;
                return this;
            },
            /*LTDescr.setUseManualTime end.*/

            /*LTDescr.setLoopCount start.*/
            setLoopCount: function (loopCount) {
                this.loopType = LeanTweenType.clamp;
                this.loopCount = loopCount;
                return this;
            },
            /*LTDescr.setLoopCount end.*/

            /*LTDescr.setLoopOnce start.*/
            setLoopOnce: function () {
                this.loopType = LeanTweenType.once;
                return this;
            },
            /*LTDescr.setLoopOnce end.*/

            /*LTDescr.setLoopClamp start.*/
            setLoopClamp: function () {
                this.loopType = LeanTweenType.clamp;
                if (this.loopCount === 0) {
                    this.loopCount = -1;
                }
                return this;
            },
            /*LTDescr.setLoopClamp end.*/

            /*LTDescr.setLoopClamp$1 start.*/
            setLoopClamp$1: function (loops) {
                this.loopCount = loops;
                return this;
            },
            /*LTDescr.setLoopClamp$1 end.*/

            /*LTDescr.setLoopPingPong start.*/
            setLoopPingPong: function () {
                this.loopType = LeanTweenType.pingPong;
                if (this.loopCount === 0) {
                    this.loopCount = -1;
                }
                return this;
            },
            /*LTDescr.setLoopPingPong end.*/

            /*LTDescr.setLoopPingPong$1 start.*/
            setLoopPingPong$1: function (loops) {
                this.loopType = LeanTweenType.pingPong;
                this.loopCount = loops === -1 ? loops : Bridge.Int.mul(loops, 2);
                return this;
            },
            /*LTDescr.setLoopPingPong$1 end.*/

            /*LTDescr.setOnComplete start.*/
            setOnComplete: function (onComplete) {
                this._optional.onComplete = onComplete;
                this.hasExtraOnCompletes = true;
                return this;
            },
            /*LTDescr.setOnComplete end.*/

            /*LTDescr.setOnComplete$1 start.*/
            setOnComplete$1: function (onComplete) {
                this._optional.onCompleteObject = onComplete;
                this.hasExtraOnCompletes = true;
                return this;
            },
            /*LTDescr.setOnComplete$1 end.*/

            /*LTDescr.setOnComplete$2 start.*/
            setOnComplete$2: function (onComplete, onCompleteParam) {
                this._optional.onCompleteObject = onComplete;
                this.hasExtraOnCompletes = true;
                if (onCompleteParam != null) {
                    this._optional.onCompleteParam = onCompleteParam;
                }
                return this;
            },
            /*LTDescr.setOnComplete$2 end.*/

            /*LTDescr.setOnCompleteParam start.*/
            setOnCompleteParam: function (onCompleteParam) {
                this._optional.onCompleteParam = onCompleteParam;
                this.hasExtraOnCompletes = true;
                return this;
            },
            /*LTDescr.setOnCompleteParam end.*/

            /*LTDescr.setOnUpdate start.*/
            setOnUpdate: function (onUpdate) {
                this._optional.onUpdateFloat = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdate end.*/

            /*LTDescr.setOnUpdate$1 start.*/
            setOnUpdate$1: function (onUpdate) {
                this._optional.onUpdateColor = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdate$1 end.*/

            /*LTDescr.setOnUpdate$5 start.*/
            setOnUpdate$5: function (onUpdate) {
                this._optional.onUpdateColorObject = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdate$5 end.*/

            /*LTDescr.setOnUpdate$4 start.*/
            setOnUpdate$4: function (onUpdate, onUpdateParam) {
                if (onUpdateParam === void 0) { onUpdateParam = null; }
                this._optional.onUpdateFloatObject = onUpdate;
                this.hasUpdateCallback = true;
                if (onUpdateParam != null) {
                    this._optional.onUpdateParam = onUpdateParam;
                }
                return this;
            },
            /*LTDescr.setOnUpdate$4 end.*/

            /*LTDescr.setOnUpdate$6 start.*/
            setOnUpdate$6: function (onUpdate, onUpdateParam) {
                if (onUpdateParam === void 0) { onUpdateParam = null; }
                this._optional.onUpdateVector3Object = onUpdate;
                this.hasUpdateCallback = true;
                if (onUpdateParam != null) {
                    this._optional.onUpdateParam = onUpdateParam;
                }
                return this;
            },
            /*LTDescr.setOnUpdate$6 end.*/

            /*LTDescr.setOnUpdate$2 start.*/
            setOnUpdate$2: function (onUpdate, onUpdateParam) {
                if (onUpdateParam === void 0) { onUpdateParam = null; }
                this._optional.onUpdateVector2 = onUpdate;
                this.hasUpdateCallback = true;
                if (onUpdateParam != null) {
                    this._optional.onUpdateParam = onUpdateParam;
                }
                return this;
            },
            /*LTDescr.setOnUpdate$2 end.*/

            /*LTDescr.setOnUpdate$3 start.*/
            setOnUpdate$3: function (onUpdate, onUpdateParam) {
                if (onUpdateParam === void 0) { onUpdateParam = null; }
                this._optional.onUpdateVector3 = onUpdate;
                this.hasUpdateCallback = true;
                if (onUpdateParam != null) {
                    this._optional.onUpdateParam = onUpdateParam;
                }
                return this;
            },
            /*LTDescr.setOnUpdate$3 end.*/

            /*LTDescr.setOnUpdateRatio start.*/
            setOnUpdateRatio: function (onUpdate) {
                this._optional.onUpdateFloatRatio = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateRatio end.*/

            /*LTDescr.setOnUpdateObject start.*/
            setOnUpdateObject: function (onUpdate) {
                this._optional.onUpdateFloatObject = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateObject end.*/

            /*LTDescr.setOnUpdateVector2 start.*/
            setOnUpdateVector2: function (onUpdate) {
                this._optional.onUpdateVector2 = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateVector2 end.*/

            /*LTDescr.setOnUpdateVector3 start.*/
            setOnUpdateVector3: function (onUpdate) {
                this._optional.onUpdateVector3 = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateVector3 end.*/

            /*LTDescr.setOnUpdateColor start.*/
            setOnUpdateColor: function (onUpdate) {
                this._optional.onUpdateColor = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateColor end.*/

            /*LTDescr.setOnUpdateColor$1 start.*/
            setOnUpdateColor$1: function (onUpdate) {
                this._optional.onUpdateColorObject = onUpdate;
                this.hasUpdateCallback = true;
                return this;
            },
            /*LTDescr.setOnUpdateColor$1 end.*/

            /*LTDescr.setOnUpdateParam start.*/
            setOnUpdateParam: function (onUpdateParam) {
                this._optional.onUpdateParam = onUpdateParam;
                return this;
            },
            /*LTDescr.setOnUpdateParam end.*/

            /*LTDescr.setOrientToPath start.*/
            setOrientToPath: function (doesOrient) {
                if (this.type === TweenAction.MOVE_CURVED || this.type === TweenAction.MOVE_CURVED_LOCAL) {
                    if (this._optional.path == null) {
                        this._optional.path = new LTBezierPath.ctor();
                    }
                    this._optional.path.orientToPath = doesOrient;
                } else {
                    this._optional.spline.orientToPath = doesOrient;
                }
                return this;
            },
            /*LTDescr.setOrientToPath end.*/

            /*LTDescr.setOrientToPath2d start.*/
            setOrientToPath2d: function (doesOrient2d) {
                this.setOrientToPath(doesOrient2d);
                if (this.type === TweenAction.MOVE_CURVED || this.type === TweenAction.MOVE_CURVED_LOCAL) {
                    this._optional.path.orientToPath2d = doesOrient2d;
                } else {
                    this._optional.spline.orientToPath2d = doesOrient2d;
                }
                return this;
            },
            /*LTDescr.setOrientToPath2d end.*/

            /*LTDescr.setRect start.*/
            setRect: function (rect) {
                this._optional.ltRect = rect;
                return this;
            },
            /*LTDescr.setRect end.*/

            /*LTDescr.setRect$1 start.*/
            setRect$1: function (rect) {
                this._optional.ltRect = new LTRect.$ctor4(rect.$clone());
                return this;
            },
            /*LTDescr.setRect$1 end.*/

            /*LTDescr.setRect$2 start.*/
            setRect$2: function (rect) {
                this.rectTransform = rect;
                return this;
            },
            /*LTDescr.setRect$2 end.*/

            /*LTDescr.setPath start.*/
            setPath: function (path) {
                this._optional.path = path;
                return this;
            },
            /*LTDescr.setPath end.*/

            /*LTDescr.setPoint start.*/
            setPoint: function (point) {
                this._optional.point = point.$clone();
                return this;
            },
            /*LTDescr.setPoint end.*/

            /*LTDescr.setDestroyOnComplete start.*/
            setDestroyOnComplete: function (doesDestroy) {
                this.destroyOnComplete = doesDestroy;
                return this;
            },
            /*LTDescr.setDestroyOnComplete end.*/

            /*LTDescr.setAudio start.*/
            setAudio: function (audio) {
                this._optional.onCompleteParam = audio;
                return this;
            },
            /*LTDescr.setAudio end.*/

            /*LTDescr.setOnCompleteOnRepeat start.*/
            setOnCompleteOnRepeat: function (isOn) {
                this.onCompleteOnRepeat = isOn;
                return this;
            },
            /*LTDescr.setOnCompleteOnRepeat end.*/

            /*LTDescr.setOnCompleteOnStart start.*/
            setOnCompleteOnStart: function (isOn) {
                this.onCompleteOnStart = isOn;
                return this;
            },
            /*LTDescr.setOnCompleteOnStart end.*/

            /*LTDescr.setSprites start.*/
            setSprites: function (sprites) {
                this.sprites = sprites;
                return this;
            },
            /*LTDescr.setSprites end.*/

            /*LTDescr.setFrameRate start.*/
            setFrameRate: function (frameRate) {
                this.time = this.sprites.length / frameRate;
                return this;
            },
            /*LTDescr.setFrameRate end.*/

            /*LTDescr.setOnStart start.*/
            setOnStart: function (onStart) {
                this._optional.onStart = onStart;
                return this;
            },
            /*LTDescr.setOnStart end.*/

            /*LTDescr.setDirection start.*/
            setDirection: function (direction) {
                if (this.direction !== -1.0 && this.direction !== 1.0) {
                    console.warn("You have passed an incorrect direction of '" + System.Single.format(direction) + "', direction must be -1f or 1f");
                    return this;
                }

                if (this.direction !== direction) {
                    // Debug.Log("reverse path:"+this.path+" spline:"+this._optional.spline+" hasInitiliazed:"+this.hasInitiliazed);
                    if (this.hasInitiliazed) {
                        this.direction = direction;
                    } else {
                        if (this._optional.path != null) {
                            this._optional.path = new LTBezierPath.$ctor1(LTUtility.reverse(this._optional.path.pts));
                        } else if (this._optional.spline != null) {
                            this._optional.spline = new LTSpline.ctor(LTUtility.reverse(this._optional.spline.pts));
                        }
                        // this.passed = this.time - this.passed;
                    }
                }

                return this;
            },
            /*LTDescr.setDirection end.*/

            /*LTDescr.setRecursive start.*/
            setRecursive: function (useRecursion) {
                this.useRecursion = useRecursion;

                return this;
            },
            /*LTDescr.setRecursive end.*/


        },
        overloads: {
            "ToString()": "toString",
            "setScale(float)": "setScale$1",
            "setEase(AnimationCurve)": "setEase$1",
            "setTo(Vector3)": "setTo$1",
            "setFrom(Vector3)": "setFrom$1",
            "setLoopClamp(int)": "setLoopClamp$1",
            "setLoopPingPong(int)": "setLoopPingPong$1",
            "setOnComplete(Action<object>)": "setOnComplete$1",
            "setOnComplete(Action<object>, object)": "setOnComplete$2",
            "setOnUpdate(Action<Color>)": "setOnUpdate$1",
            "setOnUpdate(Action<Color, object>)": "setOnUpdate$5",
            "setOnUpdate(Action<float, object>, object)": "setOnUpdate$4",
            "setOnUpdate(Action<Vector3, object>, object)": "setOnUpdate$6",
            "setOnUpdate(Action<Vector2>, object)": "setOnUpdate$2",
            "setOnUpdate(Action<Vector3>, object)": "setOnUpdate$3",
            "setOnUpdateColor(Action<Color, object>)": "setOnUpdateColor$1",
            "setRect(Rect)": "setRect$1",
            "setRect(RectTransform)": "setRect$2"
        }
    });
    /*LTDescr end.*/

    /*LTDescrOptional start.*/
    Bridge.define("LTDescrOptional", {
        fields: {
            toTrans: null,
            point: null,
            axis: null,
            lastVal: 0,
            origRotation: null,
            path: null,
            spline: null,
            animationCurve: null,
            initFrameCount: 0,
            color: null,
            ltRect: null,
            onUpdateFloat: null,
            onUpdateFloatRatio: null,
            onUpdateFloatObject: null,
            onUpdateVector2: null,
            onUpdateVector3: null,
            onUpdateVector3Object: null,
            onUpdateColor: null,
            onUpdateColorObject: null,
            onComplete: null,
            onCompleteObject: null,
            onCompleteParam: null,
            onUpdateParam: null,
            onStart: null
        },
        ctors: {
            init: function () {
                this.point = new UnityEngine.Vector3();
                this.axis = new UnityEngine.Vector3();
                this.origRotation = new UnityEngine.Quaternion();
                this.color = new UnityEngine.Color();
            }
        },
        methods: {
            /*LTDescrOptional.reset start.*/
            reset: function () {
                this.animationCurve = null;

                this.onUpdateFloat = null;
                this.onUpdateFloatRatio = null;
                this.onUpdateVector2 = null;
                this.onUpdateVector3 = null;
                this.onUpdateFloatObject = null;
                this.onUpdateVector3Object = null;
                this.onUpdateColor = null;
                this.onComplete = null;
                this.onCompleteObject = null;
                this.onCompleteParam = null;
                this.onStart = null;

                this.point = pc.Vec3.ZERO.clone();
                this.initFrameCount = 0;
            },
            /*LTDescrOptional.reset end.*/

            /*LTDescrOptional.callOnUpdate start.*/
            callOnUpdate: function (val, ratioPassed) {
                if (!Bridge.staticEquals(this.onUpdateFloat, null)) {
                    this.onUpdateFloat(val);
                }

                if (!Bridge.staticEquals(this.onUpdateFloatRatio, null)) {
                    this.onUpdateFloatRatio(val, ratioPassed);
                } else if (!Bridge.staticEquals(this.onUpdateFloatObject, null)) {
                    this.onUpdateFloatObject(val, this.onUpdateParam);
                } else if (!Bridge.staticEquals(this.onUpdateVector3Object, null)) {
                    this.onUpdateVector3Object(LTDescr.newVect.$clone(), this.onUpdateParam);
                } else if (!Bridge.staticEquals(this.onUpdateVector3, null)) {
                    this.onUpdateVector3(LTDescr.newVect.$clone());
                } else if (!Bridge.staticEquals(this.onUpdateVector2, null)) {
                    this.onUpdateVector2(new pc.Vec2( LTDescr.newVect.x, LTDescr.newVect.y ));
                }
            },
            /*LTDescrOptional.callOnUpdate end.*/


        }
    });
    /*LTDescrOptional end.*/

    /*LTEvent start.*/
    Bridge.define("LTEvent", {
        fields: {
            id: 0,
            data: null
        },
        ctors: {
            ctor: function (id, data) {
                this.$initialize();
                this.id = id;
                this.data = data;
            }
        }
    });
    /*LTEvent end.*/

    /*LTGUI start.*/
    Bridge.define("LTGUI", {
        statics: {
            fields: {
                RECT_LEVELS: 0,
                RECTS_PER_LEVEL: 0,
                BUTTONS_MAX: 0,
                levels: null,
                levelDepths: null,
                buttons: null,
                buttonLevels: null,
                buttonLastFrame: null,
                r: null,
                color: null,
                isGUIEnabled: false,
                global_counter: 0
            },
            ctors: {
                init: function () {
                    this.color = new UnityEngine.Color();
                    this.RECT_LEVELS = 5;
                    this.RECTS_PER_LEVEL = 10;
                    this.BUTTONS_MAX = 24;
                    this.color = new pc.Color( 1, 1, 1, 1 );
                    this.isGUIEnabled = false;
                    this.global_counter = 0;
                }
            },
            methods: {
                /*LTGUI.init:static start.*/
                init: function () {
                    if (LTGUI.levels == null) {
                        LTGUI.levels = System.Array.init(Bridge.Int.mul(LTGUI.RECT_LEVELS, LTGUI.RECTS_PER_LEVEL), null, LTRect);
                        LTGUI.levelDepths = System.Array.init(LTGUI.RECT_LEVELS, 0, System.Int32);
                    }
                },
                /*LTGUI.init:static end.*/

                /*LTGUI.initRectCheck:static start.*/
                initRectCheck: function () {
                    if (LTGUI.buttons == null) {
                        LTGUI.buttons = System.Array.init(LTGUI.BUTTONS_MAX, function (){
                            return new UnityEngine.Rect();
                        }, UnityEngine.Rect);
                        LTGUI.buttonLevels = System.Array.init(LTGUI.BUTTONS_MAX, 0, System.Int32);
                        LTGUI.buttonLastFrame = System.Array.init(LTGUI.BUTTONS_MAX, 0, System.Int32);
                        for (var i = 0; i < LTGUI.buttonLevels.length; i = (i + 1) | 0) {
                            LTGUI.buttonLevels[i] = -1;
                        }
                    }
                },
                /*LTGUI.initRectCheck:static end.*/

                /*LTGUI.reset:static start.*/
                reset: function () {
                    if (LTGUI.isGUIEnabled) {
                        LTGUI.isGUIEnabled = false;
                        for (var i = 0; i < LTGUI.levels.length; i = (i + 1) | 0) {
                            LTGUI.levels[i] = null;
                        }

                        for (var i1 = 0; i1 < LTGUI.levelDepths.length; i1 = (i1 + 1) | 0) {
                            LTGUI.levelDepths[i1] = 0;
                        }
                    }
                },
                /*LTGUI.reset:static end.*/

                /*LTGUI.update:static start.*/
                update: function (updateLevel) {
                    if (LTGUI.isGUIEnabled) {
                        LTGUI.init();
                        if (LTGUI.levelDepths[updateLevel] > 0) {
                            LTGUI.color = UnityEngine.GUI.color.$clone();
                            var baseI = Bridge.Int.mul(updateLevel, LTGUI.RECTS_PER_LEVEL);
                            var maxLoop = (baseI + LTGUI.levelDepths[updateLevel]) | 0; // RECTS_PER_LEVEL;//;

                            for (var i = baseI; i < maxLoop; i = (i + 1) | 0) {
                                LTGUI.r = LTGUI.levels[i];
                                // Debug.Log("r:"+r+" i:"+i);
                                if (LTGUI.r != null) {
                                    //Debug.Log("label:"+r.labelStr+" textColor:"+r.style.normal.textColor);
                                    if (LTGUI.r.useColor) {
                                        UnityEngine.GUI.color = LTGUI.r.color.$clone();
                                    }
                                    if (LTGUI.r.type === LTGUI.Element_Type.Label) {
                                        if (LTGUI.r.style != null) {
                                            UnityEngine.GUI.skin.label = LTGUI.r.style;
                                        }
                                        if (LTGUI.r.useSimpleScale) {
                                            UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1((LTGUI.r.rect.x + LTGUI.r.margin.x + LTGUI.r.relativeRect.x) * LTGUI.r.relativeRect.width, (LTGUI.r.rect.y + LTGUI.r.margin.y + LTGUI.r.relativeRect.y) * LTGUI.r.relativeRect.height, LTGUI.r.rect.width * LTGUI.r.relativeRect.width, LTGUI.r.rect.height * LTGUI.r.relativeRect.height), LTGUI.r.labelStr);
                                        } else {
                                            UnityEngine.GUI.Label(new UnityEngine.Rect.$ctor1(LTGUI.r.rect.x + LTGUI.r.margin.x, LTGUI.r.rect.y + LTGUI.r.margin.y, LTGUI.r.rect.width, LTGUI.r.rect.height), LTGUI.r.labelStr);
                                        }
                                    } else if (LTGUI.r.type === LTGUI.Element_Type.Texture && LTGUI.r.texture != null) {
                                        var size = LTGUI.r.useSimpleScale ? new pc.Vec2( 0.0, LTGUI.r.rect.height * LTGUI.r.relativeRect.height ) : new pc.Vec2( LTGUI.r.rect.width, LTGUI.r.rect.height );
                                        if (LTGUI.r.sizeByHeight) {
                                            size.x = LTGUI.r.texture.width / LTGUI.r.texture.height * size.y;
                                        }
                                        if (LTGUI.r.useSimpleScale) {
                                            UnityEngine.GUI.DrawTexture(new UnityEngine.Rect.$ctor1((LTGUI.r.rect.x + LTGUI.r.margin.x + LTGUI.r.relativeRect.x) * LTGUI.r.relativeRect.width, (LTGUI.r.rect.y + LTGUI.r.margin.y + LTGUI.r.relativeRect.y) * LTGUI.r.relativeRect.height, size.x, size.y), LTGUI.r.texture);
                                        } else {
                                            UnityEngine.GUI.DrawTexture(new UnityEngine.Rect.$ctor1(LTGUI.r.rect.x + LTGUI.r.margin.x, LTGUI.r.rect.y + LTGUI.r.margin.y, size.x, size.y), LTGUI.r.texture);
                                        }
                                    }
                                }
                            }
                            UnityEngine.GUI.color = LTGUI.color.$clone();
                        }
                    }
                },
                /*LTGUI.update:static end.*/

                /*LTGUI.checkOnScreen:static start.*/
                checkOnScreen: function (rect) {
                    var offLeft = rect.x + rect.width < 0.0;
                    var offRight = rect.x > UnityEngine.Screen.width;
                    var offBottom = rect.y > UnityEngine.Screen.height;
                    var offTop = rect.y + rect.height < 0.0;

                    return !(offLeft || offRight || offBottom || offTop);
                },
                /*LTGUI.checkOnScreen:static end.*/

                /*LTGUI.destroy:static start.*/
                destroy: function (id) {
                    var backId = id & 65535;
                    var backCounter = id >> 16;
                    if (id >= 0 && LTGUI.levels[backId] != null && LTGUI.levels[backId].hasInitiliazed && LTGUI.levels[backId].counter === backCounter) {
                        LTGUI.levels[backId] = null;
                    }
                },
                /*LTGUI.destroy:static end.*/

                /*LTGUI.destroyAll:static start.*/
                destroyAll: function (depth) { // clears all gui elements on depth
                    var maxLoop = (Bridge.Int.mul(depth, LTGUI.RECTS_PER_LEVEL) + LTGUI.RECTS_PER_LEVEL) | 0;
                    for (var i = Bridge.Int.mul(depth, LTGUI.RECTS_PER_LEVEL); LTGUI.levels != null && i < maxLoop; i = (i + 1) | 0) {
                        LTGUI.levels[i] = null;
                    }
                },
                /*LTGUI.destroyAll:static end.*/

                /*LTGUI.label$1:static start.*/
                label$1: function (rect, label, depth) {
                    return LTGUI.label(new LTRect.$ctor4(rect.$clone()), label, depth);
                },
                /*LTGUI.label$1:static end.*/

                /*LTGUI.label:static start.*/
                label: function (rect, label, depth) {
                    rect.type = LTGUI.Element_Type.Label;
                    rect.labelStr = label;
                    return LTGUI.element(rect, depth);
                },
                /*LTGUI.label:static end.*/

                /*LTGUI.texture$1:static start.*/
                texture$1: function (rect, texture, depth) {
                    return LTGUI.texture(new LTRect.$ctor4(rect.$clone()), texture, depth);
                },
                /*LTGUI.texture$1:static end.*/

                /*LTGUI.texture:static start.*/
                texture: function (rect, texture, depth) {
                    rect.type = LTGUI.Element_Type.Texture;
                    rect.texture = texture;
                    return LTGUI.element(rect, depth);
                },
                /*LTGUI.texture:static end.*/

                /*LTGUI.element:static start.*/
                element: function (rect, depth) {
                    LTGUI.isGUIEnabled = true;
                    LTGUI.init();
                    var maxLoop = (Bridge.Int.mul(depth, LTGUI.RECTS_PER_LEVEL) + LTGUI.RECTS_PER_LEVEL) | 0;
                    var k = 0;
                    if (rect != null) {
                        LTGUI.destroy(rect.id);
                    }
                    if (rect.type === LTGUI.Element_Type.Label && rect.style != null) {
                        // if(rect.style.normal.textColor.a<=0f){
                        //     Debug.LogWarning("Your GUI normal color has an alpha of zero, and will not be rendered.");
                        // }
                    }
                    if (rect.relativeRect.width === Number.POSITIVE_INFINITY) {
                        rect.relativeRect = new UnityEngine.Rect.$ctor1(0.0, 0.0, UnityEngine.Screen.width, UnityEngine.Screen.height);
                    }
                    for (var i = Bridge.Int.mul(depth, LTGUI.RECTS_PER_LEVEL); i < maxLoop; i = (i + 1) | 0) {
                        LTGUI.r = LTGUI.levels[i];
                        if (LTGUI.r == null) {
                            LTGUI.r = rect;
                            LTGUI.r.rotateEnabled = true;
                            LTGUI.r.alphaEnabled = true;
                            LTGUI.r.setId(i, LTGUI.global_counter);
                            LTGUI.levels[i] = LTGUI.r;
                            // Debug.Log("k:"+k+ " maxDepth:"+levelDepths[depth]);
                            if (k >= LTGUI.levelDepths[depth]) {
                                LTGUI.levelDepths[depth] = (k + 1) | 0;
                            }
                            LTGUI.global_counter = (LTGUI.global_counter + 1) | 0;
                            return LTGUI.r;
                        }
                        k = (k + 1) | 0;
                    }

                    console.error("You ran out of GUI Element spaces");

                    return null;
                },
                /*LTGUI.element:static end.*/

                /*LTGUI.hasNoOverlap:static start.*/
                hasNoOverlap: function (rect, depth) {
                    LTGUI.initRectCheck();
                    var hasNoOverlap = true;
                    var wasAddedToList = false;
                    for (var i = 0; i < LTGUI.buttonLevels.length; i = (i + 1) | 0) {
                        // Debug.Log("buttonLastFrame["+i+"]:"+buttonLastFrame[i]);
                        //Debug.Log("buttonLevels["+i+"]:"+buttonLevels[i]);
                        if (LTGUI.buttonLevels[i] >= 0) {
                            //Debug.Log("buttonLastFrame["+i+"]:"+buttonLastFrame[i]+" Time.frameCount:"+Time.frameCount);
                            if (((LTGUI.buttonLastFrame[i] + 1) | 0) < UnityEngine.Time.frameCount) { // It has to have been visible within the current, or
                                LTGUI.buttonLevels[i] = -1;
                                // Debug.Log("resetting i:"+i);
                            } else {
                                //if(buttonLevels[i]>=0)
                                //   Debug.Log("buttonLevels["+i+"]:"+buttonLevels[i]);
                                if (LTGUI.buttonLevels[i] > depth) {
                                    /* if(firstTouch().x > 0){
                                       Debug.Log("buttons["+i+"]:"+buttons[i] + " firstTouch:");
                                       Debug.Log(firstTouch());
                                       Debug.Log(buttonLevels[i]);
                                    }*/
                                    if (LTGUI.pressedWithinRect(LTGUI.buttons[i].$clone())) {
                                        hasNoOverlap = false; // there is an overlapping button that is higher
                                    }
                                }
                            }
                        }

                        if (wasAddedToList === false && LTGUI.buttonLevels[i] < 0) {
                            wasAddedToList = true;
                            LTGUI.buttonLevels[i] = depth;
                            LTGUI.buttons[i] = rect.$clone();
                            LTGUI.buttonLastFrame[i] = UnityEngine.Time.frameCount;
                        }
                    }

                    return hasNoOverlap;
                },
                /*LTGUI.hasNoOverlap:static end.*/

                /*LTGUI.pressedWithinRect:static start.*/
                pressedWithinRect: function (rect) {
                    var vec2 = LTGUI.firstTouch();
                    if (vec2.x < 0.0) {
                        return false;
                    }
                    var vecY = UnityEngine.Screen.height - vec2.y;
                    return (vec2.x > rect.x && vec2.x < rect.x + rect.width && vecY > rect.y && vecY < rect.y + rect.height);
                },
                /*LTGUI.pressedWithinRect:static end.*/

                /*LTGUI.checkWithinRect:static start.*/
                checkWithinRect: function (vec2, rect) {
                    vec2.y = UnityEngine.Screen.height - vec2.y;
                    return (vec2.x > rect.x && vec2.x < rect.x + rect.width && vec2.y > rect.y && vec2.y < rect.y + rect.height);
                },
                /*LTGUI.checkWithinRect:static end.*/

                /*LTGUI.firstTouch:static start.*/
                firstTouch: function () {
                    var $t;
                    if (UnityEngine.Input.touchCount > 0) {
                        return ($t = UnityEngine.Input.touches)[0].position.$clone();
                    } else if (UnityEngine.Input.GetMouseButton(0)) {
                        return UnityEngine.Input.mousePosition.$clone();
                    }

                    return new pc.Vec2( (-window.Infinity), (-window.Infinity) );
                },
                /*LTGUI.firstTouch:static end.*/


            }
        }
    });
    /*LTGUI end.*/

    /*LTGUI+Element_Type start.*/
    Bridge.define("LTGUI.Element_Type", {
        $kind: "nested enum",
        statics: {
            fields: {
                Texture: 0,
                Label: 1
            }
        }
    });
    /*LTGUI+Element_Type end.*/

    /*LTRect start.*/
    Bridge.define("LTRect", {
        statics: {
            fields: {
                colorTouched: false
            }
        },
        fields: {
            _rect: null,
            alpha: 0,
            rotation: 0,
            pivot: null,
            margin: null,
            relativeRect: null,
            rotateEnabled: false,
            rotateFinished: false,
            alphaEnabled: false,
            labelStr: null,
            type: 0,
            style: null,
            useColor: false,
            color: null,
            fontScaleToFit: false,
            useSimpleScale: false,
            sizeByHeight: false,
            texture: null,
            _id: 0,
            counter: 0
        },
        props: {
            hasInitiliazed: {
                get: function () {
                    return this._id !== -1;
                }
            },
            id: {
                get: function () {
                    var toId = this._id | this.counter << 16;

                    /* uint backId = toId & 0xFFFF;
                    uint backCounter = toId >> 16;
                    if(_id!=backId || backCounter!=counter){
                       Debug.LogError("BAD CONVERSION toId:"+_id);
                    }*/

                    return toId;
                }
            },
            x: {
                get: function () {
                    return this._rect.x;
                },
                set: function (value) {
                    this._rect.x = value;
                }
            },
            y: {
                get: function () {
                    return this._rect.y;
                },
                set: function (value) {
                    this._rect.y = value;
                }
            },
            width: {
                get: function () {
                    return this._rect.width;
                },
                set: function (value) {
                    this._rect.width = value;
                }
            },
            height: {
                get: function () {
                    return this._rect.height;
                },
                set: function (value) {
                    this._rect.height = value;
                }
            },
            rect: {
                get: function () {
                    if (LTRect.colorTouched) {
                        LTRect.colorTouched = false;
                        UnityEngine.GUI.color = new pc.Color( UnityEngine.GUI.color.r, UnityEngine.GUI.color.g, UnityEngine.GUI.color.b, 1.0 );
                    }
                    if (this.rotateEnabled) {
                        if (this.rotateFinished) {
                            this.rotateFinished = false;
                            this.rotateEnabled = false;
                            //this.rotation = 0.0f;
                            this.pivot = pc.Vec2.ZERO.clone();
                        } else {
                            //GUIUtility.RotateAroundPivot(rotation, pivot);
                        }
                    }
                    if (this.alphaEnabled) {
                        UnityEngine.GUI.color = new pc.Color( UnityEngine.GUI.color.r, UnityEngine.GUI.color.g, UnityEngine.GUI.color.b, this.alpha );
                        LTRect.colorTouched = true;
                    }
                    if (this.fontScaleToFit) {
                        if (this.useSimpleScale) {
                            this.style.fontSize = Bridge.Int.clip32(this._rect.height * this.relativeRect.height);
                        } else {
                            this.style.fontSize = Bridge.Int.clip32(this._rect.height);
                        }
                    }
                    return this._rect.$clone();
                },
                set: function (value) {
                    this._rect = value.$clone();
                }
            }
        },
        ctors: {
            init: function () {
                this._rect = new UnityEngine.Rect();
                this.pivot = new UnityEngine.Vector2();
                this.margin = new UnityEngine.Vector2();
                this.relativeRect = new UnityEngine.Rect();
                this.color = new UnityEngine.Color();
                this.alpha = 1.0;
                this.relativeRect = new UnityEngine.Rect.$ctor1(0.0, 0.0, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
                this.useColor = false;
                this.color = new pc.Color( 1, 1, 1, 1 );
                this._id = -1;
            },
            ctor: function () {
                this.$initialize();
                this.reset();
                this.rotateEnabled = (this.alphaEnabled = true);
                this._rect = new UnityEngine.Rect.$ctor1(0.0, 0.0, 1.0, 1.0);
            },
            $ctor4: function (rect) {
                this.$initialize();
                this._rect = rect.$clone();
                this.reset();
            },
            $ctor1: function (x, y, width, height) {
                this.$initialize();
                this._rect = new UnityEngine.Rect.$ctor1(x, y, width, height);
                this.alpha = 1.0;
                this.rotation = 0.0;
                this.rotateEnabled = (this.alphaEnabled = false);
            },
            $ctor2: function (x, y, width, height, alpha) {
                this.$initialize();
                this._rect = new UnityEngine.Rect.$ctor1(x, y, width, height);
                this.alpha = alpha;
                this.rotation = 0.0;
                this.rotateEnabled = (this.alphaEnabled = false);
            },
            $ctor3: function (x, y, width, height, alpha, rotation) {
                this.$initialize();
                this._rect = new UnityEngine.Rect.$ctor1(x, y, width, height);
                this.alpha = alpha;
                this.rotation = rotation;
                this.rotateEnabled = (this.alphaEnabled = false);
                if (rotation !== 0.0) {
                    this.rotateEnabled = true;
                    this.resetForRotation();
                }
            }
        },
        methods: {
            /*LTRect.setId start.*/
            setId: function (id, counter) {
                this._id = id;
                this.counter = counter;
            },
            /*LTRect.setId end.*/

            /*LTRect.reset start.*/
            reset: function () {
                this.alpha = 1.0;
                this.rotation = 0.0;
                this.rotateEnabled = (this.alphaEnabled = false);
                this.margin = pc.Vec2.ZERO.clone();
                this.sizeByHeight = false;
                this.useColor = false;
            },
            /*LTRect.reset end.*/

            /*LTRect.resetForRotation start.*/
            resetForRotation: function () {
                var scale = new pc.Vec3( UnityEngine.GUI.matrix.getitem$1(0, 0), UnityEngine.GUI.matrix.getitem$1(1, 1), UnityEngine.GUI.matrix.getitem$1(2, 2) );
                if (pc.Vec2.equals( this.pivot, pc.Vec2.ZERO.clone() )) {
                    this.pivot = new pc.Vec2( (this._rect.x + ((this._rect.width) * 0.5)) * scale.x + UnityEngine.GUI.matrix.getitem$1(0, 3), (this._rect.y + ((this._rect.height) * 0.5)) * scale.y + UnityEngine.GUI.matrix.getitem$1(1, 3) );
                }
            },
            /*LTRect.resetForRotation end.*/

            /*LTRect.setStyle start.*/
            setStyle: function (style) {
                this.style = style;
                return this;
            },
            /*LTRect.setStyle end.*/

            /*LTRect.setFontScaleToFit start.*/
            setFontScaleToFit: function (fontScaleToFit) {
                this.fontScaleToFit = fontScaleToFit;
                return this;
            },
            /*LTRect.setFontScaleToFit end.*/

            /*LTRect.setColor start.*/
            setColor: function (color) {
                this.color = color.$clone();
                this.useColor = true;
                return this;
            },
            /*LTRect.setColor end.*/

            /*LTRect.setAlpha start.*/
            setAlpha: function (alpha) {
                this.alpha = alpha;
                return this;
            },
            /*LTRect.setAlpha end.*/

            /*LTRect.setLabel start.*/
            setLabel: function (str) {
                this.labelStr = str;
                return this;
            },
            /*LTRect.setLabel end.*/

            /*LTRect.setUseSimpleScale$1 start.*/
            setUseSimpleScale$1: function (useSimpleScale, relativeRect) {
                this.useSimpleScale = useSimpleScale;
                this.relativeRect = relativeRect.$clone();
                return this;
            },
            /*LTRect.setUseSimpleScale$1 end.*/

            /*LTRect.setUseSimpleScale start.*/
            setUseSimpleScale: function (useSimpleScale) {
                this.useSimpleScale = useSimpleScale;
                this.relativeRect = new UnityEngine.Rect.$ctor1(0.0, 0.0, UnityEngine.Screen.width, UnityEngine.Screen.height);
                return this;
            },
            /*LTRect.setUseSimpleScale end.*/

            /*LTRect.setSizeByHeight start.*/
            setSizeByHeight: function (sizeByHeight) {
                this.sizeByHeight = sizeByHeight;
                return this;
            },
            /*LTRect.setSizeByHeight end.*/

            /*LTRect.toString start.*/
            toString: function () {
                return "x:" + System.Single.format(this._rect.x) + " y:" + System.Single.format(this._rect.y) + " width:" + System.Single.format(this._rect.width) + " height:" + System.Single.format(this._rect.height);
            },
            /*LTRect.toString end.*/


        },
        overloads: {
            "setUseSimpleScale(bool, Rect)": "setUseSimpleScale$1",
            "ToString()": "toString"
        }
    });
    /*LTRect end.*/

    /*LTSeq start.*/
    Bridge.define("LTSeq", {
        fields: {
            previous: null,
            current: null,
            tween: null,
            totalDelay: 0,
            timeScale: 0,
            debugIter: 0,
            counter: 0,
            toggle: false,
            _id: 0
        },
        props: {
            id: {
                get: function () {
                    var toId = (this._id | ((this.counter << 16) >>> 0)) >>> 0;

                    /* uint backId = toId & 0xFFFF;
                    			uint backCounter = toId >> 16;
                    			if(_id!=backId || backCounter!=counter){
                    				Debug.LogError("BAD CONVERSION toId:"+_id);
                    			}*/

                    return (toId | 0);
                }
            }
        },
        ctors: {
            init: function () {
                this.toggle = false;
            }
        },
        methods: {
            /*LTSeq.reset start.*/
            reset: function () {
                this.previous = null;
                this.tween = null;
                this.totalDelay = 0.0;
            },
            /*LTSeq.reset end.*/

            /*LTSeq.init start.*/
            init: function (id, global_counter) {
                this.reset();
                this._id = id;

                this.counter = global_counter;

                this.current = this;
            },
            /*LTSeq.init end.*/

            /*LTSeq.addOn start.*/
            addOn: function () {
                this.current.toggle = true;
                var lastCurrent = this.current;
                this.current = LeanTween.sequence(true);
                // Debug.Log("this.current:" + this.current.id + " lastCurrent:" + lastCurrent.id);
                this.current.previous = lastCurrent;
                lastCurrent.toggle = false;
                this.current.totalDelay = lastCurrent.totalDelay;
                this.current.debugIter = (lastCurrent.debugIter + 1) | 0;
                return this.current;
            },
            /*LTSeq.addOn end.*/

            /*LTSeq.addPreviousDelays start.*/
            addPreviousDelays: function () {
                //		Debug.Log("delay:"+delay+" count:"+this.current.count+" this.current.totalDelay:"+this.current.totalDelay);

                var prev = this.current.previous;

                if (prev != null && prev.tween != null) {
                    return this.current.totalDelay + prev.tween.time;
                }
                return this.current.totalDelay;
            },
            /*LTSeq.addPreviousDelays end.*/

            /*LTSeq.append$3 start.*/
            append$3: function (delay) {
                this.current.totalDelay += delay;

                return this.current;
            },
            /*LTSeq.append$3 end.*/

            /*LTSeq.append$1 start.*/
            append$1: function (callback) {
                var newTween = LeanTween.delayedCall(0.0, callback);
                //		Debug.Log("newTween:" + newTween);
                return this.append(newTween);
            },
            /*LTSeq.append$1 end.*/

            /*LTSeq.append$2 start.*/
            append$2: function (callback, obj) {
                this.append(LeanTween.delayedCall$1(0.0, callback).setOnCompleteParam(obj));

                return this.addOn();
            },
            /*LTSeq.append$2 end.*/

            /*LTSeq.append$4 start.*/
            append$4: function (gameObject, callback) {
                this.append(LeanTween.delayedCall$2(gameObject, 0.0, callback));

                return this.addOn();
            },
            /*LTSeq.append$4 end.*/

            /*LTSeq.append$5 start.*/
            append$5: function (gameObject, callback, obj) {
                this.append(LeanTween.delayedCall$3(gameObject, 0.0, callback).setOnCompleteParam(obj));

                return this.addOn();
            },
            /*LTSeq.append$5 end.*/

            /*LTSeq.append start.*/
            append: function (tween) {
                this.current.tween = tween;

                //		Debug.Log("tween:" + tween + " delay:" + this.current.totalDelay);

                this.current.totalDelay = this.addPreviousDelays();

                tween.setDelay(this.current.totalDelay);

                return this.addOn();
            },
            /*LTSeq.append end.*/

            /*LTSeq.insert start.*/
            insert: function (tween) {
                this.current.tween = tween;

                tween.setDelay(this.addPreviousDelays());

                return this.addOn();
            },
            /*LTSeq.insert end.*/

            /*LTSeq.setScale start.*/
            setScale: function (timeScale) {
                //		Debug.Log("this.current:" + this.current.previous.debugIter+" tween:"+this.current.previous.tween);
                this.setScaleRecursive(this.current, timeScale, 500);

                return this.addOn();
            },
            /*LTSeq.setScale end.*/

            /*LTSeq.setScaleRecursive start.*/
            setScaleRecursive: function (seq, timeScale, count) {
                if (count > 0) {
                    this.timeScale = timeScale;

                    //			Debug.Log("seq.count:" + count + " seq.tween:" + seq.tween);
                    seq.totalDelay *= timeScale;
                    if (seq.tween != null) {
                        //			Debug.Log("seq.tween.time * timeScale:" + seq.tween.time * timeScale + " seq.totalDelay:"+seq.totalDelay +" time:"+seq.tween.time+" seq.tween.delay:"+seq.tween.delay);
                        if (seq.tween.time !== 0.0) {
                            seq.tween.setTime(seq.tween.time * timeScale);
                        }
                        seq.tween.setDelay(seq.tween.delay * timeScale);
                    }

                    if (seq.previous != null) {
                        this.setScaleRecursive(seq.previous, timeScale, ((count - 1) | 0));
                    }
                }
            },
            /*LTSeq.setScaleRecursive end.*/

            /*LTSeq.reverse start.*/
            reverse: function () {

                return this.addOn();
            },
            /*LTSeq.reverse end.*/


        },
        overloads: {
            "append(float)": "append$3",
            "append(System.Action)": "append$1",
            "append(System.Action<object>, object)": "append$2",
            "append(GameObject, System.Action)": "append$4",
            "append(GameObject, System.Action<object>, object)": "append$5"
        }
    });
    /*LTSeq end.*/

    /*LTSpline start.*/
    Bridge.define("LTSpline", {
        statics: {
            fields: {
                DISTANCE_COUNT: 0,
                SUBLINE_COUNT: 0
            },
            ctors: {
                init: function () {
                    this.DISTANCE_COUNT = 3;
                    this.SUBLINE_COUNT = 20;
                }
            },
            methods: {
                /*LTSpline.drawGizmo:static start.*/
                drawGizmo: function (arr, color) {
                    if (arr.length >= 4) {
                        var vec3s = System.Array.init(arr.length, function (){
                            return new UnityEngine.Vector3();
                        }, UnityEngine.Vector3);
                        for (var i = 0; i < arr.length; i = (i + 1) | 0) {
                            vec3s[i] = arr[i].position.$clone();
                        }
                        var spline = new LTSpline.ctor(vec3s);
                        var prevPt = spline.ptsAdj[0].$clone();

                        var colorBefore = UnityEngine.Gizmos.color.$clone();
                        UnityEngine.Gizmos.color = color.$clone();
                        for (var i1 = 0; i1 < spline.ptsAdjLength; i1 = (i1 + 1) | 0) {
                            var currPt2 = spline.ptsAdj[i1].$clone();
                            // Debug.Log("currPt2:"+currPt2);

                            UnityEngine.Gizmos.DrawLine(prevPt.$clone(), currPt2.$clone());
                            prevPt = currPt2.$clone();
                        }
                        UnityEngine.Gizmos.color = colorBefore.$clone();
                    }
                },
                /*LTSpline.drawGizmo:static end.*/

                /*LTSpline.drawLine:static start.*/
                drawLine: function (arr, width, color) {
                    if (arr.length >= 4) {

                    }
                },
                /*LTSpline.drawLine:static end.*/


            }
        },
        fields: {
            distance: 0,
            constantSpeed: false,
            pts: null,
            ptsAdj: null,
            ptsAdjLength: 0,
            orientToPath: false,
            orientToPath2d: false,
            numSections: 0,
            currPt: 0
        },
        ctors: {
            init: function () {
                this.distance = 0.0;
                this.constantSpeed = true;
            },
            ctor: function (pts) {
                this.$initialize();
                this.init(pts, true);
            },
            $ctor1: function (pts, constantSpeed) {
                this.$initialize();
                this.constantSpeed = constantSpeed;
                this.init(pts, constantSpeed);
            }
        },
        methods: {
            /*LTSpline.init start.*/
            init: function (pts, constantSpeed) {
                if (pts.length < 4) {
                    LeanTween.logError("LeanTween - When passing values for a spline path, you must pass four or more values!");
                    return;
                }

                this.pts = System.Array.init(pts.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                System.Array.copy(pts, 0, this.pts, 0, pts.length);

                this.numSections = (pts.length - 3) | 0;

                var minSegment = Number.POSITIVE_INFINITY;
                var earlierPoint = this.pts[1].$clone();
                var totalDistance = 0.0;
                for (var i = 1; i < ((this.pts.length - 1) | 0); i = (i + 1) | 0) {
                    // float pointDistance = (this.pts[i]-earlierPoint).sqrMagnitude;
                    var pointDistance = pc.Vec3.distance( this.pts[i], earlierPoint );
                    //Debug.Log("pointDist:"+pointDistance);
                    if (pointDistance < minSegment) {
                        minSegment = pointDistance;
                    }

                    totalDistance += pointDistance;
                }

                if (constantSpeed) {
                    minSegment = totalDistance / (Bridge.Int.mul(this.numSections, LTSpline.SUBLINE_COUNT));
                    //Debug.Log("minSegment:"+minSegment+" numSections:"+numSections);

                    var minPrecision = minSegment / LTSpline.SUBLINE_COUNT; // number of subdivisions in each segment
                    var precision = Bridge.Int.mul(Math.ceil(totalDistance / minPrecision), LTSpline.DISTANCE_COUNT);
                    // Debug.Log("precision:"+precision);
                    if (precision <= 1) {
                        precision = 2;
                    }

                    this.ptsAdj = System.Array.init(precision, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    earlierPoint = this.interp(0.0);
                    var num = 1;
                    this.ptsAdj[0] = earlierPoint.$clone();
                    this.distance = 0.0;
                    for (var i1 = 0; i1 < ((precision + 1) | 0); i1 = (i1 + 1) | 0) {
                        var fract = i1 / precision;
                        // Debug.Log("fract:"+fract);
                        var point = this.interp(fract);
                        var dist = pc.Vec3.distance( point, earlierPoint );

                        // float dist = (point-earlierPoint).sqrMagnitude;
                        if (dist >= minPrecision || fract >= 1.0) {
                            this.ptsAdj[num] = point.$clone();
                            this.distance += dist; // only add it to the total distance once we know we are adding it as an adjusted point

                            earlierPoint = point.$clone();
                            // Debug.Log("fract:"+fract+" point:"+point);
                            num = (num + 1) | 0;
                        }
                    }
                    // make sure there is a point at the very end
                    /* num++;
                    Vector3 endPoint = interp( 1f );
                    ptsAdj[num] = endPoint;*/
                    // Debug.Log("fract 1f endPoint:"+endPoint);

                    this.ptsAdjLength = num;
                }
                // Debug.Log("map 1f:"+map(1f)+" end:"+ptsAdj[ ptsAdjLength-1 ]);

                // Debug.Log("ptsAdjLength:"+ptsAdjLength+" minPrecision:"+minPrecision+" precision:"+precision);
            },
            /*LTSpline.init end.*/

            /*LTSpline.map start.*/
            map: function (u) {
                if (u >= 1.0) {
                    return this.pts[((this.pts.length - 2) | 0)].$clone();
                }
                var t = u * (((this.ptsAdjLength - 1) | 0));
                var first = Math.floor(t);
                var next = Math.ceil(t);

                if (first < 0) {
                    first = 0;
                }

                var val = this.ptsAdj[first].$clone();


                var nextVal = this.ptsAdj[next].$clone();
                var diff = t - first;

                // Debug.Log("u:"+u+" val:"+val +" nextVal:"+nextVal+" diff:"+diff+" first:"+first+" next:"+next);

                val = val.$clone().add( (nextVal.$clone().sub( val )).scale( diff ) );

                return val.$clone();
            },
            /*LTSpline.map end.*/

            /*LTSpline.interp start.*/
            interp: function (t) {
                this.currPt = UnityEngine.Mathf.Min(Math.floor(t * this.numSections), ((this.numSections - 1) | 0));
                var u = t * this.numSections - this.currPt;

                //Debug.Log("currPt:"+currPt+" numSections:"+numSections+" pts.Length :"+pts.Length );
                var a = this.pts[this.currPt].$clone();
                var b = this.pts[((this.currPt + 1) | 0)].$clone();
                var c = this.pts[((this.currPt + 2) | 0)].$clone();
                var d = this.pts[((this.currPt + 3) | 0)].$clone();

                var val = (((a.$clone().scale( -1 ).add( b.$clone().scale( 3.0 ) ).sub( c.$clone().scale( 3.0 ) ).add( d )).scale( (u * u * u) ).add( (a.$clone().scale( 2.0 ).sub( b.$clone().scale( 5.0 ) ).add( c.$clone().scale( 4.0 ) ).sub( d )).scale( (u * u) ) ).add( (a.$clone().scale( -1 ).add( c )).scale( u ) ).add( b.$clone().scale( 2.0 ) )).scale( 0.5 ));
                // Debug.Log("currPt:"+currPt+" t:"+t+" val.x"+val.x+" y:"+val.y+" z:"+val.z);

                return val.$clone();
            },
            /*LTSpline.interp end.*/

            /*LTSpline.ratioAtPoint start.*/
            ratioAtPoint: function (pt) {
                var closestDist = 3.40282347E+38;
                var closestI = 0;
                for (var i = 0; i < this.ptsAdjLength; i = (i + 1) | 0) {
                    var dist = pc.Vec3.distance( pt, this.ptsAdj[i] );
                    // Debug.Log("i:"+i+" dist:"+dist);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestI = i;
                    }
                }
                // Debug.Log("closestI:"+closestI+" ptsAdjLength:"+ptsAdjLength);
                return closestI / (((this.ptsAdjLength - 1) | 0));
            },
            /*LTSpline.ratioAtPoint end.*/

            /*LTSpline.point start.*/
            point: function (ratio) {
                var t = ratio > 1.0 ? 1.0 : ratio;
                return this.constantSpeed ? this.map(t) : this.interp(t);
            },
            /*LTSpline.point end.*/

            /*LTSpline.place2d start.*/
            place2d: function (transform, ratio) {
                transform.position = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    var v3Dir = this.point(ratio).sub( transform.position );
                    var angle = Math.atan2(v3Dir.y, v3Dir.x) * UnityEngine.Mathf.Rad2Deg;
                    transform.eulerAngles = new pc.Vec3( 0, 0, angle );
                }
            },
            /*LTSpline.place2d end.*/

            /*LTSpline.placeLocal2d start.*/
            placeLocal2d: function (transform, ratio) {
                var trans = transform.parent;
                if (UnityEngine.Component.op_Equality(trans, null)) { // this has no parent, just do a regular transform
                    this.place2d(transform, ratio);
                    return;
                }
                transform.localPosition = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    var ptAhead = this.point(ratio); //trans.TransformPoint(  );
                    var v3Dir = ptAhead.$clone().sub( transform.localPosition );
                    var angle = Math.atan2(v3Dir.y, v3Dir.x) * UnityEngine.Mathf.Rad2Deg;
                    transform.localEulerAngles = new pc.Vec3( 0, 0, angle );
                }
            },
            /*LTSpline.placeLocal2d end.*/

            /*LTSpline.place start.*/
            place: function (transform, ratio) {
                this.place$1(transform, ratio, pc.Vec3.UP.clone());
            },
            /*LTSpline.place end.*/

            /*LTSpline.place$1 start.*/
            place$1: function (transform, ratio, worldUp) {
                // ratio = Mathf.Repeat(ratio, 1.0f); // make sure ratio is always between 0-1
                transform.position = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    transform.LookAt$3(this.point(ratio), worldUp.$clone());
                }

            },
            /*LTSpline.place$1 end.*/

            /*LTSpline.placeLocal start.*/
            placeLocal: function (transform, ratio) {
                this.placeLocal$1(transform, ratio, pc.Vec3.UP.clone());
            },
            /*LTSpline.placeLocal end.*/

            /*LTSpline.placeLocal$1 start.*/
            placeLocal$1: function (transform, ratio, worldUp) {
                transform.localPosition = this.point(ratio);
                ratio += 0.001;
                if (ratio <= 1.0) {
                    transform.LookAt$3(transform.parent.TransformPoint$1(this.point(ratio)), worldUp.$clone());
                }
            },
            /*LTSpline.placeLocal$1 end.*/

            /*LTSpline.gizmoDraw start.*/
            gizmoDraw: function (t) {
                if (t === void 0) { t = -1.0; }
                if (this.ptsAdj == null || this.ptsAdj.length <= 0) {
                    return;
                }

                var prevPt = this.ptsAdj[0].$clone();

                for (var i = 0; i < this.ptsAdjLength; i = (i + 1) | 0) {
                    var currPt2 = this.ptsAdj[i].$clone();
                    // Debug.Log("currPt2:"+currPt2);
                    //Gizmos.color = new Color(UnityEngine.Random.Range(0f,1f),UnityEngine.Random.Range(0f,1f),UnityEngine.Random.Range(0f,1f),1);
                    UnityEngine.Gizmos.DrawLine(prevPt.$clone(), currPt2.$clone());
                    prevPt = currPt2.$clone();
                }
            },
            /*LTSpline.gizmoDraw end.*/

            /*LTSpline.drawGizmo start.*/
            drawGizmo: function (color) {
                if (this.ptsAdjLength >= 4) {

                    var prevPt = this.ptsAdj[0].$clone();

                    var colorBefore = UnityEngine.Gizmos.color.$clone();
                    UnityEngine.Gizmos.color = color.$clone();
                    for (var i = 0; i < this.ptsAdjLength; i = (i + 1) | 0) {
                        var currPt2 = this.ptsAdj[i].$clone();
                        // Debug.Log("currPt2:"+currPt2);

                        UnityEngine.Gizmos.DrawLine(prevPt.$clone(), currPt2.$clone());
                        prevPt = currPt2.$clone();
                    }
                    UnityEngine.Gizmos.color = colorBefore.$clone();
                }
            },
            /*LTSpline.drawGizmo end.*/

            /*LTSpline.drawLinesGLLines start.*/
            drawLinesGLLines: function (outlineMaterial, color, width) {
                /* 
                GL.PushMatrix();
                outlineMaterial.SetPass(0);
                GL.LoadPixelMatrix();
                GL.Begin(GL.LINES);
                GL.Color(color);

                if (constantSpeed) {
                   if (this.ptsAdjLength >= 4) {

                       Vector3 prevPt = this.ptsAdj[0];

                       for (int i = 0; i < this.ptsAdjLength; i++) {
                           Vector3 currPt2 = this.ptsAdj[i];
                           GL.Vertex(prevPt);
                           GL.Vertex(currPt2);

                           prevPt = currPt2;
                       }
                   }

                } else {
                   if (this.pts.Length >= 4) {

                       Vector3 prevPt = this.pts[0];

                       float split = 1f / ((float)this.pts.Length * 10f);

                       float iter = 0f;
                       while (iter < 1f) {
                           float at = iter / 1f;
                           Vector3 currPt2 = interp(at);
                           // Debug.Log("currPt2:"+currPt2);

                           GL.Vertex(prevPt);
                           GL.Vertex(currPt2);

                           prevPt = currPt2;

                           iter += split;
                       }
                   }
                }


                GL.End();
                GL.PopMatrix();
                */
            },
            /*LTSpline.drawLinesGLLines end.*/

            /*LTSpline.generateVectors start.*/
            generateVectors: function () {
                if (this.pts.length >= 4) {
                    var meshPoints = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).ctor();
                    var prevPt = this.pts[0].$clone();
                    meshPoints.add(prevPt.$clone());

                    var split = 1.0 / (this.pts.length * 10.0);

                    var iter = 0.0;
                    while (iter < 1.0) {
                        var at = iter / 1.0;
                        var currPt2 = this.interp(at);
                        //                Debug.Log("currPt2:"+currPt2);

                        //                GL.Vertex(prevPt);
                        //                GL.Vertex(currPt2);
                        meshPoints.add(currPt2.$clone());

                        //                prevPt = currPt2;

                        iter += split;
                    }

                    meshPoints.ToArray();
                }
                return null;
            },
            /*LTSpline.generateVectors end.*/


        },
        overloads: {
            "place(Transform, float, Vector3)": "place$1",
            "placeLocal(Transform, float, Vector3)": "placeLocal$1"
        }
    });
    /*LTSpline end.*/

    /*LTUtility start.*/
    Bridge.define("LTUtility", {
        statics: {
            methods: {
                /*LTUtility.reverse:static start.*/
                reverse: function (arr) {
                    var length = arr.length;
                    var left = 0;
                    var right = (length - 1) | 0;

                    for (; left < right; left = (left + 1) | 0, right = (right - 1) | 0) {
                        var temporary = arr[left].$clone();
                        arr[left] = arr[right].$clone();
                        arr[right] = temporary.$clone();
                    }
                    return arr;
                },
                /*LTUtility.reverse:static end.*/


            }
        }
    });
    /*LTUtility end.*/

    /*MoveWithFingerTest start.*/
    Bridge.define("MoveWithFingerTest", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            touch: null,
            speedModifier: 0,
            transPosition: null,
            triggerBox: null,
            confetti: null,
            reticle: null,
            reticleRotationModifier: 0
        },
        ctors: {
            init: function () {
                this.touch = new UnityEngine.Touch();
                this.transPosition = new UnityEngine.Vector3();
                this.speedModifier = 0.01;
                this.reticleRotationModifier = 0.5;
            }
        },
        methods: {
            /*MoveWithFingerTest.Start start.*/
            Start: function () {
                this.transPosition = this.transform.position.$clone();

            },
            /*MoveWithFingerTest.Start end.*/

            /*MoveWithFingerTest.Update start.*/
            Update: function () {
                if (UnityEngine.Input.touchCount > 0) {
                    //if(Input.GetMouseButtonDown(0)){ 
                    //this.GetComponent<MeshRenderer>().material.color = new Color(Random.Range(0f,1f),Random.Range(0f,1f),Random.Range(0f,1f));

                    this.touch = UnityEngine.Input.GetTouch(0);

                    if (this.touch.phase === UnityEngine.TouchPhase.Moved) {
                        this.transform.position = new pc.Vec3( this.transform.position.x + this.touch.deltaPosition.x * this.speedModifier, this.transform.position.y + this.touch.deltaPosition.y * this.speedModifier, this.transform.position.z );

                        this.reticle.rotation = new pc.Quat().setFromEulerAngles_Unity( this.reticle.rotation.x, this.reticle.rotation.y, this.reticle.rotation.z + this.touch.deltaPosition.y * this.reticleRotationModifier );
                    }

                    if (this.touch.phase === UnityEngine.TouchPhase.Ended) {

                        if (this.triggerBox.ballInPosition) {
                            //confetti.SetActive(true);

                        } else {
                            this.transform.position = this.transPosition.$clone();
                        }


                    }

                }

            },
            /*MoveWithFingerTest.Update end.*/


        }
    });
    /*MoveWithFingerTest end.*/

    /*oilAnimFix start.*/
    Bridge.define("oilAnimFix", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ball: null,
            derrick: null,
            derrickReplacePrefab: null,
            particleOil: null,
            particleOilDrop: null
        },
        methods: {
            /*oilAnimFix.struckOil start.*/
            struckOil: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.particleOil.SetActive(true);
                                        this.particleOilDrop.SetActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(3.18);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.ball.SetActive(false);
                                        this.derrick.GetComponent(UnityEngine.MeshRenderer).enabled = false;
                                        UnityEngine.Object.Instantiate$4(UnityEngine.GameObject, this.derrickReplacePrefab);
                                        $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*oilAnimFix.struckOil end.*/


        }
    });
    /*oilAnimFix end.*/

    /*PauseManager start.*/
    Bridge.define("PauseManager", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*PauseManager.Start start.*/
            /**
             * The OnPause and OnResume actions are called when the application loses focus, and when the app regains focus 
            You can subscribe any method to these two actions.
            An example of something you might want to do is set the timescale to 0 when the application loses focus to stop anything from happening
            whilst the user isn't viewing the ad
             *
             * @instance
             * @private
             * @this PauseManager
             * @memberof PauseManager
             * @return  {void}
             */
            Start: function () {
                Luna.Unity.LifeCycle.addOnPause(Bridge.fn.cacheBind(this, this.Pause)); //Uncomment once Luna is installed
                Luna.Unity.LifeCycle.addOnResume(Bridge.fn.cacheBind(this, this.Resume)); //Uncomment once Luna is installed
            },
            /*PauseManager.Start end.*/

            /*PauseManager.Resume start.*/
            Resume: function () {
                UnityEngine.Time.timeScale = 1;
            },
            /*PauseManager.Resume end.*/

            /*PauseManager.Pause start.*/
            Pause: function () {
                UnityEngine.Time.timeScale = 0;
            },
            /*PauseManager.Pause end.*/


        }
    });
    /*PauseManager end.*/

    /*ScriptableUIData start.*/
    Bridge.define("ScriptableUIData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            /**
             * Un-comment the LunaPlaygroundField attributes once Luna is installed to avoid errors
             *
             * @instance
             * @public
             * @memberof ScriptableUIData
             * @type string
             */
            greetingText: null,
            startInstruction: null,
            install_CTA_BTN: null,
            endCardWin_Text: null,
            endCardLabel_text: null,
            endcard_IMG: null,
            Install_BTN_Img: null
        }
    });
    /*ScriptableUIData end.*/

    /*SimpleDuck start.*/
    Bridge.define("SimpleDuck", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.ISerializationCallbackReceiver],
        fields: {
            testHit: false,
            endCardTopText: null,
            endTextendYPos: 0,
            endTextTweenTime: 0,
            endTextclockwise: false,
            endTexteaseType: 0,
            useCameraIntro: false,
            camIntroFlagTime: 0,
            camIntoPanTime: 0,
            introBanner: false,
            goalAnimationChoice: 0,
            fingerTweenTime: 0,
            golfBall: null,
            secondBall: null,
            ballInteractionObject: null,
            golfBallStartLocation: null,
            golfBallFinalLocation: null,
            ballSinkLocation: null,
            golfBallDrag: 0,
            golfBallRotateSpeed: 0,
            golfBallRotateDrag: 0,
            sinkTime: 0,
            ballSpeed: 0,
            speedFloor: 0,
            emojis: null,
            mainCam: null,
            camIntroStart: null,
            camIntroFlagTop: null,
            camIntroPanStart: null,
            camIntroPanFinish: null,
            camIntroPlay: null,
            camFovFin: 0,
            camFinLocation: null,
            camGameOverLocation: null,
            tubemanCamLocation: null,
            struckOilCamLocation: null,
            camMoveSwitchValue: 0,
            camTimeGameOver: 0,
            interactionUI: null,
            chargeArrow: null,
            startText: null,
            startTextTransform: null,
            finishText: null,
            finishTextTransform: null,
            icon: null,
            title: null,
            GolfClashBanner: null,
            uiTextBounceSpeed: 0,
            uiTextScaleFactor: 0,
            finger: null,
            fingerTransform: null,
            fingerStartPos: null,
            fingerImage: null,
            holeInOne: null,
            playNow: null,
            playNowTransform: null,
            flag: null,
            flagStartPos: null,
            flagFinLocation: null,
            tubemanPrefab: null,
            struckOilPrefab: null,
            goalAnimAnimator: null,
            goalAnimationObject: null,
            golfClub: null,
            secondGolfClub: null,
            golfClubHitRot: null,
            hitspeed: 0,
            hitAngleBackground: null,
            hitAngle: 0,
            hitArrow: null,
            hitScale: 0,
            particleGoal: null,
            landscape: null,
            lvl2Transform: null,
            disableTap: false,
            startArea: false,
            secondArea: false,
            golfClubstart: null,
            fingerStartPosPortrait: null,
            fingerStartPosLandscape: null,
            deltaYPortrait: 0,
            deltaYLandscape: 0
        },
        alias: [
            "OnBeforeSerialize", "UnityEngine$ISerializationCallbackReceiver$OnBeforeSerialize",
            "OnAfterDeserialize", "UnityEngine$ISerializationCallbackReceiver$OnAfterDeserialize"
        ],
        ctors: {
            init: function () {
                this.fingerStartPos = new UnityEngine.Vector3();
                this.flagStartPos = new UnityEngine.Vector3();
                this.fingerStartPosPortrait = new UnityEngine.Vector2();
                this.fingerStartPosLandscape = new UnityEngine.Vector2();
                this.testHit = false;
                this.endCardTopText = "Hole in One!";
                this.endTextendYPos = 600.0;
                this.endTextTweenTime = 2.0;
                this.endTextclockwise = true;
                this.endTexteaseType = LeanTweenType.easeInOutSine;
                this.useCameraIntro = true;
                this.camIntroFlagTime = 1.0;
                this.camIntoPanTime = 1.0;
                this.introBanner = true;
                this.goalAnimationChoice = SimpleDuck.goalAnimObject.tubeman;
                this.fingerTweenTime = 0.75;
                this.golfBallDrag = 0.1;
                this.golfBallRotateSpeed = 1.0;
                this.golfBallRotateDrag = 2.0;
                this.sinkTime = 0.2;
                this.ballSpeed = 2;
                this.speedFloor = 1;
                this.camMoveSwitchValue = 0.3;
                this.camTimeGameOver = 1.0;
                this.uiTextBounceSpeed = 1.0;
                this.uiTextScaleFactor = 0.9;
                this.hitspeed = 1.0;
                this.hitScale = 1.0;
                this.disableTap = false;
                this.startArea = true;
                this.secondArea = false;
                this.deltaYPortrait = -716;
                this.deltaYLandscape = -570;
            }
        },
        methods: {
            /*SimpleDuck.OnBeforeSerialize start.*/
            OnBeforeSerialize: function () { },
            /*SimpleDuck.OnBeforeSerialize end.*/

            /*SimpleDuck.OnAfterDeserialize start.*/
            OnAfterDeserialize: function () { },
            /*SimpleDuck.OnAfterDeserialize end.*/

            /*SimpleDuck.Start start.*/
            Start: function () {
                this.fingerStartPosPortrait = new pc.Vec2( 214, 29 );
                this.fingerStartPosLandscape = new pc.Vec2( 214, -3 );
                this.fingerImage = this.finger.GetComponent(UnityEngine.UI.Image);
                this.fingerStartPos = this.fingerTransform.position.$clone();
                this.golfClubstart = this.golfClub.transform;
                this.flagStartPos = this.flag.transform.position.$clone();
                this.golfBallStartLocation = this.golfBall.transform;
                this.setLunaAssets();

                Luna.Unity.LifeCycle.addOnPause(Bridge.fn.cacheBind(this, this.PauseGameplay));
                Luna.Unity.LifeCycle.addOnResume(Bridge.fn.cacheBind(this, this.ResumeGameplay));

                //need to have a check to see if we're using the drag mechanic or not
                if (this.useCameraIntro) {
                    this.ballInteractionObject.SetActive(false);
                    if (this.introBanner) {
                        this.GolfClashBanner.SetActive(true);
                    }
                    this.disableTap = true;
                    this.StartCoroutine$1(this.camIntroFlag());
                } else {

                    this.StartCoroutine$1(this.TextBounce(this.startTextTransform));
                    //StartCoroutine(TextBounce(fingerTransform, 0.5f, 1.4f));
                    this.slideTween();
                }
                Luna.Unity.LifeCycle.addOnPause(Bridge.fn.cacheBind(this, this.PauseGameplay));
                Luna.Unity.LifeCycle.addOnResume(Bridge.fn.cacheBind(this, this.ResumeGameplay));
            },
            /*SimpleDuck.Start end.*/

            /*SimpleDuck.setLunaAssets start.*/
            setLunaAssets: function () {
                if (this.goalAnimationChoice === SimpleDuck.goalAnimObject.tubeman) {
                    var tubeman = UnityEngine.Object.Instantiate$4(UnityEngine.GameObject, this.tubemanPrefab);
                    this.goalAnimationObject = tubeman;
                    this.goalAnimAnimator = tubeman.GetComponent(UnityEngine.Animator);
                    this.camGameOverLocation = this.tubemanCamLocation;
                } else if (this.goalAnimationChoice === SimpleDuck.goalAnimObject.struckOil) {
                    var struckOil = UnityEngine.Object.Instantiate$4(UnityEngine.GameObject, this.struckOilPrefab);
                    this.goalAnimationObject = struckOil;
                    this.goalAnimAnimator = struckOil.GetComponent(UnityEngine.Animator);
                    this.camGameOverLocation = this.struckOilCamLocation;
                }
                // set end card text
                this.finishText.GetComponent(TMPro.TextMeshProUGUI).text = this.endCardTopText;
            },
            /*SimpleDuck.setLunaAssets end.*/

            /*SimpleDuck.camIntroFlag start.*/
            camIntroFlag: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startAngle,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.finger.SetActive(false);
                                        this.startText.SetActive(false);
                                        this.mainCam.transform.position = this.camIntroStart.transform.position.$clone();
                                        this.mainCam.transform.rotation = this.camIntroStart.transform.rotation.$clone();

                                        startAngle = this.transform.rotation.$clone();

                                        t = 0.0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    this.mainCam.transform.position = new pc.Vec3().lerp( this.camIntroStart.position, this.camIntroFlagTop.position, t );
                                        this.mainCam.transform.rotation = new pc.Quat().slerp( startAngle, this.camGameOverLocation.rotation, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime / this.camIntroFlagTime;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    this.StartCoroutine$1(this.camIntroPan());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDuck.camIntroFlag end.*/

            /*SimpleDuck.camIntroPan start.*/
            camIntroPan: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startAngle,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.mainCam.transform.position = this.camIntroPanStart.transform.position.$clone();
                                        this.mainCam.transform.rotation = this.camIntroPanStart.transform.rotation.$clone();

                                        startAngle = this.transform.rotation.$clone();

                                        t = 0.0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    this.mainCam.transform.position = new pc.Vec3().lerp( this.camIntroPanStart.position, this.camIntroPanFinish.position, t );
                                        this.mainCam.transform.rotation = new pc.Quat().slerp( startAngle, this.camIntroPanFinish.rotation, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime / this.camIntoPanTime;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    this.mainCam.transform.position = this.camIntroPlay.transform.position.$clone();
                                        this.mainCam.transform.rotation = this.camIntroPlay.transform.rotation.$clone();

                                        this.disableTap = false;
                                        if (this.introBanner) {
                                            this.GolfClashBanner.SetActive(false);
                                        }
                                        this.ballInteractionObject.SetActive(true);
                                        this.finger.SetActive(true);
                                        this.startText.SetActive(true);

                                        this.StartCoroutine$1(this.TextBounce(this.startTextTransform));
                                        this.slideTween();
                                        //StartCoroutine(TextBounce(fingerTransform, 0.5f, 1.4f));

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDuck.camIntroPan end.*/

            /*SimpleDuck.PauseGameplay start.*/
            PauseGameplay: function () {
                this.StopCoroutine(this.TextBounce(this.playNowTransform));
            },
            /*SimpleDuck.PauseGameplay end.*/

            /*SimpleDuck.ResumeGameplay start.*/
            ResumeGameplay: function () { },
            /*SimpleDuck.ResumeGameplay end.*/

            /*SimpleDuck.Update start.*/
            Update: function () {

                // if(testHit){
                //     testHit = false;
                //     golfBall.SetActive(true);
                //     ballReleased();
                // }
                if (this.disableTap === false && this.startArea === false && (UnityEngine.Input.GetMouseButtonUp(0) || UnityEngine.Input.touchCount > 0)) {
                    // if(secondArea)
                    // {
                    //     secondArea = false;
                    // }
                    // else
                    {
                        this.showEndCard();
                        Luna.Unity.Playable.InstallFullGame();
                    }
                }
            },
            /*SimpleDuck.Update end.*/

            /*SimpleDuck.ballReleased start.*/
            ballReleased: function () {
                if (this.startArea) {
                    this.startArea = false;
                    this.interactionUI.SetActive(false);
                    this.StopCoroutine(this.TextBounce(this.startTextTransform));

                    this.StartCoroutine$1(this.HitBall());
                    this.StartCoroutine$1(this.MoveBall());
                    this.emojis.playEmojiAnim();
                }
            },
            /*SimpleDuck.ballReleased end.*/

            /*SimpleDuck.TextBounce start.*/
            TextBounce: function (uiTransform, offset, speedScale) {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    origScale,
                    minScale,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (offset === void 0) { offset = 0.0; }
                                        if (speedScale === void 0) { speedScale = 1.0; }
                                        origScale = uiTransform.localScale.$clone();
                                        minScale = origScale.$clone().scale( this.uiTextScaleFactor );
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( true ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    uiTransform.localScale = new pc.Vec3().lerp( origScale, minScale, (Math.sin(UnityEngine.Time.time * (this.uiTextBounceSpeed * speedScale) + offset) + 1) / 2 );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDuck.TextBounce end.*/

            /*SimpleDuck.slideTween start.*/
            slideTween: function () {
                var toLocalY;
                if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                    toLocalY = this.deltaYLandscape;
                } else {
                    toLocalY = this.deltaYPortrait;
                }
                LeanTween.moveLocalY(this.finger, toLocalY, this.fingerTweenTime).setEase(LeanTweenType.easeInOutSine).setOnComplete(Bridge.fn.cacheBind(this, this.fadeTween));
            },
            /*SimpleDuck.slideTween end.*/

            /*SimpleDuck.fadeTween start.*/
            fadeTween: function () {
                LeanTween.alpha$2(this.fingerTransform, 0.0, 0.5).setEase(LeanTweenType.easeInOutSine).setOnComplete(Bridge.fn.cacheBind(this, this.resetTween)); //.setOnComplete( FadeFinished ); //fingerStartPos
            },
            /*SimpleDuck.fadeTween end.*/

            /*SimpleDuck.resetTween start.*/
            resetTween: function () {
                if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                    this.fingerTransform.localPosition = UnityEngine.Vector3.FromVector2(this.fingerStartPosLandscape.$clone());
                } else {
                    this.fingerTransform.localPosition = UnityEngine.Vector3.FromVector2(this.fingerStartPosPortrait.$clone());
                }
                this.fingerImage.color = new pc.Color( this.fingerImage.color.r, this.fingerImage.color.g, this.fingerImage.color.b, 1.0 );
                this.slideTween();
            },
            /*SimpleDuck.resetTween end.*/

            /*SimpleDuck.HitBall start.*/
            HitBall: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startPos,
                    finPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.hitAngle = this.hitArrow.transform.rotation.z;
                                        startPos = this.golfClub.transform.rotation.$clone();
                                        finPos = this.golfClubHitRot.rotation.$clone();
                                        for (var t = 0.0; t < 1.0; t += UnityEngine.Time.deltaTime / this.hitspeed) {
                                            this.golfClub.transform.rotation = new pc.Quat().slerp( startPos, finPos, t );
                                        }
                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDuck.HitBall end.*/

            /*SimpleDuck.MoveBall start.*/
            MoveBall: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    ballStartLocation,
                    camFovStart,
                    camStartLocaiton,
                    flagStartLocation,
                    ballRotateVal,
                    t,
                    lerpPos,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.disableTap = true;
                                        ballStartLocation = this.golfBall.transform.position.$clone();

                                        this.hitArrow.GetComponent(ArrowBackAndForth).enabled = false;
                                        this.startText.SetActive(false);
                                        this.finger.SetActive(false);
                                        this.hitAngleBackground.SetActive(false);

                                        camFovStart = this.mainCam.fieldOfView;
                                        camStartLocaiton = this.transform.position.$clone();

                                        flagStartLocation = this.flag.transform.position.$clone();
                                        ballRotateVal = 90.0;


                                        t = 0.0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    if (this.ballSpeed > this.speedFloor) {
                                            this.ballSpeed -= this.golfBallDrag;
                                        }

                                        lerpPos = new pc.Vec3().lerp( ballStartLocation, this.golfBallFinalLocation.position, t );
                                        this.golfBall.transform.position = lerpPos.$clone();

                                        this.golfBall.transform.position = new pc.Vec3( lerpPos.x + Math.sin(t * UnityEngine.Mathf.PI) * (-1) * this.hitScale * this.hitAngle, lerpPos.y, lerpPos.z );

                                        this.golfBall.transform.LookAt(this.flag.transform);
                                        this.golfBall.transform.localRotation = new pc.Quat().setFromEulerAngles_Unity( ballRotateVal, 0.0, 0.0 );
                                        ballRotateVal += (this.golfBallRotateSpeed) * UnityEngine.Time.deltaTime;
                                        if (this.golfBallRotateSpeed > 100) {
                                            this.golfBallRotateSpeed -= this.golfBallRotateDrag * UnityEngine.Time.deltaTime;
                                        }


                                        this.mainCam.fieldOfView = pc.math.lerp(camFovStart, this.camFovFin, t);

                                        this.flag.transform.position = new pc.Vec3().lerp( flagStartLocation, this.flagFinLocation.position, t );

                                        if (t > this.camMoveSwitchValue) {

                                            this.mainCam.transform.position = new pc.Vec3().lerp( camStartLocaiton, this.camFinLocation.position, t );
                                            this.gameObject.transform.LookAt(this.golfBall.transform);
                                        }

                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime * this.ballSpeed;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    this.particleGoal.SetActive(true);

                                        this.StartCoroutine$1(this.SinkBall());

                                        //yield return new WaitForSeconds(1);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDuck.MoveBall end.*/

            /*SimpleDuck.SinkBall start.*/
            SinkBall: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    t = 0.0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    this.golfBall.transform.position = new pc.Vec3().lerp( this.golfBallFinalLocation.position, this.ballSinkLocation.position, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime / this.sinkTime;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {
                                    this.golfBall.SetActive(false);
                                        this.flag.SetActive(false);
                                        this.holeInOne.GetComponent(tweenText).startTween(this.endTextendYPos, this.endTextTweenTime, this.endTextclockwise, this.endTexteaseType);
                                        this.StartCoroutine$1(this.GameOverCameraMove());
                                        this.StartCoroutine$1(this.GameOver());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDuck.SinkBall end.*/

            /*SimpleDuck.GameOverCameraMove start.*/
            GameOverCameraMove: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    startAngle,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    startAngle = this.transform.rotation.$clone();

                                        t = 0.0;
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ( t < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 5;
                                    continue;
                                }
                                case 2: {
                                    this.mainCam.transform.position = new pc.Vec3().lerp( this.camFinLocation.position, this.camGameOverLocation.position, t );
                                        this.mainCam.transform.rotation = new pc.Quat().slerp( startAngle, this.camGameOverLocation.rotation, t );
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    t += UnityEngine.Time.deltaTime / this.camTimeGameOver;
                                    $step = 1;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDuck.GameOverCameraMove end.*/

            /*SimpleDuck.GameOver start.*/
            GameOver: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    //print("Start Finish Animation, Tween Camera Out, Delay then go to game or wait on press. maybe tie it to a boolean to modify");

                                        this.goalAnimAnimator.SetTrigger$1("StartGoalAnim");
                                        if (this.goalAnimationChoice === SimpleDuck.goalAnimObject.struckOil) {
                                            this.StartCoroutine$1(this.goalAnimationObject.GetComponent(oilAnimFix).struckOil());
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(4.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.hitArrow.GetComponent(ArrowBackAndForth).enabled = true;
                                        this.finger.SetActive(true);
                                        this.goalAnimationObject.SetActive(false);
                                        //golfClub.transform.position = golfClubstart.position;
                                        //golfClub.transform.rotation = golfClubstart.rotation;

                                        this.mainCam.fieldOfView = 60;
                                        this.flag.SetActive(true);
                                        this.flag.transform.position = this.flagStartPos.$clone();
                                        this.holeInOne.SetActive(false);
                                        this.secondBall.SetActive(true);
                                        this.golfClub.SetActive(false);
                                        this.interactionUI.SetActive(true);
                                        this.chargeArrow.SetActive(true);
                                        this.startText.SetActive(true);
                                        this.secondGolfClub.SetActive(true);
                                        this.landscape.transform.position = this.lvl2Transform.position.$clone();
                                        this.landscape.transform.localScale = this.lvl2Transform.localScale.$clone();
                                        this.landscape.transform.rotation = this.lvl2Transform.rotation.$clone();
                                        this.disableTap = false;


                                        this.mainCam.transform.position = this.camIntroPlay.transform.position.$clone();
                                        this.mainCam.transform.rotation = this.camIntroPlay.transform.rotation.$clone();
                                        $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SimpleDuck.GameOver end.*/

            /*SimpleDuck.showEndCard start.*/
            showEndCard: function () {

                this.title.SetActive(true);
                this.icon.SetActive(true);
                this.playNow.SetActive(true);
                this.StartCoroutine$1(this.TextBounce(this.playNowTransform));
                this.hitArrow.GetComponent(ArrowBackAndForth).enabled = false;
                this.finger.SetActive(false);
                this.interactionUI.SetActive(false);
                this.chargeArrow.SetActive(false);
                this.startText.SetActive(false);
                this.secondGolfClub.SetActive(false);
                this.interactionUI.SetActive(false);

            },
            /*SimpleDuck.showEndCard end.*/


        }
    });
    /*SimpleDuck end.*/

    /*SimpleDuck+goalAnimObject start.*/
    Bridge.define("SimpleDuck.goalAnimObject", {
        $kind: "nested enum",
        statics: {
            fields: {
                tubeman: 0,
                struckOil: 1
            }
        }
    });
    /*SimpleDuck+goalAnimObject end.*/

    /*TweenAction start.*/
    Bridge.define("TweenAction", {
        $kind: "enum",
        statics: {
            fields: {
                MOVE_X: 0,
                MOVE_Y: 1,
                MOVE_Z: 2,
                MOVE_LOCAL_X: 3,
                MOVE_LOCAL_Y: 4,
                MOVE_LOCAL_Z: 5,
                MOVE_CURVED: 6,
                MOVE_CURVED_LOCAL: 7,
                MOVE_SPLINE: 8,
                MOVE_SPLINE_LOCAL: 9,
                SCALE_X: 10,
                SCALE_Y: 11,
                SCALE_Z: 12,
                ROTATE_X: 13,
                ROTATE_Y: 14,
                ROTATE_Z: 15,
                ROTATE_AROUND: 16,
                ROTATE_AROUND_LOCAL: 17,
                CANVAS_ROTATEAROUND: 18,
                CANVAS_ROTATEAROUND_LOCAL: 19,
                CANVAS_PLAYSPRITE: 20,
                ALPHA: 21,
                TEXT_ALPHA: 22,
                CANVAS_ALPHA: 23,
                CANVASGROUP_ALPHA: 24,
                ALPHA_VERTEX: 25,
                COLOR: 26,
                CALLBACK_COLOR: 27,
                TEXT_COLOR: 28,
                CANVAS_COLOR: 29,
                CANVAS_MOVE_X: 30,
                CANVAS_MOVE_Y: 31,
                CANVAS_MOVE_Z: 32,
                CALLBACK: 33,
                MOVE: 34,
                MOVE_LOCAL: 35,
                MOVE_TO_TRANSFORM: 36,
                ROTATE: 37,
                ROTATE_LOCAL: 38,
                SCALE: 39,
                VALUE3: 40,
                GUI_MOVE: 41,
                GUI_MOVE_MARGIN: 42,
                GUI_SCALE: 43,
                GUI_ALPHA: 44,
                GUI_ROTATE: 45,
                DELAYED_SOUND: 46,
                CANVAS_MOVE: 47,
                CANVAS_SCALE: 48,
                CANVAS_SIZEDELTA: 49,
                FOLLOW: 50
            }
        }
    });
    /*TweenAction end.*/

    /*tweenText start.*/
    Bridge.define("tweenText", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            startYPos: 0
        },
        ctors: {
            init: function () {
                this.startYPos = 450.0;
            }
        },
        methods: {
            /*tweenText.startTween start.*/
            startTween: function (endYPos, tweenTime, clockwise, easeType) {
                if (endYPos === void 0) { endYPos = 600.0; }
                if (tweenTime === void 0) { tweenTime = 2.0; }
                if (clockwise === void 0) { clockwise = true; }
                if (easeType === void 0) { easeType = 16; }
                this.gameObject.transform.position = new pc.Vec3( this.gameObject.transform.position.x, this.startYPos, this.gameObject.transform.position.z );
                this.gameObject.SetActive(true);
                this.gameObject.transform.localScale = pc.Vec3.ZERO.clone();
                LeanTween.scale$1(this.gameObject, new pc.Vec3( 1, 1, 1 ).scale( 8 ), tweenTime).setEase(easeType);
                LeanTween.alpha$1(this.gameObject, 1, tweenTime).setEase(easeType);
                var rotation = 1;
                if (clockwise) {
                    rotation = -1;
                }
                LeanTween.rotateAround(this.gameObject, new pc.Vec3( 0, 0, 1 ), Bridge.Int.mul(360, rotation), tweenTime).setEase(easeType);
                LeanTween.moveLocalY(this.gameObject, endYPos, 2.0).setEase(easeType);
            },
            /*tweenText.startTween end.*/


        }
    });
    /*tweenText end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                Instance: null
            }
        },
        fields: {
            anim: null,
            endData: null,
            greet_Text: null,
            start_Text: null,
            winText_TMP: null,
            label_Text_TMP: null,
            install_Btn_Text_TMP: null,
            profile: null,
            button_install: null,
            end: null,
            start: null,
            particle: null
        },
        methods: {
            /*UIManager.Awake start.*/
            Awake: function () {
                UIManager.Instance = this;
            },
            /*UIManager.Awake end.*/

            /*UIManager.Start start.*/
            Start: function () {
                //StartPanel data assignment 
                this.greet_Text.text = this.endData.greetingText;
                this.start_Text.text = this.endData.startInstruction;

                //EndPanel data assignment
                this.winText_TMP.text = this.endData.endCardWin_Text;
                this.label_Text_TMP.text = this.endData.endCardLabel_text;

                this.install_Btn_Text_TMP.text = this.endData.install_CTA_BTN;
                this.profile.sprite = this.endData.endcard_IMG;
                this.button_install.sprite = this.endData.Install_BTN_Img;

                this.anim.Play$1("TapScreen");
            },
            /*UIManager.Start end.*/

            /*UIManager.Update start.*/
            Update: function () {
                if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.SwitchPanel();
                }
            },
            /*UIManager.Update end.*/

            /*UIManager.SwitchPanel start.*/
            SwitchPanel: function () {
                this.start.SetActive(false);
                this.end.SetActive(true);
                this.particle.SetActive(true);
            },
            /*UIManager.SwitchPanel end.*/


        }
    });
    /*UIManager end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine.UI","UnityEngine","UnityEngine.SceneManagement","TMPro","System.Collections.Generic"];

    /*AnimateEmojis start.*/
    $m("AnimateEmojis", function () { return {"nested":[AnimateEmojis.emojiAnimObject],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"endEmojiAnim","t":8,"sn":"endEmojiAnim","rt":$n[1].IEnumerator},{"a":2,"n":"playEmojiAnim","t":8,"sn":"playEmojiAnim","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CowgirlAwkward","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"CowgirlAwkward"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"CowgirlPleasant","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"CowgirlPleasant"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"GolfySobbing","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"GolfySobbing"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"GolfyThumbsUp","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"GolfyThumbsUp"},{"a":2,"n":"buttonImage","t":4,"rt":$n[2].Image,"sn":"buttonImage"},{"a":1,"n":"chosenSprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"chosenSprites"},{"a":2,"n":"duration","t":4,"rt":$n[0].Single,"sn":"duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("emoji in easing method", 0, "Emoji Animation", false)],"a":1,"n":"easeType","t":4,"rt":LeanTweenType,"sn":"easeType","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Emoji Animation Object", 0, "Emoji Animation", false)],"a":1,"n":"emojiAnimationChoice","t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"emojiAnimationChoice","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}},{"a":2,"n":"emojiAnimator","t":4,"rt":$n[3].Animator,"sn":"emojiAnimator"},{"a":2,"n":"emojiImage","t":4,"rt":$n[2].Image,"sn":"emojiImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"footballClap","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"footballClap"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"footballFume","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"footballFume"},{"a":1,"n":"index","t":4,"rt":$n[0].Int32,"sn":"index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Shot text", 0, "Emoji Animation", false)],"a":1,"n":"shotText","t":4,"rt":$n[0].String,"sn":"shotText"},{"a":2,"n":"shotTextGO","t":4,"rt":$n[3].GameObject,"sn":"shotTextGO"},{"a":1,"n":"startAnimation","t":4,"rt":$n[0].Boolean,"sn":"startAnimation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Emoji Animation sustain time", 0, "Emoji Animation", false)],"a":1,"n":"sustainTime","t":4,"rt":$n[0].Single,"sn":"sustainTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"texanNo","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"texanNo"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"texanNod","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"texanNod"},{"a":1,"n":"timer","t":4,"rt":$n[0].Single,"sn":"timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"trigger","t":4,"rt":$n[0].String,"sn":"trigger"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Emoji Animation tween in time", 0, "Emoji Animation", false)],"a":1,"n":"tweenInTime","t":4,"rt":$n[0].Single,"sn":"tweenInTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Emoji Animation tween out time", 0, "Emoji Animation", false)],"a":1,"n":"tweenOutTime","t":4,"rt":$n[0].Single,"sn":"tweenOutTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*AnimateEmojis end.*/

    /*AnimateEmojis+emojiAnimObject start.*/
    $m("AnimateEmojis.emojiAnimObject", function () { return {"td":AnimateEmojis,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CowgirlAwkward","is":true,"t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"CowgirlAwkward","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}},{"a":2,"n":"CowgirlPleasant","is":true,"t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"CowgirlPleasant","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}},{"a":2,"n":"GolfySobbing","is":true,"t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"GolfySobbing","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}},{"a":2,"n":"GolfyThumbsUp","is":true,"t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"GolfyThumbsUp","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}},{"a":2,"n":"footballClap","is":true,"t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"footballClap","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}},{"a":2,"n":"footballFume","is":true,"t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"footballFume","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}},{"a":2,"n":"texanNo","is":true,"t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"texanNo","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}},{"a":2,"n":"texanNod","is":true,"t":4,"rt":AnimateEmojis.emojiAnimObject,"sn":"texanNod","box":function ($v) { return Bridge.box($v, AnimateEmojis.emojiAnimObject, System.Enum.toStringFn(AnimateEmojis.emojiAnimObject));}}]}; }, $n);
    /*AnimateEmojis+emojiAnimObject end.*/

    /*ArrowBackAndForth start.*/
    $m("ArrowBackAndForth", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"SetRotationMax","t":8,"pi":[{"n":"scaleFactor","pt":$n[0].Single,"ps":0},{"n":"multiplier","pt":$n[0].Single,"ps":1}],"sn":"SetRotationMax","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"rotationMax","t":4,"rt":$n[0].Single,"sn":"rotationMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rotationMaxOriginal","t":4,"rt":$n[0].Single,"sn":"rotationMaxOriginal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startScale","t":4,"rt":$n[0].Single,"sn":"startScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ArrowBackAndForth end.*/

    /*BallInteraction start.*/
    $m("BallInteraction", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"actionBall","t":4,"rt":$n[3].GameObject,"sn":"actionBall"},{"a":2,"n":"collider","t":4,"rt":DetectObjectEnteringHitbox,"sn":"collider"},{"a":1,"n":"currentPositon","t":4,"rt":$n[3].Vector3,"sn":"currentPositon"},{"a":1,"n":"deltaPositon","t":4,"rt":$n[3].Vector3,"sn":"deltaPositon"},{"a":1,"n":"hold","t":4,"rt":$n[0].Boolean,"sn":"hold","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastPositon","t":4,"rt":$n[3].Vector3,"sn":"lastPositon"},{"a":2,"n":"mainCam","t":4,"rt":$n[3].Camera,"sn":"mainCam"},{"a":2,"n":"outerArrowRotationModifier","t":4,"rt":$n[0].Single,"sn":"outerArrowRotationModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"outerArrowScaleFloor","t":4,"rt":$n[0].Single,"sn":"outerArrowScaleFloor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"outerArrowScaleModifier","t":4,"rt":$n[0].Single,"sn":"outerArrowScaleModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"outerArrows","t":4,"rt":$n[3].Transform,"sn":"outerArrows"},{"a":2,"n":"reticle","t":4,"rt":$n[3].Transform,"sn":"reticle"},{"a":2,"n":"reticleRotationModifier","t":4,"rt":$n[0].Single,"sn":"reticleRotationModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"simpleDuckScript","t":4,"rt":SimpleDuck,"sn":"simpleDuckScript"},{"a":1,"n":"speedModifier","t":4,"rt":$n[0].Single,"sn":"speedModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Golf ball horizontal drag multiplier", 0, "Golf Ball Interaction", false)],"a":1,"n":"speedModifierHorizontal","t":4,"rt":$n[0].Single,"sn":"speedModifierHorizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Golf ball vertical drag multiplier", 0, "Golf Ball Interaction", false)],"a":1,"n":"speedModifierVertical","t":4,"rt":$n[0].Single,"sn":"speedModifierVertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"startBall","t":4,"rt":$n[3].GameObject,"sn":"startBall"},{"a":1,"n":"touch","t":4,"rt":$n[3].Touch,"sn":"touch"},{"a":1,"n":"transPosition","t":4,"rt":$n[3].Vector3,"sn":"transPosition"}]}; }, $n);
    /*BallInteraction end.*/

    /*DetectObjectEnteringHitbox start.*/
    $m("DetectObjectEnteringHitbox", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"Other","pt":$n[3].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[3].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"Other","pt":$n[3].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[3].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"aimCanvas","t":4,"rt":$n[3].GameObject,"sn":"aimCanvas"},{"a":2,"n":"ballInPosition","t":4,"rt":$n[0].Boolean,"sn":"ballInPosition","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"chargeCanvas","t":4,"rt":$n[3].GameObject,"sn":"chargeCanvas"},{"a":2,"n":"partSys","t":4,"rt":$n[3].ParticleSystem,"sn":"partSys"}]}; }, $n);
    /*DetectObjectEnteringHitbox end.*/

    /*HandleOrientation start.*/
    $m("HandleOrientation", function () { return {"nested":[HandleOrientation.ObjectScale],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleOrientationScaling","t":8,"sn":"HandleOrientationScaling","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"arrow","t":4,"rt":ArrowBackAndForth,"sn":"arrow"},{"a":2,"n":"arrowRotationScaler","t":4,"rt":$n[0].Single,"sn":"arrowRotationScaler","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"designedHeight","t":4,"rt":$n[0].Single,"sn":"designedHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"designedWidth","t":4,"rt":$n[0].Single,"sn":"designedWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"handleOrientationTrigger","t":4,"rt":$n[0].Boolean,"sn":"handleOrientationTrigger","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Objects that require scaling")],"a":2,"n":"objectsToScale","t":4,"rt":System.Array.type(HandleOrientation.ObjectScale),"sn":"objectsToScale"}]}; }, $n);
    /*HandleOrientation end.*/

    /*HandleOrientation+ObjectScale start.*/
    $m("HandleOrientation.ObjectScale", function () { return {"td":HandleOrientation,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Object","t":4,"rt":$n[3].GameObject,"sn":"Object"},{"a":2,"n":"maxScale","t":4,"rt":$n[3].Vector3,"sn":"maxScale"},{"a":2,"n":"minScale","t":4,"rt":$n[3].Vector3,"sn":"minScale"},{"a":2,"n":"ui","t":4,"rt":$n[0].Boolean,"sn":"ui","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*HandleOrientation+ObjectScale end.*/

    /*LeanSmooth start.*/
    $m("LeanSmooth", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"bounceOut","is":true,"t":8,"pi":[{"n":"current","pt":$n[0].Single,"ps":0},{"n":"target","pt":$n[0].Single,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[0].Single,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7},{"n":"hitDamping","dv":0.9,"o":true,"pt":$n[0].Single,"ps":8}],"sn":"bounceOut","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"bounceOut","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Color,"ps":0},{"n":"target","pt":$n[3].Color,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[3].Color,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7},{"n":"hitDamping","dv":0.9,"o":true,"pt":$n[0].Single,"ps":8}],"sn":"bounceOut$1","rt":$n[3].Color,"p":[$n[3].Color,$n[3].Color,$n[3].Color,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"bounceOut","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Vector3,"ps":0},{"n":"target","pt":$n[3].Vector3,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[3].Vector3,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7},{"n":"hitDamping","dv":0.9,"o":true,"pt":$n[0].Single,"ps":8}],"sn":"bounceOut$2","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[3].Vector3,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"damp","is":true,"t":8,"pi":[{"n":"current","pt":$n[0].Single,"ps":0},{"n":"target","pt":$n[0].Single,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[0].Single,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5}],"sn":"damp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"damp","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Color,"ps":0},{"n":"target","pt":$n[3].Color,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[3].Color,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5}],"sn":"damp$1","rt":$n[3].Color,"p":[$n[3].Color,$n[3].Color,$n[3].Color,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"damp","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Vector3,"ps":0},{"n":"target","pt":$n[3].Vector3,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[3].Vector3,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5}],"sn":"damp$2","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[3].Vector3,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"linear","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Color,"ps":0},{"n":"target","pt":$n[3].Color,"ps":1},{"n":"moveSpeed","pt":$n[0].Single,"ps":2}],"sn":"linear$1","rt":$n[3].Color,"p":[$n[3].Color,$n[3].Color,$n[0].Single]},{"a":2,"n":"linear","is":true,"t":8,"pi":[{"n":"current","pt":$n[0].Single,"ps":0},{"n":"target","pt":$n[0].Single,"ps":1},{"n":"moveSpeed","pt":$n[0].Single,"ps":2},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"linear","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"linear","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Vector3,"ps":0},{"n":"target","pt":$n[3].Vector3,"ps":1},{"n":"moveSpeed","pt":$n[0].Single,"ps":2},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"linear$2","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"spring","is":true,"t":8,"pi":[{"n":"current","pt":$n[0].Single,"ps":0},{"n":"target","pt":$n[0].Single,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[0].Single,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7}],"sn":"spring","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spring","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Color,"ps":0},{"n":"target","pt":$n[3].Color,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[3].Color,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7}],"sn":"spring$1","rt":$n[3].Color,"p":[$n[3].Color,$n[3].Color,$n[3].Color,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"spring","is":true,"t":8,"pi":[{"n":"current","pt":$n[3].Vector3,"ps":0},{"n":"target","pt":$n[3].Vector3,"ps":1},{"n":"currentVelocity","ref":true,"pt":$n[3].Vector3,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"deltaTime","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":6},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":7}],"sn":"spring$2","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[3].Vector3,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*LeanSmooth end.*/

    /*LeanTester start.*/
    $m("LeanTester", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"timeoutCheck","t":8,"sn":"timeoutCheck","rt":$n[1].IEnumerator},{"a":2,"n":"timeout","t":4,"rt":$n[0].Single,"sn":"timeout","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LeanTester end.*/

    /*LeanTest start.*/
    $m("LeanTest", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"debug","is":true,"t":8,"pi":[{"n":"name","pt":$n[0].String,"ps":0},{"n":"didPass","pt":$n[0].Boolean,"ps":1},{"n":"failExplaination","dv":null,"o":true,"pt":$n[0].String,"ps":2}],"sn":"debug","rt":$n[0].Void,"p":[$n[0].String,$n[0].Boolean,$n[0].String]},{"a":2,"n":"expect","is":true,"t":8,"pi":[{"n":"didPass","pt":$n[0].Boolean,"ps":0},{"n":"definition","pt":$n[0].String,"ps":1},{"n":"failExplaination","dv":null,"o":true,"pt":$n[0].String,"ps":2}],"sn":"expect","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].String,$n[0].String]},{"a":2,"n":"formatB","is":true,"t":8,"pi":[{"n":"str","pt":$n[0].String,"ps":0}],"sn":"formatB","rt":$n[0].String,"p":[$n[0].String]},{"a":2,"n":"formatBC","is":true,"t":8,"pi":[{"n":"str","pt":$n[0].String,"ps":0},{"n":"color","pt":$n[0].String,"ps":1}],"sn":"formatBC","rt":$n[0].String,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"formatC","is":true,"t":8,"pi":[{"n":"str","pt":$n[0].String,"ps":0},{"n":"color","pt":$n[0].String,"ps":1}],"sn":"formatC","rt":$n[0].String,"p":[$n[0].String,$n[0].String]},{"a":2,"n":"overview","is":true,"t":8,"sn":"overview","rt":$n[0].Void},{"a":2,"n":"padRight","is":true,"t":8,"pi":[{"n":"len","pt":$n[0].Int32,"ps":0}],"sn":"padRight","rt":$n[0].String,"p":[$n[0].Int32]},{"a":2,"n":"printOutLength","is":true,"t":8,"pi":[{"n":"str","pt":$n[0].String,"ps":0}],"sn":"printOutLength","rt":$n[0].Single,"p":[$n[0].String],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"expected","is":true,"t":4,"rt":$n[0].Int32,"sn":"expected","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"passes","is":true,"t":4,"rt":$n[0].Int32,"sn":"passes","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"tests","is":true,"t":4,"rt":$n[0].Int32,"sn":"tests","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"testsFinished","is":true,"t":4,"rt":$n[0].Boolean,"sn":"testsFinished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"timeout","is":true,"t":4,"rt":$n[0].Single,"sn":"timeout","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"timeoutStarted","is":true,"t":4,"rt":$n[0].Boolean,"sn":"timeoutStarted","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*LeanTest end.*/

    /*TweenAction start.*/
    $m("TweenAction", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ALPHA_VERTEX","is":true,"t":4,"rt":TweenAction,"sn":"ALPHA_VERTEX","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CALLBACK","is":true,"t":4,"rt":TweenAction,"sn":"CALLBACK","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CALLBACK_COLOR","is":true,"t":4,"rt":TweenAction,"sn":"CALLBACK_COLOR","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVASGROUP_ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"CANVASGROUP_ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_COLOR","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_COLOR","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_MOVE","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_MOVE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_MOVE_X","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_MOVE_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_MOVE_Y","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_MOVE_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_MOVE_Z","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_MOVE_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_PLAYSPRITE","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_PLAYSPRITE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_ROTATEAROUND","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_ROTATEAROUND","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_ROTATEAROUND_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_ROTATEAROUND_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_SCALE","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_SCALE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"CANVAS_SIZEDELTA","is":true,"t":4,"rt":TweenAction,"sn":"CANVAS_SIZEDELTA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"COLOR","is":true,"t":4,"rt":TweenAction,"sn":"COLOR","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"DELAYED_SOUND","is":true,"t":4,"rt":TweenAction,"sn":"DELAYED_SOUND","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"FOLLOW","is":true,"t":4,"rt":TweenAction,"sn":"FOLLOW","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"GUI_ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_MOVE","is":true,"t":4,"rt":TweenAction,"sn":"GUI_MOVE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_MOVE_MARGIN","is":true,"t":4,"rt":TweenAction,"sn":"GUI_MOVE_MARGIN","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_ROTATE","is":true,"t":4,"rt":TweenAction,"sn":"GUI_ROTATE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"GUI_SCALE","is":true,"t":4,"rt":TweenAction,"sn":"GUI_SCALE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE","is":true,"t":4,"rt":TweenAction,"sn":"MOVE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_CURVED","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_CURVED","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_CURVED_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_CURVED_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_LOCAL_X","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_LOCAL_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_LOCAL_Y","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_LOCAL_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_LOCAL_Z","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_LOCAL_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_SPLINE","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_SPLINE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_SPLINE_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_SPLINE_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_TO_TRANSFORM","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_TO_TRANSFORM","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_X","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_Y","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"MOVE_Z","is":true,"t":4,"rt":TweenAction,"sn":"MOVE_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_AROUND","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_AROUND","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_AROUND_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_AROUND_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_LOCAL","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_LOCAL","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_X","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_Y","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"ROTATE_Z","is":true,"t":4,"rt":TweenAction,"sn":"ROTATE_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"SCALE","is":true,"t":4,"rt":TweenAction,"sn":"SCALE","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"SCALE_X","is":true,"t":4,"rt":TweenAction,"sn":"SCALE_X","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"SCALE_Y","is":true,"t":4,"rt":TweenAction,"sn":"SCALE_Y","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"SCALE_Z","is":true,"t":4,"rt":TweenAction,"sn":"SCALE_Z","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"TEXT_ALPHA","is":true,"t":4,"rt":TweenAction,"sn":"TEXT_ALPHA","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"TEXT_COLOR","is":true,"t":4,"rt":TweenAction,"sn":"TEXT_COLOR","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"VALUE3","is":true,"t":4,"rt":TweenAction,"sn":"VALUE3","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}}]}; }, $n);
    /*TweenAction end.*/

    /*LeanTweenType start.*/
    $m("LeanTweenType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"animationCurve","is":true,"t":4,"rt":LeanTweenType,"sn":"animationCurve","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"clamp","is":true,"t":4,"rt":LeanTweenType,"sn":"clamp","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInBack","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInBack","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInBounce","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInBounce","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInCirc","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInCirc","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInCubic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInCubic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInElastic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInElastic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInExpo","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInExpo","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutBack","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutBack","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutBounce","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutBounce","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutCirc","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutCirc","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutCubic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutCubic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutElastic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutElastic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutExpo","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutExpo","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutQuad","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutQuad","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutQuart","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutQuart","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutQuint","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutQuint","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInOutSine","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInOutSine","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInQuad","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInQuad","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInQuart","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInQuart","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInQuint","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInQuint","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeInSine","is":true,"t":4,"rt":LeanTweenType,"sn":"easeInSine","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutBack","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutBack","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutBounce","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutBounce","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutCirc","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutCirc","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutCubic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutCubic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutElastic","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutElastic","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutExpo","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutExpo","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutQuad","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutQuad","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutQuart","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutQuart","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutQuint","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutQuint","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeOutSine","is":true,"t":4,"rt":LeanTweenType,"sn":"easeOutSine","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeShake","is":true,"t":4,"rt":LeanTweenType,"sn":"easeShake","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"easeSpring","is":true,"t":4,"rt":LeanTweenType,"sn":"easeSpring","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"linear","is":true,"t":4,"rt":LeanTweenType,"sn":"linear","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"notUsed","is":true,"t":4,"rt":LeanTweenType,"sn":"notUsed","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"once","is":true,"t":4,"rt":LeanTweenType,"sn":"once","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"pingPong","is":true,"t":4,"rt":LeanTweenType,"sn":"pingPong","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"punch","is":true,"t":4,"rt":LeanTweenType,"sn":"punch","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}}]}; }, $n);
    /*LeanTweenType end.*/

    /*LeanProp start.*/
    $m("LeanProp", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","is":true,"t":4,"rt":LeanProp,"sn":"color","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"localPosition","is":true,"t":4,"rt":LeanProp,"sn":"localPosition","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"localX","is":true,"t":4,"rt":LeanProp,"sn":"localX","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"localY","is":true,"t":4,"rt":LeanProp,"sn":"localY","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"localZ","is":true,"t":4,"rt":LeanProp,"sn":"localZ","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"position","is":true,"t":4,"rt":LeanProp,"sn":"position","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"scale","is":true,"t":4,"rt":LeanProp,"sn":"scale","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"x","is":true,"t":4,"rt":LeanProp,"sn":"x","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"y","is":true,"t":4,"rt":LeanProp,"sn":"y","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}},{"a":2,"n":"z","is":true,"t":4,"rt":LeanProp,"sn":"z","box":function ($v) { return Bridge.box($v, LeanProp, System.Enum.toStringFn(LeanProp));}}]}; }, $n);
    /*LeanProp end.*/

    /*LeanTween start.*/
    $m("LeanTween", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"add","is":true,"t":8,"pi":[{"n":"a","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"b","pt":$n[3].Vector3,"ps":1}],"sn":"add","rt":System.Array.type(UnityEngine.Vector3),"p":[System.Array.type(UnityEngine.Vector3),$n[3].Vector3]},{"a":2,"n":"addListener","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"addListener","rt":$n[0].Void,"p":[$n[0].Int32,Function]},{"a":2,"n":"addListener","is":true,"t":8,"pi":[{"n":"caller","pt":$n[3].GameObject,"ps":0},{"n":"eventId","pt":$n[0].Int32,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"addListener$1","rt":$n[0].Void,"p":[$n[3].GameObject,$n[0].Int32,Function]},{"a":2,"n":"alpha","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alpha","rt":LTDescr,"p":[LTRect,$n[0].Single,$n[0].Single]},{"a":2,"n":"alpha","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alpha$1","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"alpha","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alpha$2","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"alphaCanvas","is":true,"t":8,"pi":[{"n":"canvasGroup","pt":$n[3].CanvasGroup,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alphaCanvas","rt":LTDescr,"p":[$n[3].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"alphaText","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alphaText","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"alphaVertex","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"alphaVertex","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"cancel$1","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"cancel$3","rt":$n[0].Void,"p":[$n[3].GameObject]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"rect","pt":$n[3].RectTransform,"ps":0}],"sn":"cancel$6","rt":$n[0].Void,"p":[$n[3].RectTransform]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1}],"sn":"cancel","rt":$n[0].Void,"p":[LTRect,$n[0].Int32]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0},{"n":"callOnComplete","pt":$n[0].Boolean,"ps":1}],"sn":"cancel$2","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnComplete","pt":$n[0].Boolean,"ps":1}],"sn":"cancel$4","rt":$n[0].Void,"p":[$n[3].GameObject,$n[0].Boolean]},{"a":2,"n":"cancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1},{"n":"callOnComplete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"cancel$5","rt":$n[0].Void,"p":[$n[3].GameObject,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"cancelAll","is":true,"t":8,"sn":"cancelAll","rt":$n[0].Void},{"a":2,"n":"cancelAll","is":true,"t":8,"pi":[{"n":"callComplete","pt":$n[0].Boolean,"ps":0}],"sn":"cancelAll$1","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"clerp","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"clerp","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"closestRot","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1}],"sn":"closestRot","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"color","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"color","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Color,$n[0].Single]},{"a":2,"n":"color","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"color$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Color,$n[0].Single]},{"a":2,"n":"colorText","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"colorText","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Color,$n[0].Single]},{"a":2,"n":"delayedCall","is":true,"t":8,"pi":[{"n":"delayTime","pt":$n[0].Single,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"delayedCall","rt":LTDescr,"p":[$n[0].Single,Function]},{"a":2,"n":"delayedCall","is":true,"t":8,"pi":[{"n":"delayTime","pt":$n[0].Single,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"delayedCall$1","rt":LTDescr,"p":[$n[0].Single,Function]},{"a":2,"n":"delayedCall","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"delayedCall$2","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,Function]},{"a":2,"n":"delayedCall","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"delayedCall$3","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,Function]},{"a":2,"n":"delayedSound","is":true,"t":8,"pi":[{"n":"audio","pt":$n[3].AudioClip,"ps":0},{"n":"pos","pt":$n[3].Vector3,"ps":1},{"n":"volume","pt":$n[0].Single,"ps":2}],"sn":"delayedSound","rt":LTDescr,"p":[$n[3].AudioClip,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"delayedSound","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"audio","pt":$n[3].AudioClip,"ps":1},{"n":"pos","pt":$n[3].Vector3,"ps":2},{"n":"volume","pt":$n[0].Single,"ps":3}],"sn":"delayedSound$1","rt":LTDescr,"p":[$n[3].GameObject,$n[3].AudioClip,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"descr","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"descr","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"description","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"description","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"descriptions","is":true,"t":8,"pi":[{"n":"gameObject","dv":null,"o":true,"pt":$n[3].GameObject,"ps":0}],"sn":"descriptions","rt":System.Array.type(LTDescr),"p":[$n[3].GameObject]},{"a":2,"n":"destroyAfter","is":true,"t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1}],"sn":"destroyAfter","rt":LTDescr,"p":[LTRect,$n[0].Single]},{"a":2,"n":"dispatchEvent","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0}],"sn":"dispatchEvent","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"dispatchEvent","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0},{"n":"data","pt":$n[0].Object,"ps":1}],"sn":"dispatchEvent$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Object]},{"a":2,"n":"drawBezierPath","is":true,"t":8,"pi":[{"n":"a","pt":$n[3].Vector3,"ps":0},{"n":"b","pt":$n[3].Vector3,"ps":1},{"n":"c","pt":$n[3].Vector3,"ps":2},{"n":"d","pt":$n[3].Vector3,"ps":3},{"n":"arrowSize","dv":0.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"arrowTransform","dv":null,"o":true,"pt":$n[3].Transform,"ps":5}],"sn":"drawBezierPath","rt":$n[0].Void,"p":[$n[3].Vector3,$n[3].Vector3,$n[3].Vector3,$n[3].Vector3,$n[0].Single,$n[3].Transform]},{"a":2,"n":"easeInBack","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"easeInBack","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInBounce","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInBounce","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInCirc","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInCirc","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInCubic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInCubic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInElastic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3},{"n":"period","dv":0.3,"o":true,"pt":$n[0].Single,"ps":4}],"sn":"easeInElastic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInExpo","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInExpo","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutBack","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"easeInOutBack","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutBounce","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutBounce","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutCirc","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutCirc","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutCubic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutCubic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutElastic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3},{"n":"period","dv":0.3,"o":true,"pt":$n[0].Single,"ps":4}],"sn":"easeInOutElastic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutExpo","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutExpo","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuad","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuad","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuadOpt","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"diff","pt":$n[0].Single,"ps":1},{"n":"ratioPassed","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuadOpt","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuadOpt","is":true,"t":8,"pi":[{"n":"start","pt":$n[3].Vector3,"ps":0},{"n":"diff","pt":$n[3].Vector3,"ps":1},{"n":"ratioPassed","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuadOpt$1","rt":$n[3].Vector3,"p":[$n[3].Vector3,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"easeInOutQuadOpt2","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"diffBy2","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"val2","pt":$n[0].Single,"ps":3}],"sn":"easeInOutQuadOpt2","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuart","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuart","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutQuint","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutQuint","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInOutSine","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInOutSine","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInQuad","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInQuad","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInQuadOpt","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"diff","pt":$n[0].Single,"ps":1},{"n":"ratioPassed","pt":$n[0].Single,"ps":2}],"sn":"easeInQuadOpt","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInQuart","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInQuart","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInQuint","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInQuint","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeInSine","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeInSine","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutBack","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3}],"sn":"easeOutBack","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutBounce","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutBounce","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutCirc","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutCirc","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutCubic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutCubic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutElastic","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2},{"n":"overshoot","dv":1.0,"o":true,"pt":$n[0].Single,"ps":3},{"n":"period","dv":0.3,"o":true,"pt":$n[0].Single,"ps":4}],"sn":"easeOutElastic","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutExpo","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutExpo","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutQuad","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutQuad","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutQuadOpt","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"diff","pt":$n[0].Single,"ps":1},{"n":"ratioPassed","pt":$n[0].Single,"ps":2}],"sn":"easeOutQuadOpt","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutQuart","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutQuart","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutQuint","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutQuint","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeOutSine","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"easeOutSine","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"followBounceOut","is":true,"t":8,"pi":[{"n":"trans","pt":$n[3].Transform,"ps":0},{"n":"target","pt":$n[3].Transform,"ps":1},{"n":"prop","pt":LeanProp,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":6},{"n":"hitDamping","dv":0.9,"o":true,"pt":$n[0].Single,"ps":7}],"sn":"followBounceOut","rt":LTDescr,"p":[$n[3].Transform,$n[3].Transform,LeanProp,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"followDamp","is":true,"t":8,"pi":[{"n":"trans","pt":$n[3].Transform,"ps":0},{"n":"target","pt":$n[3].Transform,"ps":1},{"n":"prop","pt":LeanProp,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4}],"sn":"followDamp","rt":LTDescr,"p":[$n[3].Transform,$n[3].Transform,LeanProp,$n[0].Single,$n[0].Single]},{"a":2,"n":"followLinear","is":true,"t":8,"pi":[{"n":"trans","pt":$n[3].Transform,"ps":0},{"n":"target","pt":$n[3].Transform,"ps":1},{"n":"prop","pt":LeanProp,"ps":2},{"n":"moveSpeed","pt":$n[0].Single,"ps":3}],"sn":"followLinear","rt":LTDescr,"p":[$n[3].Transform,$n[3].Transform,LeanProp,$n[0].Single]},{"a":2,"n":"followSpring","is":true,"t":8,"pi":[{"n":"trans","pt":$n[3].Transform,"ps":0},{"n":"target","pt":$n[3].Transform,"ps":1},{"n":"prop","pt":LeanProp,"ps":2},{"n":"smoothTime","pt":$n[0].Single,"ps":3},{"n":"maxSpeed","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"friction","dv":2.0,"o":true,"pt":$n[0].Single,"ps":5},{"n":"accelRate","dv":0.5,"o":true,"pt":$n[0].Single,"ps":6}],"sn":"followSpring","rt":LTDescr,"p":[$n[3].Transform,$n[3].Transform,LeanProp,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"init","is":true,"t":8,"sn":"init","rt":$n[0].Void},{"a":2,"n":"init","is":true,"t":8,"pi":[{"n":"maxSimultaneousTweens","pt":$n[0].Int32,"ps":0}],"sn":"init$1","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"init","is":true,"t":8,"pi":[{"n":"maxSimultaneousTweens","pt":$n[0].Int32,"ps":0},{"n":"maxSimultaneousSequences","pt":$n[0].Int32,"ps":1}],"sn":"init$2","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":1,"n":"internalOnLevelWasLoaded","is":true,"t":8,"pi":[{"n":"lvl","pt":$n[0].Int32,"ps":0}],"sn":"internalOnLevelWasLoaded","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"isPaused","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"isPaused","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isPaused","is":true,"t":8,"pi":[{"n":"gameObject","dv":null,"o":true,"pt":$n[3].GameObject,"ps":0}],"sn":"isPaused$1","rt":$n[0].Boolean,"p":[$n[3].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isPaused","is":true,"t":8,"pi":[{"n":"rect","pt":$n[3].RectTransform,"ps":0}],"sn":"isPaused$2","rt":$n[0].Boolean,"p":[$n[3].RectTransform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTweening","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0}],"sn":"isTweening","rt":$n[0].Boolean,"p":[LTRect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTweening","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"isTweening$1","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTweening","is":true,"t":8,"pi":[{"n":"gameObject","dv":null,"o":true,"pt":$n[3].GameObject,"ps":0}],"sn":"isTweening$2","rt":$n[0].Boolean,"p":[$n[3].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTweening","is":true,"t":8,"pi":[{"n":"rect","pt":$n[3].RectTransform,"ps":0}],"sn":"isTweening$3","rt":$n[0].Boolean,"p":[$n[3].RectTransform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"linear","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"linear","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"logError","is":true,"t":8,"pi":[{"n":"error","pt":$n[0].String,"ps":0}],"sn":"logError","rt":$n[0].Object,"p":[$n[0].String]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move","rt":LTDescr,"p":[LTRect,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$1","rt":LTDescr,"p":[$n[3].GameObject,LTBezierPath,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$2","rt":LTDescr,"p":[$n[3].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Transform,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$3","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Transform,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$4","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$5","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$6","rt":LTDescr,"p":[$n[3].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"move","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"move$7","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"moveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocal","rt":LTDescr,"p":[$n[3].GameObject,LTBezierPath,$n[0].Single]},{"a":2,"n":"moveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocal$1","rt":LTDescr,"p":[$n[3].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"moveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocal$2","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"moveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocal$3","rt":LTDescr,"p":[$n[3].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"moveLocalX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocalX","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveLocalY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocalY","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveLocalZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveLocalZ","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveMargin","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveMargin","rt":LTDescr,"p":[LTRect,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"moveSpline","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveSpline","rt":LTDescr,"p":[$n[3].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"moveSpline","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveSpline$1","rt":LTDescr,"p":[$n[3].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"moveSplineLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveSplineLocal","rt":LTDescr,"p":[$n[3].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"moveX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveX","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveX","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveX$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveY","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveY","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveY$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveZ","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"moveZ","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"moveZ$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":1,"n":"onLevelWasLoaded54","is":true,"t":8,"pi":[{"n":"scene","pt":LunaUnity.Objects.Scene,"ps":0},{"n":"mode","pt":$n[4].LoadSceneMode,"ps":1}],"sn":"onLevelWasLoaded54","rt":$n[0].Void,"p":[LunaUnity.Objects.Scene,$n[4].LoadSceneMode]},{"a":2,"n":"options","is":true,"t":8,"sn":"options","rt":LTDescr},{"a":2,"n":"options","is":true,"t":8,"pi":[{"n":"seed","pt":LTDescr,"ps":0}],"sn":"options$1","rt":LTDescr,"p":[LTDescr]},{"a":2,"n":"pause","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"pause","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"pause","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"pause$1","rt":$n[0].Void,"p":[$n[3].GameObject]},{"a":2,"n":"pause","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1}],"sn":"pause$2","rt":$n[0].Void,"p":[$n[3].GameObject,$n[0].Int32]},{"a":2,"n":"pauseAll","is":true,"t":8,"sn":"pauseAll","rt":$n[0].Void},{"a":2,"n":"play","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"sprites","pt":System.Array.type(UnityEngine.Sprite),"ps":1}],"sn":"play","rt":LTDescr,"p":[$n[3].RectTransform,System.Array.type(UnityEngine.Sprite)]},{"a":1,"n":"pushNewTween","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2},{"n":"tween","pt":LTDescr,"ps":3}],"sn":"pushNewTween","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single,LTDescr]},{"a":2,"n":"removeListener","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0}],"sn":"removeListener","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"removeListener","is":true,"t":8,"pi":[{"n":"eventId","pt":$n[0].Int32,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"removeListener$1","rt":$n[0].Boolean,"p":[$n[0].Int32,Function],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"removeListener","is":true,"t":8,"pi":[{"n":"caller","pt":$n[3].GameObject,"ps":0},{"n":"eventId","pt":$n[0].Int32,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"removeListener$2","rt":$n[0].Boolean,"p":[$n[3].GameObject,$n[0].Int32,Function],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"removeTween","is":true,"t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"removeTween","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"removeTween","is":true,"t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1}],"sn":"removeTween$1","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"reset","is":true,"t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"resume","is":true,"t":8,"pi":[{"n":"uniqueId","pt":$n[0].Int32,"ps":0}],"sn":"resume","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"resume","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"resume$1","rt":$n[0].Void,"p":[$n[3].GameObject]},{"a":2,"n":"resume","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1}],"sn":"resume$2","rt":$n[0].Void,"p":[$n[3].GameObject,$n[0].Int32]},{"a":2,"n":"resumeAll","is":true,"t":8,"sn":"resumeAll","rt":$n[0].Void},{"a":2,"n":"rotate","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotate","rt":LTDescr,"p":[LTRect,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotate","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotate$1","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"rotate","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotate$2","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotate","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotate$3","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"rotateAround","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"rotateAround","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateAround","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"rotateAround$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateAroundLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"rotateAroundLocal","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateAroundLocal","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"rotateAroundLocal$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotateLocal","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"rotateX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotateX","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotateY","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"rotateZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"rotateZ","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"scale","is":true,"t":8,"pi":[{"n":"ltRect","pt":LTRect,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scale","rt":LTDescr,"p":[LTRect,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"scale","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scale$1","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"scale","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scale$2","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"scaleX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scaleX","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"scaleY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scaleY","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"scaleZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"scaleZ","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"sequence","is":true,"t":8,"pi":[{"n":"initSequence","dv":true,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"sequence","rt":LTSeq,"p":[$n[0].Boolean]},{"a":2,"n":"size","is":true,"t":8,"pi":[{"n":"rectTrans","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"size","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"spring","is":true,"t":8,"pi":[{"n":"start","pt":$n[0].Single,"ps":0},{"n":"end","pt":$n[0].Single,"ps":1},{"n":"val","pt":$n[0].Single,"ps":2}],"sn":"spring","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"textAlpha","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"textAlpha","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"textColor","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"textColor","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Color,$n[0].Single]},{"a":2,"n":"tweenOnCurve","is":true,"t":8,"pi":[{"n":"tweenDescr","pt":LTDescr,"ps":0},{"n":"ratioPassed","pt":$n[0].Single,"ps":1}],"sn":"tweenOnCurve","rt":$n[0].Single,"p":[LTDescr,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tweenOnCurveVector","is":true,"t":8,"pi":[{"n":"tweenDescr","pt":LTDescr,"ps":0},{"n":"ratioPassed","pt":$n[0].Single,"ps":1}],"sn":"tweenOnCurveVector","rt":$n[3].Vector3,"p":[LTDescr,$n[0].Single]},{"a":2,"n":"update","is":true,"t":8,"sn":"update","rt":$n[0].Void},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"value","rt":LTDescr,"p":[$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"from","pt":$n[0].Single,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"value$8","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"from","pt":$n[3].Color,"ps":1},{"n":"to","pt":$n[3].Color,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"value$9","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Color,$n[3].Color,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"from","pt":$n[3].Vector2,"ps":1},{"n":"to","pt":$n[3].Vector2,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"value$10","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector2,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"from","pt":$n[3].Vector3,"ps":1},{"n":"to","pt":$n[3].Vector3,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"value$11","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$1","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdateRatio","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$6","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$5","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[3].Color,"ps":2},{"n":"to","pt":$n[3].Color,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$2","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[3].Color,$n[3].Color,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[3].Color,"ps":2},{"n":"to","pt":$n[3].Color,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$7","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[3].Color,$n[3].Color,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[3].Vector2,"ps":2},{"n":"to","pt":$n[3].Vector2,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$3","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[3].Vector2,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"value","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[3].Vector3,"ps":2},{"n":"to","pt":$n[3].Vector3,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"value$4","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[3].Vector3,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"maxSearch","is":true,"t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_maxSearch","t":8,"rt":$n[0].Int32,"fg":"maxSearch","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"maxSearch"},{"a":2,"n":"maxSimulataneousTweens","is":true,"t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_maxSimulataneousTweens","t":8,"rt":$n[0].Int32,"fg":"maxSimulataneousTweens","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"maxSimulataneousTweens"},{"a":2,"n":"tweenEmpty","is":true,"t":16,"rt":$n[3].GameObject,"g":{"a":2,"n":"get_tweenEmpty","t":8,"rt":$n[3].GameObject,"fg":"tweenEmpty","is":true},"fn":"tweenEmpty"},{"a":2,"n":"tweensRunning","is":true,"t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_tweensRunning","t":8,"rt":$n[0].Int32,"fg":"tweensRunning","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"tweensRunning"},{"a":2,"n":"EVENTS_MAX","is":true,"t":4,"rt":$n[0].Int32,"sn":"EVENTS_MAX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"INIT_LISTENERS_MAX","is":true,"t":4,"rt":$n[0].Int32,"sn":"INIT_LISTENERS_MAX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"LISTENERS_MAX","is":true,"t":4,"rt":$n[0].Int32,"sn":"LISTENERS_MAX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"PI_DIV2","is":true,"t":4,"rt":$n[0].Single,"sn":"PI_DIV2","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_tweenEmpty","is":true,"t":4,"rt":$n[3].GameObject,"sn":"_tweenEmpty"},{"a":2,"n":"d","is":true,"t":4,"rt":LTDescr,"sn":"d"},{"a":2,"n":"dtActual","is":true,"t":4,"rt":$n[0].Single,"sn":"dtActual","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dtEstimated","is":true,"t":4,"rt":$n[0].Single,"sn":"dtEstimated","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dtManual","is":true,"t":4,"rt":$n[0].Single,"sn":"dtManual","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"eventListeners","is":true,"t":4,"rt":$n[0].Array.type(Function),"sn":"eventListeners"},{"a":1,"n":"eventsMaxSearch","is":true,"t":4,"rt":$n[0].Int32,"sn":"eventsMaxSearch","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"finishedCnt","is":true,"t":4,"rt":$n[0].Int32,"sn":"finishedCnt","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"frameRendered","is":true,"t":4,"rt":$n[0].Int32,"sn":"frameRendered","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"global_counter","is":true,"t":4,"rt":$n[0].UInt32,"sn":"global_counter","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":1,"n":"goListeners","is":true,"t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"goListeners"},{"a":1,"n":"i","is":true,"t":4,"rt":$n[0].Int32,"sn":"i","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"j","is":true,"t":4,"rt":$n[0].Int32,"sn":"j","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"maxSequences","is":true,"t":4,"rt":$n[0].Int32,"sn":"maxSequences","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"maxTweenReached","is":true,"t":4,"rt":$n[0].Int32,"sn":"maxTweenReached","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"maxTweens","is":true,"t":4,"rt":$n[0].Int32,"sn":"maxTweens","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"punch","is":true,"t":4,"rt":pc.AnimationCurve,"sn":"punch"},{"a":1,"n":"sequences","is":true,"t":4,"rt":System.Array.type(LTSeq),"sn":"sequences"},{"a":2,"n":"shake","is":true,"t":4,"rt":pc.AnimationCurve,"sn":"shake"},{"a":2,"n":"startSearch","is":true,"t":4,"rt":$n[0].Int32,"sn":"startSearch","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tau","is":true,"t":4,"rt":$n[0].Single,"sn":"tau","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"throwErrors","is":true,"t":4,"rt":$n[0].Boolean,"sn":"throwErrors","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"tween","is":true,"t":4,"rt":LTDescr,"sn":"tween"},{"a":1,"n":"tweenMaxSearch","is":true,"t":4,"rt":$n[0].Int32,"sn":"tweenMaxSearch","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"tweens","is":true,"t":4,"rt":System.Array.type(LTDescr),"sn":"tweens"},{"a":1,"n":"tweensFinished","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"tweensFinished"},{"a":1,"n":"tweensFinishedIds","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"tweensFinishedIds"}]}; }, $n);
    /*LeanTween end.*/

    /*LTUtility start.*/
    $m("LTUtility", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"reverse","is":true,"t":8,"pi":[{"n":"arr","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"reverse","rt":System.Array.type(UnityEngine.Vector3),"p":[System.Array.type(UnityEngine.Vector3)]}]}; }, $n);
    /*LTUtility end.*/

    /*LTBezier start.*/
    $m("LTBezier", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].Vector3,$n[3].Vector3,$n[3].Vector3,$n[3].Vector3,$n[0].Single],"pi":[{"n":"a","pt":$n[3].Vector3,"ps":0},{"n":"b","pt":$n[3].Vector3,"ps":1},{"n":"c","pt":$n[3].Vector3,"ps":2},{"n":"d","pt":$n[3].Vector3,"ps":3},{"n":"precision","pt":$n[0].Single,"ps":4}],"sn":"ctor"},{"a":1,"n":"bezierPoint","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"bezierPoint","rt":$n[3].Vector3,"p":[$n[0].Single]},{"a":1,"n":"map","t":8,"pi":[{"n":"u","pt":$n[0].Single,"ps":0}],"sn":"map","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"point","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"point","rt":$n[3].Vector3,"p":[$n[0].Single]},{"a":1,"n":"a","t":4,"rt":$n[3].Vector3,"sn":"a"},{"a":1,"n":"aa","t":4,"rt":$n[3].Vector3,"sn":"aa"},{"a":1,"n":"arcLengths","t":4,"rt":$n[0].Array.type(System.Single),"sn":"arcLengths"},{"a":1,"n":"bb","t":4,"rt":$n[3].Vector3,"sn":"bb"},{"a":1,"n":"cc","t":4,"rt":$n[3].Vector3,"sn":"cc"},{"a":1,"n":"len","t":4,"rt":$n[0].Single,"sn":"len","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"length","t":4,"rt":$n[0].Single,"sn":"length","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*LTBezier end.*/

    /*LTBezierPath start.*/
    $m("LTBezierPath", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[System.Array.type(UnityEngine.Vector3)],"pi":[{"n":"pts_","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"$ctor1"},{"a":2,"n":"gizmoDraw","t":8,"pi":[{"n":"t","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"gizmoDraw","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"place","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"place","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"place","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1},{"n":"worldUp","pt":$n[3].Vector3,"ps":2}],"sn":"place$1","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single,$n[3].Vector3]},{"a":2,"n":"place2d","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"place2d","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"placeLocal","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"placeLocal","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"placeLocal","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1},{"n":"worldUp","pt":$n[3].Vector3,"ps":2}],"sn":"placeLocal$1","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single,$n[3].Vector3]},{"a":2,"n":"placeLocal2d","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"placeLocal2d","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"point","t":8,"pi":[{"n":"ratio","pt":$n[0].Single,"ps":0}],"sn":"point","rt":$n[3].Vector3,"p":[$n[0].Single]},{"a":2,"n":"ratioAtPoint","t":8,"pi":[{"n":"pt","pt":$n[3].Vector3,"ps":0},{"n":"precision","dv":0.01,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"ratioAtPoint","rt":$n[0].Single,"p":[$n[3].Vector3,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"setPoints","t":8,"pi":[{"n":"pts_","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"setPoints","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3)]},{"a":2,"n":"distance","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_distance","t":8,"rt":$n[0].Single,"fg":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"distance"},{"a":1,"n":"beziers","t":4,"rt":System.Array.type(LTBezier),"sn":"beziers"},{"a":1,"n":"currentBezier","t":4,"rt":$n[0].Int32,"sn":"currentBezier","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"length","t":4,"rt":$n[0].Single,"sn":"length","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"lengthRatio","t":4,"rt":$n[0].Array.type(System.Single),"sn":"lengthRatio"},{"a":2,"n":"orientToPath","t":4,"rt":$n[0].Boolean,"sn":"orientToPath","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"orientToPath2d","t":4,"rt":$n[0].Boolean,"sn":"orientToPath2d","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"previousBezier","t":4,"rt":$n[0].Int32,"sn":"previousBezier","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"pts","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"pts"}]}; }, $n);
    /*LTBezierPath end.*/

    /*LTSpline start.*/
    $m("LTSpline", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"p":[System.Array.type(UnityEngine.Vector3)],"pi":[{"n":"pts","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Boolean],"pi":[{"n":"pts","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"constantSpeed","pt":$n[0].Boolean,"ps":1}],"sn":"$ctor1"},{"a":2,"n":"drawGizmo","t":8,"pi":[{"n":"color","pt":$n[3].Color,"ps":0}],"sn":"drawGizmo","rt":$n[0].Void,"p":[$n[3].Color]},{"a":2,"n":"drawGizmo","is":true,"t":8,"pi":[{"n":"arr","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"color","pt":$n[3].Color,"ps":1}],"sn":"drawGizmo","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),$n[3].Color]},{"a":2,"n":"drawLine","is":true,"t":8,"pi":[{"n":"arr","pt":System.Array.type(UnityEngine.Transform),"ps":0},{"n":"width","pt":$n[0].Single,"ps":1},{"n":"color","pt":$n[3].Color,"ps":2}],"sn":"drawLine","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Transform),$n[0].Single,$n[3].Color]},{"a":2,"n":"drawLinesGLLines","t":8,"pi":[{"n":"outlineMaterial","pt":$n[3].Material,"ps":0},{"n":"color","pt":$n[3].Color,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2}],"sn":"drawLinesGLLines","rt":$n[0].Void,"p":[$n[3].Material,$n[3].Color,$n[0].Single]},{"a":2,"n":"generateVectors","t":8,"sn":"generateVectors","rt":System.Array.type(UnityEngine.Vector3)},{"a":2,"n":"gizmoDraw","t":8,"pi":[{"n":"t","dv":-1.0,"o":true,"pt":$n[0].Single,"ps":0}],"sn":"gizmoDraw","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"init","t":8,"pi":[{"n":"pts","pt":System.Array.type(UnityEngine.Vector3),"ps":0},{"n":"constantSpeed","pt":$n[0].Boolean,"ps":1}],"sn":"init","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3),$n[0].Boolean]},{"a":2,"n":"interp","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"interp","rt":$n[3].Vector3,"p":[$n[0].Single]},{"a":2,"n":"map","t":8,"pi":[{"n":"u","pt":$n[0].Single,"ps":0}],"sn":"map","rt":$n[3].Vector3,"p":[$n[0].Single]},{"a":2,"n":"place","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"place","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"place","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1},{"n":"worldUp","pt":$n[3].Vector3,"ps":2}],"sn":"place$1","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single,$n[3].Vector3]},{"a":2,"n":"place2d","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"place2d","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"placeLocal","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"placeLocal","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"placeLocal","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1},{"n":"worldUp","pt":$n[3].Vector3,"ps":2}],"sn":"placeLocal$1","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single,$n[3].Vector3]},{"a":2,"n":"placeLocal2d","t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"ratio","pt":$n[0].Single,"ps":1}],"sn":"placeLocal2d","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"point","t":8,"pi":[{"n":"ratio","pt":$n[0].Single,"ps":0}],"sn":"point","rt":$n[3].Vector3,"p":[$n[0].Single]},{"a":2,"n":"ratioAtPoint","t":8,"pi":[{"n":"pt","pt":$n[3].Vector3,"ps":0}],"sn":"ratioAtPoint","rt":$n[0].Single,"p":[$n[3].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"DISTANCE_COUNT","is":true,"t":4,"rt":$n[0].Int32,"sn":"DISTANCE_COUNT","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"SUBLINE_COUNT","is":true,"t":4,"rt":$n[0].Int32,"sn":"SUBLINE_COUNT","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"constantSpeed","t":4,"rt":$n[0].Boolean,"sn":"constantSpeed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"currPt","t":4,"rt":$n[0].Int32,"sn":"currPt","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"distance","t":4,"rt":$n[0].Single,"sn":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"numSections","t":4,"rt":$n[0].Int32,"sn":"numSections","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"orientToPath","t":4,"rt":$n[0].Boolean,"sn":"orientToPath","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"orientToPath2d","t":4,"rt":$n[0].Boolean,"sn":"orientToPath2d","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"pts","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"pts"},{"a":2,"n":"ptsAdj","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"ptsAdj"},{"a":2,"n":"ptsAdjLength","t":4,"rt":$n[0].Int32,"sn":"ptsAdjLength","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LTSpline end.*/

    /*LTRect start.*/
    $m("LTRect", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[3].Rect],"pi":[{"n":"rect","pt":$n[3].Rect,"ps":0}],"sn":"$ctor4"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2},{"n":"height","pt":$n[0].Single,"ps":3}],"sn":"$ctor1"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2},{"n":"height","pt":$n[0].Single,"ps":3},{"n":"alpha","pt":$n[0].Single,"ps":4}],"sn":"$ctor2"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"pi":[{"n":"x","pt":$n[0].Single,"ps":0},{"n":"y","pt":$n[0].Single,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2},{"n":"height","pt":$n[0].Single,"ps":3},{"n":"alpha","pt":$n[0].Single,"ps":4},{"n":"rotation","pt":$n[0].Single,"ps":5}],"sn":"$ctor3"},{"ov":true,"a":2,"n":"ToString","t":8,"sn":"toString","rt":$n[0].String},{"a":2,"n":"reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"resetForRotation","t":8,"sn":"resetForRotation","rt":$n[0].Void},{"a":2,"n":"setAlpha","t":8,"pi":[{"n":"alpha","pt":$n[0].Single,"ps":0}],"sn":"setAlpha","rt":LTRect,"p":[$n[0].Single]},{"a":2,"n":"setColor","t":8,"pi":[{"n":"color","pt":$n[3].Color,"ps":0}],"sn":"setColor","rt":LTRect,"p":[$n[3].Color]},{"a":2,"n":"setFontScaleToFit","t":8,"pi":[{"n":"fontScaleToFit","pt":$n[0].Boolean,"ps":0}],"sn":"setFontScaleToFit","rt":LTRect,"p":[$n[0].Boolean]},{"a":2,"n":"setId","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0},{"n":"counter","pt":$n[0].Int32,"ps":1}],"sn":"setId","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"setLabel","t":8,"pi":[{"n":"str","pt":$n[0].String,"ps":0}],"sn":"setLabel","rt":LTRect,"p":[$n[0].String]},{"a":2,"n":"setSizeByHeight","t":8,"pi":[{"n":"sizeByHeight","pt":$n[0].Boolean,"ps":0}],"sn":"setSizeByHeight","rt":LTRect,"p":[$n[0].Boolean]},{"a":2,"n":"setStyle","t":8,"pi":[{"n":"style","pt":$n[3].GUIStyle,"ps":0}],"sn":"setStyle","rt":LTRect,"p":[$n[3].GUIStyle]},{"a":2,"n":"setUseSimpleScale","t":8,"pi":[{"n":"useSimpleScale","pt":$n[0].Boolean,"ps":0}],"sn":"setUseSimpleScale","rt":LTRect,"p":[$n[0].Boolean]},{"a":2,"n":"setUseSimpleScale","t":8,"pi":[{"n":"useSimpleScale","pt":$n[0].Boolean,"ps":0},{"n":"relativeRect","pt":$n[3].Rect,"ps":1}],"sn":"setUseSimpleScale$1","rt":LTRect,"p":[$n[0].Boolean,$n[3].Rect]},{"a":2,"n":"hasInitiliazed","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_hasInitiliazed","t":8,"rt":$n[0].Boolean,"fg":"hasInitiliazed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"hasInitiliazed"},{"a":2,"n":"height","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_height","t":8,"rt":$n[0].Single,"fg":"height","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_height","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"height"},"fn":"height"},{"a":2,"n":"id","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_id","t":8,"rt":$n[0].Int32,"fg":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"id"},{"a":2,"n":"rect","t":16,"rt":$n[3].Rect,"g":{"a":2,"n":"get_rect","t":8,"rt":$n[3].Rect,"fg":"rect"},"s":{"a":2,"n":"set_rect","t":8,"p":[$n[3].Rect],"rt":$n[0].Void,"fs":"rect"},"fn":"rect"},{"a":2,"n":"width","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_width","t":8,"rt":$n[0].Single,"fg":"width","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_width","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"width"},"fn":"width"},{"a":2,"n":"x","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_x","t":8,"rt":$n[0].Single,"fg":"x","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_x","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"x"},"fn":"x"},{"a":2,"n":"y","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_y","t":8,"rt":$n[0].Single,"fg":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_y","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"y"},"fn":"y"},{"a":1,"n":"_id","t":4,"rt":$n[0].Int32,"sn":"_id","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"_rect","t":4,"rt":$n[3].Rect,"sn":"_rect"},{"a":2,"n":"alpha","t":4,"rt":$n[0].Single,"sn":"alpha","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"alphaEnabled","t":4,"rt":$n[0].Boolean,"sn":"alphaEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"color","t":4,"rt":$n[3].Color,"sn":"color"},{"a":2,"n":"colorTouched","is":true,"t":4,"rt":$n[0].Boolean,"sn":"colorTouched","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"counter","t":4,"rt":$n[0].Int32,"sn":"counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"fontScaleToFit","t":4,"rt":$n[0].Boolean,"sn":"fontScaleToFit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"labelStr","t":4,"rt":$n[0].String,"sn":"labelStr"},{"a":2,"n":"margin","t":4,"rt":$n[3].Vector2,"sn":"margin"},{"a":2,"n":"pivot","t":4,"rt":$n[3].Vector2,"sn":"pivot"},{"a":2,"n":"relativeRect","t":4,"rt":$n[3].Rect,"sn":"relativeRect"},{"a":2,"n":"rotateEnabled","t":4,"rt":$n[0].Boolean,"sn":"rotateEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"rotateFinished","t":4,"rt":$n[0].Boolean,"sn":"rotateFinished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"rotation","t":4,"rt":$n[0].Single,"sn":"rotation","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"sizeByHeight","t":4,"rt":$n[0].Boolean,"sn":"sizeByHeight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"style","t":4,"rt":$n[3].GUIStyle,"sn":"style"},{"a":2,"n":"texture","t":4,"rt":$n[3].Texture,"sn":"texture"},{"a":2,"n":"type","t":4,"rt":LTGUI.Element_Type,"sn":"type","box":function ($v) { return Bridge.box($v, LTGUI.Element_Type, System.Enum.toStringFn(LTGUI.Element_Type));}},{"a":2,"n":"useColor","t":4,"rt":$n[0].Boolean,"sn":"useColor","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useSimpleScale","t":4,"rt":$n[0].Boolean,"sn":"useSimpleScale","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*LTRect end.*/

    /*LTEvent start.*/
    $m("LTEvent", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Object],"pi":[{"n":"id","pt":$n[0].Int32,"ps":0},{"n":"data","pt":$n[0].Object,"ps":1}],"sn":"ctor"},{"a":2,"n":"data","t":4,"rt":$n[0].Object,"sn":"data"},{"a":2,"n":"id","t":4,"rt":$n[0].Int32,"sn":"id","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*LTEvent end.*/

    /*LTGUI start.*/
    $m("LTGUI", function () { return {"nested":[LTGUI.Element_Type],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"checkOnScreen","is":true,"t":8,"pi":[{"n":"rect","pt":$n[3].Rect,"ps":0}],"sn":"checkOnScreen","rt":$n[0].Boolean,"p":[$n[3].Rect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"checkWithinRect","is":true,"t":8,"pi":[{"n":"vec2","pt":$n[3].Vector2,"ps":0},{"n":"rect","pt":$n[3].Rect,"ps":1}],"sn":"checkWithinRect","rt":$n[0].Boolean,"p":[$n[3].Vector2,$n[3].Rect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"destroy","is":true,"t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"destroy","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"destroyAll","is":true,"t":8,"pi":[{"n":"depth","pt":$n[0].Int32,"ps":0}],"sn":"destroyAll","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"element","is":true,"t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0},{"n":"depth","pt":$n[0].Int32,"ps":1}],"sn":"element","rt":LTRect,"p":[LTRect,$n[0].Int32]},{"a":2,"n":"firstTouch","is":true,"t":8,"sn":"firstTouch","rt":$n[3].Vector2},{"a":2,"n":"hasNoOverlap","is":true,"t":8,"pi":[{"n":"rect","pt":$n[3].Rect,"ps":0},{"n":"depth","pt":$n[0].Int32,"ps":1}],"sn":"hasNoOverlap","rt":$n[0].Boolean,"p":[$n[3].Rect,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"init","is":true,"t":8,"sn":"init","rt":$n[0].Void},{"a":2,"n":"initRectCheck","is":true,"t":8,"sn":"initRectCheck","rt":$n[0].Void},{"a":2,"n":"label","is":true,"t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0},{"n":"label","pt":$n[0].String,"ps":1},{"n":"depth","pt":$n[0].Int32,"ps":2}],"sn":"label","rt":LTRect,"p":[LTRect,$n[0].String,$n[0].Int32]},{"a":2,"n":"label","is":true,"t":8,"pi":[{"n":"rect","pt":$n[3].Rect,"ps":0},{"n":"label","pt":$n[0].String,"ps":1},{"n":"depth","pt":$n[0].Int32,"ps":2}],"sn":"label$1","rt":LTRect,"p":[$n[3].Rect,$n[0].String,$n[0].Int32]},{"a":2,"n":"pressedWithinRect","is":true,"t":8,"pi":[{"n":"rect","pt":$n[3].Rect,"ps":0}],"sn":"pressedWithinRect","rt":$n[0].Boolean,"p":[$n[3].Rect],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"reset","is":true,"t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"texture","is":true,"t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0},{"n":"texture","pt":$n[3].Texture,"ps":1},{"n":"depth","pt":$n[0].Int32,"ps":2}],"sn":"texture","rt":LTRect,"p":[LTRect,$n[3].Texture,$n[0].Int32]},{"a":2,"n":"texture","is":true,"t":8,"pi":[{"n":"rect","pt":$n[3].Rect,"ps":0},{"n":"texture","pt":$n[3].Texture,"ps":1},{"n":"depth","pt":$n[0].Int32,"ps":2}],"sn":"texture$1","rt":LTRect,"p":[$n[3].Rect,$n[3].Texture,$n[0].Int32]},{"a":2,"n":"update","is":true,"t":8,"pi":[{"n":"updateLevel","pt":$n[0].Int32,"ps":0}],"sn":"update","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"BUTTONS_MAX","is":true,"t":4,"rt":$n[0].Int32,"sn":"BUTTONS_MAX","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RECTS_PER_LEVEL","is":true,"t":4,"rt":$n[0].Int32,"sn":"RECTS_PER_LEVEL","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RECT_LEVELS","is":true,"t":4,"rt":$n[0].Int32,"sn":"RECT_LEVELS","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"buttonLastFrame","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"buttonLastFrame"},{"a":1,"n":"buttonLevels","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"buttonLevels"},{"a":1,"n":"buttons","is":true,"t":4,"rt":System.Array.type(UnityEngine.Rect),"sn":"buttons"},{"a":1,"n":"color","is":true,"t":4,"rt":$n[3].Color,"sn":"color"},{"a":1,"n":"global_counter","is":true,"t":4,"rt":$n[0].Int32,"sn":"global_counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isGUIEnabled","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isGUIEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"levelDepths","is":true,"t":4,"rt":$n[0].Array.type(System.Int32),"sn":"levelDepths"},{"a":1,"n":"levels","is":true,"t":4,"rt":System.Array.type(LTRect),"sn":"levels"},{"a":1,"n":"r","is":true,"t":4,"rt":LTRect,"sn":"r"}]}; }, $n);
    /*LTGUI end.*/

    /*LTGUI+Element_Type start.*/
    $m("LTGUI.Element_Type", function () { return {"td":LTGUI,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Label","is":true,"t":4,"rt":LTGUI.Element_Type,"sn":"Label","box":function ($v) { return Bridge.box($v, LTGUI.Element_Type, System.Enum.toStringFn(LTGUI.Element_Type));}},{"a":2,"n":"Texture","is":true,"t":4,"rt":LTGUI.Element_Type,"sn":"Texture","box":function ($v) { return Bridge.box($v, LTGUI.Element_Type, System.Enum.toStringFn(LTGUI.Element_Type));}}]}; }, $n);
    /*LTGUI+Element_Type end.*/

    /*LeanTweenExt start.*/
    $m("LeanTweenExt", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"LeanAlpha","is":true,"t":8,"pi":[{"n":"canvas","pt":$n[3].CanvasGroup,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlpha","rt":LTDescr,"p":[$n[3].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanAlpha","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlpha$1","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanAlpha","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlpha$2","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanAlphaText","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlphaText","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanAlphaVertex","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanAlphaVertex","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanCancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"LeanCancel","rt":$n[0].Void,"p":[$n[3].GameObject]},{"a":2,"n":"LeanCancel","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0}],"sn":"LeanCancel$3","rt":$n[0].Void,"p":[$n[3].RectTransform]},{"a":2,"n":"LeanCancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnComplete","pt":$n[0].Boolean,"ps":1}],"sn":"LeanCancel$1","rt":$n[0].Void,"p":[$n[3].GameObject,$n[0].Boolean]},{"a":2,"n":"LeanCancel","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"uniqueId","pt":$n[0].Int32,"ps":1},{"n":"callOnComplete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"LeanCancel$2","rt":$n[0].Void,"p":[$n[3].GameObject,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"LeanColor","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0}],"sn":"LeanColor$1","rt":$n[3].Color,"p":[$n[3].Transform]},{"a":2,"n":"LeanColor","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanColor","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Color,$n[0].Single]},{"a":2,"n":"LeanColorText","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Color,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanColorText","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Color,$n[0].Single]},{"a":2,"n":"LeanDelayedCall","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"LeanDelayedCall","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,Function]},{"a":2,"n":"LeanDelayedCall","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"delayTime","pt":$n[0].Single,"ps":1},{"n":"callback","pt":Function,"ps":2}],"sn":"LeanDelayedCall$1","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,Function]},{"a":2,"n":"LeanIsPaused","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"LeanIsPaused","rt":$n[0].Boolean,"p":[$n[3].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LeanIsPaused","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0}],"sn":"LeanIsPaused$1","rt":$n[0].Boolean,"p":[$n[3].RectTransform],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LeanIsTweening","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"LeanIsTweening","rt":$n[0].Boolean,"p":[$n[3].GameObject],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove","rt":LTDescr,"p":[$n[3].GameObject,LTBezierPath,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$1","rt":LTDescr,"p":[$n[3].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$2","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$3","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$4","rt":LTDescr,"p":[$n[3].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$5","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$6","rt":LTDescr,"p":[$n[3].Transform,LTBezierPath,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$7","rt":LTDescr,"p":[$n[3].Transform,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$8","rt":LTDescr,"p":[$n[3].Transform,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$9","rt":LTDescr,"p":[$n[3].Transform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanMove","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMove$10","rt":LTDescr,"p":[$n[3].Transform,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal","rt":LTDescr,"p":[$n[3].GameObject,LTBezierPath,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$1","rt":LTDescr,"p":[$n[3].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$2","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":LTBezierPath,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$3","rt":LTDescr,"p":[$n[3].Transform,LTBezierPath,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$4","rt":LTDescr,"p":[$n[3].Transform,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMoveLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocal$5","rt":LTDescr,"p":[$n[3].Transform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanMoveLocalX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalX","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalX$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalY","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalY$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalZ","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveLocalZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveLocalZ$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveSpline","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSpline","rt":LTDescr,"p":[$n[3].GameObject,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMoveSpline","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSpline$1","rt":LTDescr,"p":[$n[3].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveSpline","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":LTSpline,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSpline$2","rt":LTDescr,"p":[$n[3].Transform,LTSpline,$n[0].Single]},{"a":2,"n":"LeanMoveSpline","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSpline$3","rt":LTDescr,"p":[$n[3].Transform,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveSplineLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSplineLocal","rt":LTDescr,"p":[$n[3].GameObject,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveSplineLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveSplineLocal$1","rt":LTDescr,"p":[$n[3].Transform,System.Array.type(UnityEngine.Vector3),$n[0].Single]},{"a":2,"n":"LeanMoveX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveX","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveX","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveX$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveX$2","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveY","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveY","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveY$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveY$2","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveZ","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveZ","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveZ$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanMoveZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanMoveZ$2","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanPause","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"LeanPause","rt":$n[0].Void,"p":[$n[3].GameObject]},{"a":2,"n":"LeanPlay","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"sprites","pt":System.Array.type(UnityEngine.Sprite),"ps":1}],"sn":"LeanPlay","rt":LTDescr,"p":[$n[3].RectTransform,System.Array.type(UnityEngine.Sprite)]},{"a":2,"n":"LeanResume","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"LeanResume","rt":$n[0].Void,"p":[$n[3].GameObject]},{"a":2,"n":"LeanRotate","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotate","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanRotate","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotate$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanRotate","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotate$2","rt":LTDescr,"p":[$n[3].Transform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanRotateAround","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAround","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAround","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAround$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAround","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAround$2","rt":LTDescr,"p":[$n[3].Transform,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAroundLocal","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAroundLocal","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAroundLocal","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAroundLocal$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateAroundLocal","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"axis","pt":$n[3].Vector3,"ps":1},{"n":"add","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanRotateAroundLocal$2","rt":LTDescr,"p":[$n[3].Transform,$n[3].Vector3,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateX","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateX$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateY","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateY$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateZ","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanRotateZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanRotateZ$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScale","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScale","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanScale","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScale$1","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanScale","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[3].Vector3,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScale$2","rt":LTDescr,"p":[$n[3].Transform,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanScaleX","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleX","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleX$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleY","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleY","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleY$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleZ","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleZ","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanScaleZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanScaleZ$1","rt":LTDescr,"p":[$n[3].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanSetLocalPosX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetLocalPosX","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"LeanSetLocalPosY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetLocalPosY","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"LeanSetLocalPosZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetLocalPosZ","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"LeanSetPosX","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetPosX","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"LeanSetPosY","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetPosY","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"LeanSetPosZ","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"LeanSetPosZ","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"LeanSize","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"to","pt":$n[3].Vector2,"ps":1},{"n":"time","pt":$n[0].Single,"ps":2}],"sn":"LeanSize","rt":LTDescr,"p":[$n[3].RectTransform,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"from","pt":$n[0].Single,"ps":1},{"n":"to","pt":$n[0].Single,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanValue$6","rt":LTDescr,"p":[$n[3].GameObject,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"from","pt":$n[3].Color,"ps":1},{"n":"to","pt":$n[3].Color,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanValue$7","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Color,$n[3].Color,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"from","pt":$n[3].Vector2,"ps":1},{"n":"to","pt":$n[3].Vector2,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanValue$8","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector2,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"from","pt":$n[3].Vector3,"ps":1},{"n":"to","pt":$n[3].Vector3,"ps":2},{"n":"time","pt":$n[0].Single,"ps":3}],"sn":"LeanValue$9","rt":LTDescr,"p":[$n[3].GameObject,$n[3].Vector3,$n[3].Vector3,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$5","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[0].Single,"ps":2},{"n":"to","pt":$n[0].Single,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$4","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[0].Single,$n[0].Single,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[3].Color,"ps":2},{"n":"to","pt":$n[3].Color,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$1","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[3].Color,$n[3].Color,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[3].Vector2,"ps":2},{"n":"to","pt":$n[3].Vector2,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$2","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[3].Vector2,$n[3].Vector2,$n[0].Single]},{"a":2,"n":"LeanValue","is":true,"t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callOnUpdate","pt":Function,"ps":1},{"n":"from","pt":$n[3].Vector3,"ps":2},{"n":"to","pt":$n[3].Vector3,"ps":3},{"n":"time","pt":$n[0].Single,"ps":4}],"sn":"LeanValue$3","rt":LTDescr,"p":[$n[3].GameObject,Function,$n[3].Vector3,$n[3].Vector3,$n[0].Single]}]}; }, $n);
    /*LeanTweenExt end.*/

    /*LTDescr start.*/
    $m("LTDescr", function () { return {"nested":[Function,Function],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"ToString","t":8,"sn":"toString","rt":$n[0].String},{"a":1,"n":"alphaRecursive","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1},{"n":"recursiveLevel","dv":0,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"alphaRecursive","rt":$n[0].Void,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Int32]},{"a":1,"n":"alphaRecursive","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1},{"n":"useRecursion","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"alphaRecursive$1","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"alphaRecursiveSprite","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"alphaRecursiveSprite","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single]},{"a":2,"n":"callOnCompletes","t":8,"sn":"callOnCompletes","rt":$n[0].Void},{"a":1,"n":"callback","t":8,"sn":"callback","rt":$n[0].Void},{"a":2,"n":"cancel","t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0}],"sn":"cancel","rt":LTDescr,"p":[$n[3].GameObject]},{"a":1,"n":"colorRecursive","is":true,"t":8,"pi":[{"n":"rectTransform","pt":$n[3].RectTransform,"ps":0},{"n":"toColor","pt":$n[3].Color,"ps":1}],"sn":"colorRecursive","rt":$n[0].Void,"p":[$n[3].RectTransform,$n[3].Color]},{"a":1,"n":"colorRecursive","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"toColor","pt":$n[3].Color,"ps":1},{"n":"useRecursion","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"colorRecursive$1","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Color,$n[0].Boolean]},{"a":1,"n":"colorRecursiveSprite","is":true,"t":8,"pi":[{"n":"transform","pt":$n[3].Transform,"ps":0},{"n":"toColor","pt":$n[3].Color,"ps":1}],"sn":"colorRecursiveSprite","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Color]},{"a":1,"n":"easeInBack","t":8,"sn":"easeInBack","rt":$n[3].Vector3},{"a":1,"n":"easeInBounce","t":8,"sn":"easeInBounce","rt":$n[3].Vector3},{"a":1,"n":"easeInCirc","t":8,"sn":"easeInCirc","rt":$n[3].Vector3},{"a":1,"n":"easeInCubic","t":8,"sn":"easeInCubic","rt":$n[3].Vector3},{"a":1,"n":"easeInElastic","t":8,"sn":"easeInElastic","rt":$n[3].Vector3},{"a":1,"n":"easeInExpo","t":8,"sn":"easeInExpo","rt":$n[3].Vector3},{"a":1,"n":"easeInOutBack","t":8,"sn":"easeInOutBack","rt":$n[3].Vector3},{"a":1,"n":"easeInOutBounce","t":8,"sn":"easeInOutBounce","rt":$n[3].Vector3},{"a":1,"n":"easeInOutCirc","t":8,"sn":"easeInOutCirc","rt":$n[3].Vector3},{"a":1,"n":"easeInOutCubic","t":8,"sn":"easeInOutCubic","rt":$n[3].Vector3},{"a":1,"n":"easeInOutElastic","t":8,"sn":"easeInOutElastic","rt":$n[3].Vector3},{"a":1,"n":"easeInOutExpo","t":8,"sn":"easeInOutExpo","rt":$n[3].Vector3},{"a":1,"n":"easeInOutQuad","t":8,"sn":"easeInOutQuad","rt":$n[3].Vector3},{"a":1,"n":"easeInOutQuart","t":8,"sn":"easeInOutQuart","rt":$n[3].Vector3},{"a":1,"n":"easeInOutQuint","t":8,"sn":"easeInOutQuint","rt":$n[3].Vector3},{"a":1,"n":"easeInOutSine","t":8,"sn":"easeInOutSine","rt":$n[3].Vector3},{"a":1,"n":"easeInQuad","t":8,"sn":"easeInQuad","rt":$n[3].Vector3},{"a":1,"n":"easeInQuart","t":8,"sn":"easeInQuart","rt":$n[3].Vector3},{"a":1,"n":"easeInQuint","t":8,"sn":"easeInQuint","rt":$n[3].Vector3},{"a":1,"n":"easeInSine","t":8,"sn":"easeInSine","rt":$n[3].Vector3},{"a":1,"n":"easeLinear","t":8,"sn":"easeLinear","rt":$n[3].Vector3},{"a":1,"n":"easeOutBack","t":8,"sn":"easeOutBack","rt":$n[3].Vector3},{"a":1,"n":"easeOutBounce","t":8,"sn":"easeOutBounce","rt":$n[3].Vector3},{"a":1,"n":"easeOutCirc","t":8,"sn":"easeOutCirc","rt":$n[3].Vector3},{"a":1,"n":"easeOutCubic","t":8,"sn":"easeOutCubic","rt":$n[3].Vector3},{"a":1,"n":"easeOutElastic","t":8,"sn":"easeOutElastic","rt":$n[3].Vector3},{"a":1,"n":"easeOutExpo","t":8,"sn":"easeOutExpo","rt":$n[3].Vector3},{"a":1,"n":"easeOutQuad","t":8,"sn":"easeOutQuad","rt":$n[3].Vector3},{"a":1,"n":"easeOutQuart","t":8,"sn":"easeOutQuart","rt":$n[3].Vector3},{"a":1,"n":"easeOutQuint","t":8,"sn":"easeOutQuint","rt":$n[3].Vector3},{"a":1,"n":"easeOutSine","t":8,"sn":"easeOutSine","rt":$n[3].Vector3},{"a":1,"n":"easeSpring","t":8,"sn":"easeSpring","rt":$n[3].Vector3},{"a":1,"n":"init","t":8,"sn":"init","rt":$n[0].Void},{"a":1,"n":"initCanvasRotateAround","t":8,"sn":"initCanvasRotateAround","rt":$n[0].Void},{"a":1,"n":"initFromInternal","t":8,"sn":"initFromInternal","rt":$n[0].Void},{"a":1,"n":"initSpeed","t":8,"sn":"initSpeed","rt":$n[0].Void},{"a":2,"n":"pause","t":8,"sn":"pause","rt":LTDescr},{"a":2,"n":"reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"resume","t":8,"sn":"resume","rt":LTDescr},{"a":2,"n":"setAlpha","t":8,"sn":"setAlpha","rt":LTDescr},{"a":2,"n":"setAlphaVertex","t":8,"sn":"setAlphaVertex","rt":LTDescr},{"a":2,"n":"setAudio","t":8,"pi":[{"n":"audio","pt":$n[0].Object,"ps":0}],"sn":"setAudio","rt":LTDescr,"p":[$n[0].Object]},{"a":2,"n":"setAxis","t":8,"pi":[{"n":"axis","pt":$n[3].Vector3,"ps":0}],"sn":"setAxis","rt":LTDescr,"p":[$n[3].Vector3]},{"a":2,"n":"setCallback","t":8,"sn":"setCallback","rt":LTDescr},{"a":2,"n":"setCallbackColor","t":8,"sn":"setCallbackColor","rt":LTDescr},{"a":2,"n":"setCanvasAlpha","t":8,"sn":"setCanvasAlpha","rt":LTDescr},{"a":2,"n":"setCanvasColor","t":8,"sn":"setCanvasColor","rt":LTDescr},{"a":2,"n":"setCanvasGroupAlpha","t":8,"sn":"setCanvasGroupAlpha","rt":LTDescr},{"a":2,"n":"setCanvasMove","t":8,"sn":"setCanvasMove","rt":LTDescr},{"a":2,"n":"setCanvasMoveX","t":8,"sn":"setCanvasMoveX","rt":LTDescr},{"a":2,"n":"setCanvasMoveY","t":8,"sn":"setCanvasMoveY","rt":LTDescr},{"a":2,"n":"setCanvasMoveZ","t":8,"sn":"setCanvasMoveZ","rt":LTDescr},{"a":2,"n":"setCanvasPlaySprite","t":8,"sn":"setCanvasPlaySprite","rt":LTDescr},{"a":2,"n":"setCanvasRotateAround","t":8,"sn":"setCanvasRotateAround","rt":LTDescr},{"a":2,"n":"setCanvasRotateAroundLocal","t":8,"sn":"setCanvasRotateAroundLocal","rt":LTDescr},{"a":2,"n":"setCanvasScale","t":8,"sn":"setCanvasScale","rt":LTDescr},{"a":2,"n":"setCanvasSizeDelta","t":8,"sn":"setCanvasSizeDelta","rt":LTDescr},{"a":2,"n":"setColor","t":8,"sn":"setColor","rt":LTDescr},{"a":2,"n":"setDelay","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"setDelay","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setDelayedSound","t":8,"sn":"setDelayedSound","rt":LTDescr},{"a":2,"n":"setDestroyOnComplete","t":8,"pi":[{"n":"doesDestroy","pt":$n[0].Boolean,"ps":0}],"sn":"setDestroyOnComplete","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setDiff","t":8,"pi":[{"n":"diff","pt":$n[3].Vector3,"ps":0}],"sn":"setDiff","rt":LTDescr,"p":[$n[3].Vector3]},{"a":2,"n":"setDirection","t":8,"pi":[{"n":"direction","pt":$n[0].Single,"ps":0}],"sn":"setDirection","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setEase","t":8,"pi":[{"n":"easeType","pt":LeanTweenType,"ps":0}],"sn":"setEase","rt":LTDescr,"p":[LeanTweenType]},{"a":2,"n":"setEase","t":8,"pi":[{"n":"easeCurve","pt":pc.AnimationCurve,"ps":0}],"sn":"setEase$1","rt":LTDescr,"p":[pc.AnimationCurve]},{"a":2,"n":"setEaseInBack","t":8,"sn":"setEaseInBack","rt":LTDescr},{"a":2,"n":"setEaseInBounce","t":8,"sn":"setEaseInBounce","rt":LTDescr},{"a":2,"n":"setEaseInCirc","t":8,"sn":"setEaseInCirc","rt":LTDescr},{"a":2,"n":"setEaseInCubic","t":8,"sn":"setEaseInCubic","rt":LTDescr},{"a":2,"n":"setEaseInElastic","t":8,"sn":"setEaseInElastic","rt":LTDescr},{"a":2,"n":"setEaseInExpo","t":8,"sn":"setEaseInExpo","rt":LTDescr},{"a":2,"n":"setEaseInOutBack","t":8,"sn":"setEaseInOutBack","rt":LTDescr},{"a":2,"n":"setEaseInOutBounce","t":8,"sn":"setEaseInOutBounce","rt":LTDescr},{"a":2,"n":"setEaseInOutCirc","t":8,"sn":"setEaseInOutCirc","rt":LTDescr},{"a":2,"n":"setEaseInOutCubic","t":8,"sn":"setEaseInOutCubic","rt":LTDescr},{"a":2,"n":"setEaseInOutElastic","t":8,"sn":"setEaseInOutElastic","rt":LTDescr},{"a":2,"n":"setEaseInOutExpo","t":8,"sn":"setEaseInOutExpo","rt":LTDescr},{"a":2,"n":"setEaseInOutQuad","t":8,"sn":"setEaseInOutQuad","rt":LTDescr},{"a":2,"n":"setEaseInOutQuart","t":8,"sn":"setEaseInOutQuart","rt":LTDescr},{"a":2,"n":"setEaseInOutQuint","t":8,"sn":"setEaseInOutQuint","rt":LTDescr},{"a":2,"n":"setEaseInOutSine","t":8,"sn":"setEaseInOutSine","rt":LTDescr},{"a":2,"n":"setEaseInQuad","t":8,"sn":"setEaseInQuad","rt":LTDescr},{"a":2,"n":"setEaseInQuart","t":8,"sn":"setEaseInQuart","rt":LTDescr},{"a":2,"n":"setEaseInQuint","t":8,"sn":"setEaseInQuint","rt":LTDescr},{"a":2,"n":"setEaseInSine","t":8,"sn":"setEaseInSine","rt":LTDescr},{"a":2,"n":"setEaseLinear","t":8,"sn":"setEaseLinear","rt":LTDescr},{"a":2,"n":"setEaseOutBack","t":8,"sn":"setEaseOutBack","rt":LTDescr},{"a":2,"n":"setEaseOutBounce","t":8,"sn":"setEaseOutBounce","rt":LTDescr},{"a":2,"n":"setEaseOutCirc","t":8,"sn":"setEaseOutCirc","rt":LTDescr},{"a":2,"n":"setEaseOutCubic","t":8,"sn":"setEaseOutCubic","rt":LTDescr},{"a":2,"n":"setEaseOutElastic","t":8,"sn":"setEaseOutElastic","rt":LTDescr},{"a":2,"n":"setEaseOutExpo","t":8,"sn":"setEaseOutExpo","rt":LTDescr},{"a":2,"n":"setEaseOutQuad","t":8,"sn":"setEaseOutQuad","rt":LTDescr},{"a":2,"n":"setEaseOutQuart","t":8,"sn":"setEaseOutQuart","rt":LTDescr},{"a":2,"n":"setEaseOutQuint","t":8,"sn":"setEaseOutQuint","rt":LTDescr},{"a":2,"n":"setEaseOutSine","t":8,"sn":"setEaseOutSine","rt":LTDescr},{"a":2,"n":"setEasePunch","t":8,"sn":"setEasePunch","rt":LTDescr},{"a":2,"n":"setEaseShake","t":8,"sn":"setEaseShake","rt":LTDescr},{"a":2,"n":"setEaseSpring","t":8,"sn":"setEaseSpring","rt":LTDescr},{"a":2,"n":"setFollow","t":8,"sn":"setFollow","rt":LTDescr},{"a":2,"n":"setFrameRate","t":8,"pi":[{"n":"frameRate","pt":$n[0].Single,"ps":0}],"sn":"setFrameRate","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setFrom","t":8,"pi":[{"n":"from","pt":$n[0].Single,"ps":0}],"sn":"setFrom","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setFrom","t":8,"pi":[{"n":"from","pt":$n[3].Vector3,"ps":0}],"sn":"setFrom$1","rt":LTDescr,"p":[$n[3].Vector3]},{"a":2,"n":"setFromColor","t":8,"pi":[{"n":"col","pt":$n[3].Color,"ps":0}],"sn":"setFromColor","rt":LTDescr,"p":[$n[3].Color]},{"a":2,"n":"setGUIAlpha","t":8,"sn":"setGUIAlpha","rt":LTDescr},{"a":2,"n":"setGUIMove","t":8,"sn":"setGUIMove","rt":LTDescr},{"a":2,"n":"setGUIMoveMargin","t":8,"sn":"setGUIMoveMargin","rt":LTDescr},{"a":2,"n":"setGUIRotate","t":8,"sn":"setGUIRotate","rt":LTDescr},{"a":2,"n":"setGUIScale","t":8,"sn":"setGUIScale","rt":LTDescr},{"a":2,"n":"setHasInitialized","t":8,"pi":[{"n":"has","pt":$n[0].Boolean,"ps":0}],"sn":"setHasInitialized","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setId","t":8,"pi":[{"n":"id","pt":$n[0].UInt32,"ps":0},{"n":"global_counter","pt":$n[0].UInt32,"ps":1}],"sn":"setId","rt":LTDescr,"p":[$n[0].UInt32,$n[0].UInt32]},{"a":2,"n":"setIgnoreTimeScale","t":8,"pi":[{"n":"useUnScaledTime","pt":$n[0].Boolean,"ps":0}],"sn":"setIgnoreTimeScale","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setLoopClamp","t":8,"sn":"setLoopClamp","rt":LTDescr},{"a":2,"n":"setLoopClamp","t":8,"pi":[{"n":"loops","pt":$n[0].Int32,"ps":0}],"sn":"setLoopClamp$1","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"setLoopCount","t":8,"pi":[{"n":"loopCount","pt":$n[0].Int32,"ps":0}],"sn":"setLoopCount","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"setLoopOnce","t":8,"sn":"setLoopOnce","rt":LTDescr},{"a":2,"n":"setLoopPingPong","t":8,"sn":"setLoopPingPong","rt":LTDescr},{"a":2,"n":"setLoopPingPong","t":8,"pi":[{"n":"loops","pt":$n[0].Int32,"ps":0}],"sn":"setLoopPingPong$1","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"setLoopType","t":8,"pi":[{"n":"loopType","pt":LeanTweenType,"ps":0}],"sn":"setLoopType","rt":LTDescr,"p":[LeanTweenType]},{"a":2,"n":"setMove","t":8,"sn":"setMove","rt":LTDescr},{"a":2,"n":"setMoveCurved","t":8,"sn":"setMoveCurved","rt":LTDescr},{"a":2,"n":"setMoveCurvedLocal","t":8,"sn":"setMoveCurvedLocal","rt":LTDescr},{"a":2,"n":"setMoveLocal","t":8,"sn":"setMoveLocal","rt":LTDescr},{"a":2,"n":"setMoveLocalX","t":8,"sn":"setMoveLocalX","rt":LTDescr},{"a":2,"n":"setMoveLocalY","t":8,"sn":"setMoveLocalY","rt":LTDescr},{"a":2,"n":"setMoveLocalZ","t":8,"sn":"setMoveLocalZ","rt":LTDescr},{"a":2,"n":"setMoveSpline","t":8,"sn":"setMoveSpline","rt":LTDescr},{"a":2,"n":"setMoveSplineLocal","t":8,"sn":"setMoveSplineLocal","rt":LTDescr},{"a":2,"n":"setMoveToTransform","t":8,"sn":"setMoveToTransform","rt":LTDescr},{"a":2,"n":"setMoveX","t":8,"sn":"setMoveX","rt":LTDescr},{"a":2,"n":"setMoveY","t":8,"sn":"setMoveY","rt":LTDescr},{"a":2,"n":"setMoveZ","t":8,"sn":"setMoveZ","rt":LTDescr},{"a":2,"n":"setOffset","t":8,"pi":[{"n":"offset","pt":$n[3].Vector3,"ps":0}],"sn":"setOffset","rt":LTDescr,"p":[$n[3].Vector3]},{"a":2,"n":"setOnComplete","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"setOnComplete","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnComplete","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0}],"sn":"setOnComplete$1","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnComplete","t":8,"pi":[{"n":"onComplete","pt":Function,"ps":0},{"n":"onCompleteParam","pt":$n[0].Object,"ps":1}],"sn":"setOnComplete$2","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnCompleteOnRepeat","t":8,"pi":[{"n":"isOn","pt":$n[0].Boolean,"ps":0}],"sn":"setOnCompleteOnRepeat","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setOnCompleteOnStart","t":8,"pi":[{"n":"isOn","pt":$n[0].Boolean,"ps":0}],"sn":"setOnCompleteOnStart","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setOnCompleteParam","t":8,"pi":[{"n":"onCompleteParam","pt":$n[0].Object,"ps":0}],"sn":"setOnCompleteParam","rt":LTDescr,"p":[$n[0].Object]},{"a":2,"n":"setOnStart","t":8,"pi":[{"n":"onStart","pt":Function,"ps":0}],"sn":"setOnStart","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdate","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdate$1","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdate$5","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0},{"n":"onUpdateParam","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"setOnUpdate$4","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0},{"n":"onUpdateParam","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"setOnUpdate$6","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0},{"n":"onUpdateParam","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"setOnUpdate$2","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnUpdate","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0},{"n":"onUpdateParam","dv":null,"o":true,"pt":$n[0].Object,"ps":1}],"sn":"setOnUpdate$3","rt":LTDescr,"p":[Function,$n[0].Object]},{"a":2,"n":"setOnUpdateColor","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateColor","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateColor","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateColor$1","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateObject","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateObject","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateParam","t":8,"pi":[{"n":"onUpdateParam","pt":$n[0].Object,"ps":0}],"sn":"setOnUpdateParam","rt":LTDescr,"p":[$n[0].Object]},{"a":2,"n":"setOnUpdateRatio","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateRatio","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateVector2","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateVector2","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOnUpdateVector3","t":8,"pi":[{"n":"onUpdate","pt":Function,"ps":0}],"sn":"setOnUpdateVector3","rt":LTDescr,"p":[Function]},{"a":2,"n":"setOrientToPath","t":8,"pi":[{"n":"doesOrient","pt":$n[0].Boolean,"ps":0}],"sn":"setOrientToPath","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setOrientToPath2d","t":8,"pi":[{"n":"doesOrient2d","pt":$n[0].Boolean,"ps":0}],"sn":"setOrientToPath2d","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setOvershoot","t":8,"pi":[{"n":"overshoot","pt":$n[0].Single,"ps":0}],"sn":"setOvershoot","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setPassed","t":8,"pi":[{"n":"passed","pt":$n[0].Single,"ps":0}],"sn":"setPassed","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setPath","t":8,"pi":[{"n":"path","pt":LTBezierPath,"ps":0}],"sn":"setPath","rt":LTDescr,"p":[LTBezierPath]},{"a":2,"n":"setPeriod","t":8,"pi":[{"n":"period","pt":$n[0].Single,"ps":0}],"sn":"setPeriod","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setPoint","t":8,"pi":[{"n":"point","pt":$n[3].Vector3,"ps":0}],"sn":"setPoint","rt":LTDescr,"p":[$n[3].Vector3]},{"a":2,"n":"setRect","t":8,"pi":[{"n":"rect","pt":LTRect,"ps":0}],"sn":"setRect","rt":LTDescr,"p":[LTRect]},{"a":2,"n":"setRect","t":8,"pi":[{"n":"rect","pt":$n[3].Rect,"ps":0}],"sn":"setRect$1","rt":LTDescr,"p":[$n[3].Rect]},{"a":2,"n":"setRect","t":8,"pi":[{"n":"rect","pt":$n[3].RectTransform,"ps":0}],"sn":"setRect$2","rt":LTDescr,"p":[$n[3].RectTransform]},{"a":2,"n":"setRecursive","t":8,"pi":[{"n":"useRecursion","pt":$n[0].Boolean,"ps":0}],"sn":"setRecursive","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setRepeat","t":8,"pi":[{"n":"repeat","pt":$n[0].Int32,"ps":0}],"sn":"setRepeat","rt":LTDescr,"p":[$n[0].Int32]},{"a":2,"n":"setRotate","t":8,"sn":"setRotate","rt":LTDescr},{"a":2,"n":"setRotateAround","t":8,"sn":"setRotateAround","rt":LTDescr},{"a":2,"n":"setRotateAroundLocal","t":8,"sn":"setRotateAroundLocal","rt":LTDescr},{"a":2,"n":"setRotateLocal","t":8,"sn":"setRotateLocal","rt":LTDescr},{"a":2,"n":"setRotateX","t":8,"sn":"setRotateX","rt":LTDescr},{"a":2,"n":"setRotateY","t":8,"sn":"setRotateY","rt":LTDescr},{"a":2,"n":"setRotateZ","t":8,"sn":"setRotateZ","rt":LTDescr},{"a":2,"n":"setScale","t":8,"sn":"setScale","rt":LTDescr},{"a":2,"n":"setScale","t":8,"pi":[{"n":"scale","pt":$n[0].Single,"ps":0}],"sn":"setScale$1","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setScaleX","t":8,"sn":"setScaleX","rt":LTDescr},{"a":2,"n":"setScaleY","t":8,"sn":"setScaleY","rt":LTDescr},{"a":2,"n":"setScaleZ","t":8,"sn":"setScaleZ","rt":LTDescr},{"a":2,"n":"setSpeed","t":8,"pi":[{"n":"speed","pt":$n[0].Single,"ps":0}],"sn":"setSpeed","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setSprites","t":8,"pi":[{"n":"sprites","pt":System.Array.type(UnityEngine.Sprite),"ps":0}],"sn":"setSprites","rt":LTDescr,"p":[System.Array.type(UnityEngine.Sprite)]},{"a":2,"n":"setTarget","t":8,"pi":[{"n":"trans","pt":$n[3].Transform,"ps":0}],"sn":"setTarget","rt":LTDescr,"p":[$n[3].Transform]},{"a":2,"n":"setTextAlpha","t":8,"sn":"setTextAlpha","rt":LTDescr},{"a":2,"n":"setTextColor","t":8,"sn":"setTextColor","rt":LTDescr},{"a":2,"n":"setTime","t":8,"pi":[{"n":"time","pt":$n[0].Single,"ps":0}],"sn":"setTime","rt":LTDescr,"p":[$n[0].Single]},{"a":2,"n":"setTo","t":8,"pi":[{"n":"to","pt":$n[3].Transform,"ps":0}],"sn":"setTo","rt":LTDescr,"p":[$n[3].Transform]},{"a":2,"n":"setTo","t":8,"pi":[{"n":"to","pt":$n[3].Vector3,"ps":0}],"sn":"setTo$1","rt":LTDescr,"p":[$n[3].Vector3]},{"a":2,"n":"setUseEstimatedTime","t":8,"pi":[{"n":"useEstimatedTime","pt":$n[0].Boolean,"ps":0}],"sn":"setUseEstimatedTime","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setUseFrames","t":8,"pi":[{"n":"useFrames","pt":$n[0].Boolean,"ps":0}],"sn":"setUseFrames","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setUseManualTime","t":8,"pi":[{"n":"useManualTime","pt":$n[0].Boolean,"ps":0}],"sn":"setUseManualTime","rt":LTDescr,"p":[$n[0].Boolean]},{"a":2,"n":"setValue3","t":8,"sn":"setValue3","rt":LTDescr},{"a":1,"n":"textAlphaChildrenRecursive","is":true,"t":8,"pi":[{"n":"trans","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1},{"n":"useRecursion","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"textAlphaChildrenRecursive","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"textAlphaRecursive","is":true,"t":8,"pi":[{"n":"trans","pt":$n[3].Transform,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1},{"n":"useRecursion","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"textAlphaRecursive","rt":$n[0].Void,"p":[$n[3].Transform,$n[0].Single,$n[0].Boolean]},{"a":1,"n":"textColorRecursive","is":true,"t":8,"pi":[{"n":"trans","pt":$n[3].Transform,"ps":0},{"n":"toColor","pt":$n[3].Color,"ps":1}],"sn":"textColorRecursive","rt":$n[0].Void,"p":[$n[3].Transform,$n[3].Color]},{"a":1,"n":"tweenColor","is":true,"t":8,"pi":[{"n":"tween","pt":LTDescr,"ps":0},{"n":"val","pt":$n[0].Single,"ps":1}],"sn":"tweenColor","rt":$n[3].Color,"p":[LTDescr,$n[0].Single]},{"a":1,"n":"tweenOnCurve","t":8,"sn":"tweenOnCurve","rt":$n[3].Vector3},{"a":2,"n":"updateInternal","t":8,"sn":"updateInternal","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"updateNow","t":8,"sn":"updateNow","rt":LTDescr},{"a":2,"n":"easeInternal","t":16,"rt":Function,"g":{"a":2,"n":"get_easeInternal","t":8,"rt":Function,"fg":"easeInternal"},"s":{"a":2,"n":"set_easeInternal","t":8,"p":[Function],"rt":$n[0].Void,"fs":"easeInternal"},"fn":"easeInternal"},{"a":2,"n":"from","t":16,"rt":$n[3].Vector3,"g":{"a":2,"n":"get_from","t":8,"rt":$n[3].Vector3,"fg":"from"},"s":{"a":2,"n":"set_from","t":8,"p":[$n[3].Vector3],"rt":$n[0].Void,"fs":"from"},"fn":"from"},{"a":2,"n":"id","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_id","t":8,"rt":$n[0].Int32,"fg":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"id"},{"a":2,"n":"initInternal","t":16,"rt":Function,"g":{"a":2,"n":"get_initInternal","t":8,"rt":Function,"fg":"initInternal"},"s":{"a":2,"n":"set_initInternal","t":8,"p":[Function],"rt":$n[0].Void,"fs":"initInternal"},"fn":"initInternal"},{"a":2,"n":"optional","t":16,"rt":LTDescrOptional,"g":{"a":2,"n":"get_optional","t":8,"rt":LTDescrOptional,"fg":"optional"},"s":{"a":2,"n":"set_optional","t":8,"p":[LTDescrOptional],"rt":$n[0].Void,"fs":"optional"},"fn":"optional"},{"a":2,"n":"to","t":16,"rt":$n[3].Vector3,"g":{"a":2,"n":"get_to","t":8,"rt":$n[3].Vector3,"fg":"to"},"s":{"a":2,"n":"set_to","t":8,"p":[$n[3].Vector3],"rt":$n[0].Void,"fs":"to"},"fn":"to"},{"a":2,"n":"toTrans","t":16,"rt":$n[3].Transform,"g":{"a":2,"n":"get_toTrans","t":8,"rt":$n[3].Transform,"fg":"toTrans"},"fn":"toTrans"},{"a":2,"n":"uniqueId","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_uniqueId","t":8,"rt":$n[0].Int32,"fg":"uniqueId","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"uniqueId"},{"a":1,"n":"_id","t":4,"rt":$n[0].UInt32,"sn":"_id","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":2,"n":"_optional","t":4,"rt":LTDescrOptional,"sn":"_optional"},{"a":2,"n":"counter","t":4,"rt":$n[0].UInt32,"sn":"counter","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":2,"n":"delay","t":4,"rt":$n[0].Single,"sn":"delay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"destroyOnComplete","t":4,"rt":$n[0].Boolean,"sn":"destroyOnComplete","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":4,"n":"diff","t":4,"rt":$n[3].Vector3,"sn":"diff"},{"a":4,"n":"diffDiv2","t":4,"rt":$n[3].Vector3,"sn":"diffDiv2"},{"a":2,"n":"direction","t":4,"rt":$n[0].Single,"sn":"direction","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"directionLast","t":4,"rt":$n[0].Single,"sn":"directionLast","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"dt","is":true,"t":4,"rt":$n[0].Single,"sn":"dt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"easeMethod","t":4,"rt":Function,"sn":"easeMethod"},{"a":1,"n":"easeType","t":4,"rt":LeanTweenType,"sn":"easeType","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":4,"n":"fromInternal","t":4,"rt":$n[3].Vector3,"sn":"fromInternal"},{"a":2,"n":"hasExtraOnCompletes","t":4,"rt":$n[0].Boolean,"sn":"hasExtraOnCompletes","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"hasInitiliazed","t":4,"rt":$n[0].Boolean,"sn":"hasInitiliazed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"hasPhysics","t":4,"rt":$n[0].Boolean,"sn":"hasPhysics","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"hasUpdateCallback","t":4,"rt":$n[0].Boolean,"sn":"hasUpdateCallback","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lastVal","t":4,"rt":$n[0].Single,"sn":"lastVal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"loopCount","t":4,"rt":$n[0].Int32,"sn":"loopCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"loopType","t":4,"rt":LeanTweenType,"sn":"loopType","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"a":2,"n":"newVect","is":true,"t":4,"rt":$n[3].Vector3,"sn":"newVect"},{"a":2,"n":"onCompleteOnRepeat","t":4,"rt":$n[0].Boolean,"sn":"onCompleteOnRepeat","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onCompleteOnStart","t":4,"rt":$n[0].Boolean,"sn":"onCompleteOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"overshoot","t":4,"rt":$n[0].Single,"sn":"overshoot","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"passed","t":4,"rt":$n[0].Single,"sn":"passed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"period","t":4,"rt":$n[0].Single,"sn":"period","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ratioPassed","t":4,"rt":$n[0].Single,"sn":"ratioPassed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"rawImage","t":4,"rt":$n[2].RawImage,"sn":"rawImage"},{"a":2,"n":"rectTransform","t":4,"rt":$n[3].RectTransform,"sn":"rectTransform"},{"a":2,"n":"scale","t":4,"rt":$n[0].Single,"sn":"scale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"spriteRen","t":4,"rt":$n[3].SpriteRenderer,"sn":"spriteRen"},{"a":2,"n":"sprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"sprites"},{"a":2,"n":"time","t":4,"rt":$n[0].Single,"sn":"time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":4,"n":"toInternal","t":4,"rt":$n[3].Vector3,"sn":"toInternal"},{"a":2,"n":"toggle","t":4,"rt":$n[0].Boolean,"sn":"toggle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"trans","t":4,"rt":$n[3].Transform,"sn":"trans"},{"a":2,"n":"type","t":4,"rt":TweenAction,"sn":"type","box":function ($v) { return Bridge.box($v, TweenAction, System.Enum.toStringFn(TweenAction));}},{"a":2,"n":"uiImage","t":4,"rt":$n[2].Image,"sn":"uiImage"},{"a":2,"n":"uiText","t":4,"rt":$n[2].Text,"sn":"uiText"},{"a":2,"n":"useEstimatedTime","t":4,"rt":$n[0].Boolean,"sn":"useEstimatedTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useFrames","t":4,"rt":$n[0].Boolean,"sn":"useFrames","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useManualTime","t":4,"rt":$n[0].Boolean,"sn":"useManualTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useRecursion","t":4,"rt":$n[0].Boolean,"sn":"useRecursion","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"usesNormalDt","t":4,"rt":$n[0].Boolean,"sn":"usesNormalDt","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"val","is":true,"t":4,"rt":$n[0].Single,"sn":"val","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<easeInternal>k__BackingField","t":4,"rt":Function,"sn":"easeInternal"},{"a":1,"backing":true,"n":"<initInternal>k__BackingField","t":4,"rt":Function,"sn":"initInternal"}]}; }, $n);
    /*LTDescr end.*/

    /*LTDescrOptional start.*/
    $m("LTDescrOptional", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"callOnUpdate","t":8,"pi":[{"n":"val","pt":$n[0].Single,"ps":0},{"n":"ratioPassed","pt":$n[0].Single,"ps":1}],"sn":"callOnUpdate","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single]},{"a":2,"n":"reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"axis","t":16,"rt":$n[3].Vector3,"g":{"a":2,"n":"get_axis","t":8,"rt":$n[3].Vector3,"fg":"axis"},"s":{"a":2,"n":"set_axis","t":8,"p":[$n[3].Vector3],"rt":$n[0].Void,"fs":"axis"},"fn":"axis"},{"a":2,"n":"lastVal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_lastVal","t":8,"rt":$n[0].Single,"fg":"lastVal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_lastVal","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"lastVal"},"fn":"lastVal"},{"a":2,"n":"ltRect","t":16,"rt":LTRect,"g":{"a":2,"n":"get_ltRect","t":8,"rt":LTRect,"fg":"ltRect"},"s":{"a":2,"n":"set_ltRect","t":8,"p":[LTRect],"rt":$n[0].Void,"fs":"ltRect"},"fn":"ltRect"},{"a":2,"n":"onComplete","t":16,"rt":Function,"g":{"a":2,"n":"get_onComplete","t":8,"rt":Function,"fg":"onComplete"},"s":{"a":2,"n":"set_onComplete","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onComplete"},"fn":"onComplete"},{"a":2,"n":"onCompleteObject","t":16,"rt":Function,"g":{"a":2,"n":"get_onCompleteObject","t":8,"rt":Function,"fg":"onCompleteObject"},"s":{"a":2,"n":"set_onCompleteObject","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onCompleteObject"},"fn":"onCompleteObject"},{"a":2,"n":"onCompleteParam","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_onCompleteParam","t":8,"rt":$n[0].Object,"fg":"onCompleteParam"},"s":{"a":2,"n":"set_onCompleteParam","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"onCompleteParam"},"fn":"onCompleteParam"},{"a":2,"n":"onStart","t":16,"rt":Function,"g":{"a":2,"n":"get_onStart","t":8,"rt":Function,"fg":"onStart"},"s":{"a":2,"n":"set_onStart","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onStart"},"fn":"onStart"},{"a":2,"n":"onUpdateColor","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateColor","t":8,"rt":Function,"fg":"onUpdateColor"},"s":{"a":2,"n":"set_onUpdateColor","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateColor"},"fn":"onUpdateColor"},{"a":2,"n":"onUpdateColorObject","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateColorObject","t":8,"rt":Function,"fg":"onUpdateColorObject"},"s":{"a":2,"n":"set_onUpdateColorObject","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateColorObject"},"fn":"onUpdateColorObject"},{"a":2,"n":"onUpdateFloat","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateFloat","t":8,"rt":Function,"fg":"onUpdateFloat"},"s":{"a":2,"n":"set_onUpdateFloat","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateFloat"},"fn":"onUpdateFloat"},{"a":2,"n":"onUpdateFloatObject","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateFloatObject","t":8,"rt":Function,"fg":"onUpdateFloatObject"},"s":{"a":2,"n":"set_onUpdateFloatObject","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateFloatObject"},"fn":"onUpdateFloatObject"},{"a":2,"n":"onUpdateFloatRatio","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateFloatRatio","t":8,"rt":Function,"fg":"onUpdateFloatRatio"},"s":{"a":2,"n":"set_onUpdateFloatRatio","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateFloatRatio"},"fn":"onUpdateFloatRatio"},{"a":2,"n":"onUpdateParam","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_onUpdateParam","t":8,"rt":$n[0].Object,"fg":"onUpdateParam"},"s":{"a":2,"n":"set_onUpdateParam","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"onUpdateParam"},"fn":"onUpdateParam"},{"a":2,"n":"onUpdateVector2","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateVector2","t":8,"rt":Function,"fg":"onUpdateVector2"},"s":{"a":2,"n":"set_onUpdateVector2","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateVector2"},"fn":"onUpdateVector2"},{"a":2,"n":"onUpdateVector3","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateVector3","t":8,"rt":Function,"fg":"onUpdateVector3"},"s":{"a":2,"n":"set_onUpdateVector3","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateVector3"},"fn":"onUpdateVector3"},{"a":2,"n":"onUpdateVector3Object","t":16,"rt":Function,"g":{"a":2,"n":"get_onUpdateVector3Object","t":8,"rt":Function,"fg":"onUpdateVector3Object"},"s":{"a":2,"n":"set_onUpdateVector3Object","t":8,"p":[Function],"rt":$n[0].Void,"fs":"onUpdateVector3Object"},"fn":"onUpdateVector3Object"},{"a":2,"n":"origRotation","t":16,"rt":$n[3].Quaternion,"g":{"a":2,"n":"get_origRotation","t":8,"rt":$n[3].Quaternion,"fg":"origRotation"},"s":{"a":2,"n":"set_origRotation","t":8,"p":[$n[3].Quaternion],"rt":$n[0].Void,"fs":"origRotation"},"fn":"origRotation"},{"a":2,"n":"path","t":16,"rt":LTBezierPath,"g":{"a":2,"n":"get_path","t":8,"rt":LTBezierPath,"fg":"path"},"s":{"a":2,"n":"set_path","t":8,"p":[LTBezierPath],"rt":$n[0].Void,"fs":"path"},"fn":"path"},{"a":2,"n":"point","t":16,"rt":$n[3].Vector3,"g":{"a":2,"n":"get_point","t":8,"rt":$n[3].Vector3,"fg":"point"},"s":{"a":2,"n":"set_point","t":8,"p":[$n[3].Vector3],"rt":$n[0].Void,"fs":"point"},"fn":"point"},{"a":2,"n":"spline","t":16,"rt":LTSpline,"g":{"a":2,"n":"get_spline","t":8,"rt":LTSpline,"fg":"spline"},"s":{"a":2,"n":"set_spline","t":8,"p":[LTSpline],"rt":$n[0].Void,"fs":"spline"},"fn":"spline"},{"a":2,"n":"toTrans","t":16,"rt":$n[3].Transform,"g":{"a":2,"n":"get_toTrans","t":8,"rt":$n[3].Transform,"fg":"toTrans"},"s":{"a":2,"n":"set_toTrans","t":8,"p":[$n[3].Transform],"rt":$n[0].Void,"fs":"toTrans"},"fn":"toTrans"},{"a":2,"n":"animationCurve","t":4,"rt":pc.AnimationCurve,"sn":"animationCurve"},{"a":2,"n":"color","t":4,"rt":$n[3].Color,"sn":"color"},{"a":2,"n":"initFrameCount","t":4,"rt":$n[0].Int32,"sn":"initFrameCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<axis>k__BackingField","t":4,"rt":$n[3].Vector3,"sn":"axis"},{"a":1,"backing":true,"n":"<lastVal>k__BackingField","t":4,"rt":$n[0].Single,"sn":"lastVal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<ltRect>k__BackingField","t":4,"rt":LTRect,"sn":"ltRect"},{"a":1,"backing":true,"n":"<onComplete>k__BackingField","t":4,"rt":Function,"sn":"onComplete"},{"a":1,"backing":true,"n":"<onCompleteObject>k__BackingField","t":4,"rt":Function,"sn":"onCompleteObject"},{"a":1,"backing":true,"n":"<onCompleteParam>k__BackingField","t":4,"rt":$n[0].Object,"sn":"onCompleteParam"},{"a":1,"backing":true,"n":"<onStart>k__BackingField","t":4,"rt":Function,"sn":"onStart"},{"a":1,"backing":true,"n":"<onUpdateColor>k__BackingField","t":4,"rt":Function,"sn":"onUpdateColor"},{"a":1,"backing":true,"n":"<onUpdateColorObject>k__BackingField","t":4,"rt":Function,"sn":"onUpdateColorObject"},{"a":1,"backing":true,"n":"<onUpdateFloat>k__BackingField","t":4,"rt":Function,"sn":"onUpdateFloat"},{"a":1,"backing":true,"n":"<onUpdateFloatObject>k__BackingField","t":4,"rt":Function,"sn":"onUpdateFloatObject"},{"a":1,"backing":true,"n":"<onUpdateFloatRatio>k__BackingField","t":4,"rt":Function,"sn":"onUpdateFloatRatio"},{"a":1,"backing":true,"n":"<onUpdateParam>k__BackingField","t":4,"rt":$n[0].Object,"sn":"onUpdateParam"},{"a":1,"backing":true,"n":"<onUpdateVector2>k__BackingField","t":4,"rt":Function,"sn":"onUpdateVector2"},{"a":1,"backing":true,"n":"<onUpdateVector3>k__BackingField","t":4,"rt":Function,"sn":"onUpdateVector3"},{"a":1,"backing":true,"n":"<onUpdateVector3Object>k__BackingField","t":4,"rt":Function,"sn":"onUpdateVector3Object"},{"a":1,"backing":true,"n":"<origRotation>k__BackingField","t":4,"rt":$n[3].Quaternion,"sn":"origRotation"},{"a":1,"backing":true,"n":"<path>k__BackingField","t":4,"rt":LTBezierPath,"sn":"path"},{"a":1,"backing":true,"n":"<point>k__BackingField","t":4,"rt":$n[3].Vector3,"sn":"point"},{"a":1,"backing":true,"n":"<spline>k__BackingField","t":4,"rt":LTSpline,"sn":"spline"},{"a":1,"backing":true,"n":"<toTrans>k__BackingField","t":4,"rt":$n[3].Transform,"sn":"toTrans"}]}; }, $n);
    /*LTDescrOptional end.*/

    /*LTSeq start.*/
    $m("LTSeq", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"addOn","t":8,"sn":"addOn","rt":LTSeq},{"a":1,"n":"addPreviousDelays","t":8,"sn":"addPreviousDelays","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"append","t":8,"pi":[{"n":"tween","pt":LTDescr,"ps":0}],"sn":"append","rt":LTSeq,"p":[LTDescr]},{"a":2,"n":"append","t":8,"pi":[{"n":"callback","pt":Function,"ps":0}],"sn":"append$1","rt":LTSeq,"p":[Function]},{"a":2,"n":"append","t":8,"pi":[{"n":"delay","pt":$n[0].Single,"ps":0}],"sn":"append$3","rt":LTSeq,"p":[$n[0].Single]},{"a":2,"n":"append","t":8,"pi":[{"n":"callback","pt":Function,"ps":0},{"n":"obj","pt":$n[0].Object,"ps":1}],"sn":"append$2","rt":LTSeq,"p":[Function,$n[0].Object]},{"a":2,"n":"append","t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callback","pt":Function,"ps":1}],"sn":"append$4","rt":LTSeq,"p":[$n[3].GameObject,Function]},{"a":2,"n":"append","t":8,"pi":[{"n":"gameObject","pt":$n[3].GameObject,"ps":0},{"n":"callback","pt":Function,"ps":1},{"n":"obj","pt":$n[0].Object,"ps":2}],"sn":"append$5","rt":LTSeq,"p":[$n[3].GameObject,Function,$n[0].Object]},{"a":2,"n":"init","t":8,"pi":[{"n":"id","pt":$n[0].UInt32,"ps":0},{"n":"global_counter","pt":$n[0].UInt32,"ps":1}],"sn":"init","rt":$n[0].Void,"p":[$n[0].UInt32,$n[0].UInt32]},{"a":2,"n":"insert","t":8,"pi":[{"n":"tween","pt":LTDescr,"ps":0}],"sn":"insert","rt":LTSeq,"p":[LTDescr]},{"a":2,"n":"reset","t":8,"sn":"reset","rt":$n[0].Void},{"a":2,"n":"reverse","t":8,"sn":"reverse","rt":LTSeq},{"a":2,"n":"setScale","t":8,"pi":[{"n":"timeScale","pt":$n[0].Single,"ps":0}],"sn":"setScale","rt":LTSeq,"p":[$n[0].Single]},{"a":1,"n":"setScaleRecursive","t":8,"pi":[{"n":"seq","pt":LTSeq,"ps":0},{"n":"timeScale","pt":$n[0].Single,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"setScaleRecursive","rt":$n[0].Void,"p":[LTSeq,$n[0].Single,$n[0].Int32]},{"a":2,"n":"id","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_id","t":8,"rt":$n[0].Int32,"fg":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"id"},{"a":1,"n":"_id","t":4,"rt":$n[0].UInt32,"sn":"_id","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":2,"n":"counter","t":4,"rt":$n[0].UInt32,"sn":"counter","box":function ($v) { return Bridge.box($v, System.UInt32);}},{"a":2,"n":"current","t":4,"rt":LTSeq,"sn":"current"},{"a":1,"n":"debugIter","t":4,"rt":$n[0].Int32,"sn":"debugIter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"previous","t":4,"rt":LTSeq,"sn":"previous"},{"a":2,"n":"timeScale","t":4,"rt":$n[0].Single,"sn":"timeScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"toggle","t":4,"rt":$n[0].Boolean,"sn":"toggle","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"totalDelay","t":4,"rt":$n[0].Single,"sn":"totalDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tween","t":4,"rt":LTDescr,"sn":"tween"}]}; }, $n);
    /*LTSeq end.*/

    /*MoveWithFingerTest start.*/
    $m("MoveWithFingerTest", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"confetti","t":4,"rt":$n[3].GameObject,"sn":"confetti"},{"a":2,"n":"reticle","t":4,"rt":$n[3].Transform,"sn":"reticle"},{"a":2,"n":"reticleRotationModifier","t":4,"rt":$n[0].Single,"sn":"reticleRotationModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"speedModifier","t":4,"rt":$n[0].Single,"sn":"speedModifier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"touch","t":4,"rt":$n[3].Touch,"sn":"touch"},{"a":1,"n":"transPosition","t":4,"rt":$n[3].Vector3,"sn":"transPosition"},{"a":2,"n":"triggerBox","t":4,"rt":DetectObjectEnteringHitbox,"sn":"triggerBox"}]}; }, $n);
    /*MoveWithFingerTest end.*/

    /*oilAnimFix start.*/
    $m("oilAnimFix", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"struckOil","t":8,"sn":"struckOil","rt":$n[1].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ball","t":4,"rt":$n[3].GameObject,"sn":"ball"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"derrick","t":4,"rt":$n[3].GameObject,"sn":"derrick"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"derrickReplacePrefab","t":4,"rt":$n[3].GameObject,"sn":"derrickReplacePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"particleOil","t":4,"rt":$n[3].GameObject,"sn":"particleOil"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"particleOilDrop","t":4,"rt":$n[3].GameObject,"sn":"particleOilDrop"}]}; }, $n);
    /*oilAnimFix end.*/

    /*FontChanger start.*/
    $m("FontChanger", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetFontTMP","t":8,"sn":"GetFontTMP","rt":$n[5].TMP_FontAsset},{"a":2,"n":"GetFontText","t":8,"sn":"GetFontText","rt":$n[3].Font},{"a":2,"n":"Instance","is":true,"t":4,"rt":FontChanger,"sn":"Instance"},{"a":1,"n":"fontDictTMP","t":4,"rt":$n[6].Dictionary$2(FontsTypes,TMPro.TMP_FontAsset),"sn":"fontDictTMP"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Fonts", 0, "Font Settings", false),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fontSelection","t":4,"rt":FontsTypes,"sn":"fontSelection","box":function ($v) { return Bridge.box($v, FontsTypes, System.Enum.toStringFn(FontsTypes));}},{"a":1,"n":"fontsDictText","t":4,"rt":$n[6].Dictionary$2(FontsTypes,UnityEngine.Font),"sn":"fontsDictText"},{"at":[new UnityEngine.HeaderAttribute("---- TMP Font ----"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fontsTMP","t":4,"rt":$n[6].List$1(TMPro.TMP_FontAsset),"sn":"fontsTMP"},{"at":[new UnityEngine.HeaderAttribute("---- Text Font ----"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fontsText","t":4,"rt":$n[6].List$1(UnityEngine.Font),"sn":"fontsText"}]}; }, $n);
    /*FontChanger end.*/

    /*FontsTypes start.*/
    $m("FontsTypes", function () { return {"att":8449,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"English","is":true,"t":4,"rt":FontsTypes,"sn":"English","box":function ($v) { return Bridge.box($v, FontsTypes, System.Enum.toStringFn(FontsTypes));}},{"a":2,"n":"Japanese","is":true,"t":4,"rt":FontsTypes,"sn":"Japanese","box":function ($v) { return Bridge.box($v, FontsTypes, System.Enum.toStringFn(FontsTypes));}}]}; }, $n);
    /*FontsTypes end.*/

    /*LanguageSettings start.*/
    $m("LanguageSettings", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("---- UI TMP Texts ----")],"a":2,"n":"UI_TMP","t":4,"rt":System.Array.type(TMPro.TMP_Text),"sn":"UI_TMP"},{"at":[new UnityEngine.HeaderAttribute("---- UI Texts ----")],"a":2,"n":"UI_Text","t":4,"rt":System.Array.type(UnityEngine.UI.Text),"sn":"UI_Text"}]}; }, $n);
    /*LanguageSettings end.*/

    /*PauseManager start.*/
    $m("PauseManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Pause","t":8,"sn":"Pause","rt":$n[0].Void},{"a":1,"n":"Resume","t":8,"sn":"Resume","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*PauseManager end.*/

    /*ScriptableUIData start.*/
    $m("ScriptableUIData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "DataBlock", menuName: "data"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Install_BTN_Img","t":4,"rt":$n[3].Sprite,"sn":"Install_BTN_Img"},{"a":2,"n":"endCardLabel_text","t":4,"rt":$n[0].String,"sn":"endCardLabel_text"},{"a":2,"n":"endCardWin_Text","t":4,"rt":$n[0].String,"sn":"endCardWin_Text"},{"a":2,"n":"endcard_IMG","t":4,"rt":$n[3].Sprite,"sn":"endcard_IMG"},{"at":[new UnityEngine.HeaderAttribute("Game start UI settings")],"a":2,"n":"greetingText","t":4,"rt":$n[0].String,"sn":"greetingText"},{"at":[new UnityEngine.HeaderAttribute("End Card UI Settings")],"a":2,"n":"install_CTA_BTN","t":4,"rt":$n[0].String,"sn":"install_CTA_BTN"},{"a":2,"n":"startInstruction","t":4,"rt":$n[0].String,"sn":"startInstruction"}]}; }, $n);
    /*ScriptableUIData end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"SwitchPanel","t":8,"sn":"SwitchPanel","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":UIManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":UIManager,"fg":"Instance","is":true},"s":{"a":1,"n":"set_Instance","t":8,"p":[UIManager],"rt":$n[0].Void,"fs":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"anim","t":4,"rt":$n[3].Animator,"sn":"anim"},{"a":2,"n":"button_install","t":4,"rt":$n[2].Image,"sn":"button_install"},{"at":[new UnityEngine.HeaderAttribute("---- Other ----")],"a":2,"n":"end","t":4,"rt":$n[3].GameObject,"sn":"end"},{"at":[new UnityEngine.HeaderAttribute("---- Data Container ----")],"a":2,"n":"endData","t":4,"rt":ScriptableUIData,"sn":"endData"},{"at":[new UnityEngine.HeaderAttribute("---- Texts ----")],"a":2,"n":"greet_Text","t":4,"rt":$n[2].Text,"sn":"greet_Text"},{"a":2,"n":"install_Btn_Text_TMP","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"install_Btn_Text_TMP"},{"a":2,"n":"label_Text_TMP","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"label_Text_TMP"},{"a":2,"n":"particle","t":4,"rt":$n[3].GameObject,"sn":"particle"},{"at":[new UnityEngine.HeaderAttribute("---- Image/Sprites ----")],"a":2,"n":"profile","t":4,"rt":$n[2].Image,"sn":"profile"},{"a":2,"n":"start","t":4,"rt":$n[3].GameObject,"sn":"start"},{"at":[new UnityEngine.HeaderAttribute("---- TMP Texts ----")],"a":2,"n":"start_Text","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"start_Text"},{"a":2,"n":"winText_TMP","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"winText_TMP"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","is":true,"t":4,"rt":UIManager,"sn":"Instance"}]}; }, $n);
    /*UIManager end.*/

    /*SimpleDuck start.*/
    $m("SimpleDuck", function () { return {"nested":[SimpleDuck.goalAnimObject],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GameOver","t":8,"sn":"GameOver","rt":$n[1].IEnumerator},{"a":1,"n":"GameOverCameraMove","t":8,"sn":"GameOverCameraMove","rt":$n[1].IEnumerator},{"a":1,"n":"HitBall","t":8,"sn":"HitBall","rt":$n[1].IEnumerator},{"a":1,"n":"MoveBall","t":8,"sn":"MoveBall","rt":$n[1].IEnumerator},{"a":2,"n":"OnAfterDeserialize","t":8,"sn":"OnAfterDeserialize","rt":$n[0].Void},{"a":2,"n":"OnBeforeSerialize","t":8,"sn":"OnBeforeSerialize","rt":$n[0].Void},{"a":1,"n":"PauseGameplay","t":8,"sn":"PauseGameplay","rt":$n[0].Void},{"a":1,"n":"ResumeGameplay","t":8,"sn":"ResumeGameplay","rt":$n[0].Void},{"a":1,"n":"SinkBall","t":8,"sn":"SinkBall","rt":$n[1].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TextBounce","t":8,"pi":[{"n":"uiTransform","pt":$n[3].RectTransform,"ps":0},{"n":"offset","dv":0.0,"o":true,"pt":$n[0].Single,"ps":1},{"n":"speedScale","dv":1.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"TextBounce","rt":$n[1].IEnumerator,"p":[$n[3].RectTransform,$n[0].Single,$n[0].Single]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ballReleased","t":8,"sn":"ballReleased","rt":$n[0].Void},{"a":1,"n":"camIntroFlag","t":8,"sn":"camIntroFlag","rt":$n[1].IEnumerator},{"a":1,"n":"camIntroPan","t":8,"sn":"camIntroPan","rt":$n[1].IEnumerator},{"a":1,"n":"fadeTween","t":8,"sn":"fadeTween","rt":$n[0].Void},{"a":1,"n":"resetTween","t":8,"sn":"resetTween","rt":$n[0].Void},{"a":1,"n":"setLunaAssets","t":8,"sn":"setLunaAssets","rt":$n[0].Void},{"a":1,"n":"showEndCard","t":8,"sn":"showEndCard","rt":$n[0].Void},{"a":1,"n":"slideTween","t":8,"sn":"slideTween","rt":$n[0].Void},{"a":2,"n":"GolfClashBanner","t":4,"rt":$n[3].GameObject,"sn":"GolfClashBanner"},{"a":2,"n":"ballInteractionObject","t":4,"rt":$n[3].GameObject,"sn":"ballInteractionObject"},{"a":2,"n":"ballSinkLocation","t":4,"rt":$n[3].Transform,"sn":"ballSinkLocation"},{"a":2,"n":"ballSpeed","t":4,"rt":$n[0].Single,"sn":"ballSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"camFinLocation","t":4,"rt":$n[3].Transform,"sn":"camFinLocation"},{"a":2,"n":"camFovFin","t":4,"rt":$n[0].Single,"sn":"camFovFin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"camGameOverLocation","t":4,"rt":$n[3].Transform,"sn":"camGameOverLocation"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Pan Across Course Time", 0, "Intro", false)],"a":1,"n":"camIntoPanTime","t":4,"rt":$n[0].Single,"sn":"camIntoPanTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Pan Up Flag Time", 0, "Intro", false)],"a":1,"n":"camIntroFlagTime","t":4,"rt":$n[0].Single,"sn":"camIntroFlagTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"camIntroFlagTop","t":4,"rt":$n[3].Transform,"sn":"camIntroFlagTop"},{"a":2,"n":"camIntroPanFinish","t":4,"rt":$n[3].Transform,"sn":"camIntroPanFinish"},{"a":2,"n":"camIntroPanStart","t":4,"rt":$n[3].Transform,"sn":"camIntroPanStart"},{"a":2,"n":"camIntroPlay","t":4,"rt":$n[3].Transform,"sn":"camIntroPlay"},{"a":2,"n":"camIntroStart","t":4,"rt":$n[3].Transform,"sn":"camIntroStart"},{"a":2,"n":"camMoveSwitchValue","t":4,"rt":$n[0].Single,"sn":"camMoveSwitchValue","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"camTimeGameOver","t":4,"rt":$n[0].Single,"sn":"camTimeGameOver","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"chargeArrow","t":4,"rt":$n[3].GameObject,"sn":"chargeArrow"},{"a":1,"n":"deltaYLandscape","t":4,"rt":$n[0].Int32,"sn":"deltaYLandscape","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"deltaYPortrait","t":4,"rt":$n[0].Int32,"sn":"deltaYPortrait","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"disableTap","t":4,"rt":$n[0].Boolean,"sn":"disableTap","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("Camera")],"a":2,"n":"emojis","t":4,"rt":AnimateEmojis,"sn":"emojis"},{"at":[new UnityEngine.HeaderAttribute("Luna Fields"),new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("End Card Top Text", 0, "End Card", false)],"a":1,"n":"endCardTopText","t":4,"rt":$n[0].String,"sn":"endCardTopText"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("End Card text tween time", 0, "End Card", false)],"a":1,"n":"endTextTweenTime","t":4,"rt":$n[0].Single,"sn":"endTextTweenTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("End Card text tween clockwise", 0, "End Card", false)],"a":1,"n":"endTextclockwise","t":4,"rt":$n[0].Boolean,"sn":"endTextclockwise","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("End Card text tween easing method", 0, "End Card", false)],"a":1,"n":"endTexteaseType","t":4,"rt":LeanTweenType,"sn":"endTexteaseType","box":function ($v) { return Bridge.box($v, LeanTweenType, System.Enum.toStringFn(LeanTweenType));}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("End Card text final position", 0, "End Card", false)],"a":1,"n":"endTextendYPos","t":4,"rt":$n[0].Single,"sn":"endTextendYPos","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"finger","t":4,"rt":$n[3].GameObject,"sn":"finger"},{"a":1,"n":"fingerImage","t":4,"rt":$n[2].Image,"sn":"fingerImage"},{"a":1,"n":"fingerStartPos","t":4,"rt":$n[3].Vector3,"sn":"fingerStartPos"},{"a":1,"n":"fingerStartPosLandscape","t":4,"rt":$n[3].Vector2,"sn":"fingerStartPosLandscape"},{"a":1,"n":"fingerStartPosPortrait","t":4,"rt":$n[3].Vector2,"sn":"fingerStartPosPortrait"},{"a":2,"n":"fingerTransform","t":4,"rt":$n[3].RectTransform,"sn":"fingerTransform"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("finger Tween Speed", 0, "UI", false)],"a":1,"n":"fingerTweenTime","t":4,"rt":$n[0].Single,"sn":"fingerTweenTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"finishText","t":4,"rt":$n[3].GameObject,"sn":"finishText"},{"a":2,"n":"finishTextTransform","t":4,"rt":$n[3].RectTransform,"sn":"finishTextTransform"},{"at":[new UnityEngine.HeaderAttribute("Flag")],"a":2,"n":"flag","t":4,"rt":$n[3].GameObject,"sn":"flag"},{"a":2,"n":"flagFinLocation","t":4,"rt":$n[3].Transform,"sn":"flagFinLocation"},{"a":1,"n":"flagStartPos","t":4,"rt":$n[3].Vector3,"sn":"flagStartPos"},{"a":2,"n":"goalAnimAnimator","t":4,"rt":$n[3].Animator,"sn":"goalAnimAnimator"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Animation Object", 0, "Goal Animation", false)],"a":1,"n":"goalAnimationChoice","t":4,"rt":SimpleDuck.goalAnimObject,"sn":"goalAnimationChoice","box":function ($v) { return Bridge.box($v, SimpleDuck.goalAnimObject, System.Enum.toStringFn(SimpleDuck.goalAnimObject));}},{"a":2,"n":"goalAnimationObject","t":4,"rt":$n[3].GameObject,"sn":"goalAnimationObject"},{"at":[new UnityEngine.HeaderAttribute("Golf Ball")],"a":2,"n":"golfBall","t":4,"rt":$n[3].GameObject,"sn":"golfBall"},{"a":2,"n":"golfBallDrag","t":4,"rt":$n[0].Single,"sn":"golfBallDrag","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"golfBallFinalLocation","t":4,"rt":$n[3].Transform,"sn":"golfBallFinalLocation"},{"a":2,"n":"golfBallRotateDrag","t":4,"rt":$n[0].Single,"sn":"golfBallRotateDrag","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"golfBallRotateSpeed","t":4,"rt":$n[0].Single,"sn":"golfBallRotateSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"golfBallStartLocation","t":4,"rt":$n[3].Transform,"sn":"golfBallStartLocation"},{"at":[new UnityEngine.HeaderAttribute("Put Area")],"a":2,"n":"golfClub","t":4,"rt":$n[3].GameObject,"sn":"golfClub"},{"a":2,"n":"golfClubHitRot","t":4,"rt":$n[3].Transform,"sn":"golfClubHitRot"},{"a":1,"n":"golfClubstart","t":4,"rt":$n[3].Transform,"sn":"golfClubstart"},{"a":2,"n":"hitAngle","t":4,"rt":$n[0].Single,"sn":"hitAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Hit Arrow")],"a":2,"n":"hitAngleBackground","t":4,"rt":$n[3].GameObject,"sn":"hitAngleBackground"},{"a":2,"n":"hitArrow","t":4,"rt":$n[3].GameObject,"sn":"hitArrow"},{"a":2,"n":"hitScale","t":4,"rt":$n[0].Single,"sn":"hitScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hitspeed","t":4,"rt":$n[0].Single,"sn":"hitspeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("End Card")],"a":2,"n":"holeInOne","t":4,"rt":$n[3].GameObject,"sn":"holeInOne"},{"a":2,"n":"icon","t":4,"rt":$n[3].GameObject,"sn":"icon"},{"at":[new UnityEngine.HeaderAttribute("UI")],"a":2,"n":"interactionUI","t":4,"rt":$n[3].GameObject,"sn":"interactionUI"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Use Golf Clash Banner", 0, "Intro", false)],"a":1,"n":"introBanner","t":4,"rt":$n[0].Boolean,"sn":"introBanner","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.HeaderAttribute("fake level")],"a":2,"n":"landscape","t":4,"rt":$n[3].GameObject,"sn":"landscape"},{"a":2,"n":"lvl2Transform","t":4,"rt":$n[3].Transform,"sn":"lvl2Transform"},{"a":2,"n":"mainCam","t":4,"rt":$n[3].Camera,"sn":"mainCam"},{"at":[new UnityEngine.HeaderAttribute("Particles")],"a":2,"n":"particleGoal","t":4,"rt":$n[3].GameObject,"sn":"particleGoal"},{"a":2,"n":"playNow","t":4,"rt":$n[3].GameObject,"sn":"playNow"},{"a":2,"n":"playNowTransform","t":4,"rt":$n[3].RectTransform,"sn":"playNowTransform"},{"a":1,"n":"secondArea","t":4,"rt":$n[0].Boolean,"sn":"secondArea","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"secondBall","t":4,"rt":$n[3].GameObject,"sn":"secondBall"},{"a":2,"n":"secondGolfClub","t":4,"rt":$n[3].GameObject,"sn":"secondGolfClub"},{"a":2,"n":"sinkTime","t":4,"rt":$n[0].Single,"sn":"sinkTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"speedFloor","t":4,"rt":$n[0].Single,"sn":"speedFloor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"startArea","t":4,"rt":$n[0].Boolean,"sn":"startArea","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"startText","t":4,"rt":$n[3].GameObject,"sn":"startText"},{"a":2,"n":"startTextTransform","t":4,"rt":$n[3].RectTransform,"sn":"startTextTransform"},{"a":2,"n":"struckOilCamLocation","t":4,"rt":$n[3].Transform,"sn":"struckOilCamLocation"},{"a":2,"n":"struckOilPrefab","t":4,"rt":$n[3].GameObject,"sn":"struckOilPrefab"},{"a":2,"n":"testHit","t":4,"rt":$n[0].Boolean,"sn":"testHit","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"title","t":4,"rt":$n[3].GameObject,"sn":"title"},{"a":2,"n":"tubemanCamLocation","t":4,"rt":$n[3].Transform,"sn":"tubemanCamLocation"},{"at":[new UnityEngine.HeaderAttribute("Goal Anim Object")],"a":2,"n":"tubemanPrefab","t":4,"rt":$n[3].GameObject,"sn":"tubemanPrefab"},{"a":2,"n":"uiTextBounceSpeed","t":4,"rt":$n[0].Single,"sn":"uiTextBounceSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"uiTextScaleFactor","t":4,"rt":$n[0].Single,"sn":"uiTextScaleFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.LunaPlaygroundFieldAttribute("Camera Intro", 0, "Camera", false)],"a":1,"n":"useCameraIntro","t":4,"rt":$n[0].Boolean,"sn":"useCameraIntro","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SimpleDuck end.*/

    /*SimpleDuck+goalAnimObject start.*/
    $m("SimpleDuck.goalAnimObject", function () { return {"td":SimpleDuck,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"struckOil","is":true,"t":4,"rt":SimpleDuck.goalAnimObject,"sn":"struckOil","box":function ($v) { return Bridge.box($v, SimpleDuck.goalAnimObject, System.Enum.toStringFn(SimpleDuck.goalAnimObject));}},{"a":2,"n":"tubeman","is":true,"t":4,"rt":SimpleDuck.goalAnimObject,"sn":"tubeman","box":function ($v) { return Bridge.box($v, SimpleDuck.goalAnimObject, System.Enum.toStringFn(SimpleDuck.goalAnimObject));}}]}; }, $n);
    /*SimpleDuck+goalAnimObject end.*/

    /*tweenText start.*/
    $m("tweenText", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"startTween","t":8,"pi":[{"n":"endYPos","dv":600.0,"o":true,"pt":$n[0].Single,"ps":0},{"n":"tweenTime","dv":2.0,"o":true,"pt":$n[0].Single,"ps":1},{"n":"clockwise","dv":true,"o":true,"pt":$n[0].Boolean,"ps":2},{"n":"easeType","dv":16,"o":true,"pt":LeanTweenType,"ps":3}],"sn":"startTween","rt":$n[0].Void,"p":[$n[0].Single,$n[0].Single,$n[0].Boolean,LeanTweenType]},{"a":1,"n":"startYPos","t":4,"rt":$n[0].Single,"sn":"startYPos","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*tweenText end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DentedPixel.LeanDummy start.*/
    $m("DentedPixel.LeanDummy", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*DentedPixel.LeanDummy end.*/

});
