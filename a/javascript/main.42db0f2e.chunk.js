(this["webpackJsonpair-conditioner"] = this["webpackJsonpair-conditioner"] || []).push([
	[0], {
		104: function(e, t, r) {},
		105: function(e, t, r) {},
		111: function(e, t, r) {},
		114: function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r(0),
				a = r.n(n),
				o = r(33),
				c = r.n(o),
				i = (r(104), r(105), r(139)),
				s = r(116),
				l = r(93),
				d = r(2);

			function u(e) {
				var t = e.children,
					r = Object(i.a)("(prefers-color-scheme: dark)") ? "dark" : "light",
					a = Object(n.useMemo)((function() {
						return Object(l.a)({
							palette: {
								mode: r
							}
						})
					}), [r]);
				return Object(d.jsx)(s.a, {
					theme: a,
					children: t
				})
			}
			var j = r(150),
				b = r(92),
				h = r(14),
				g = r(152),
				m = r(151),
				f = r(142),
				x = r(145),
				p = r(86),
				O = r.n(p),
				w = Object(x.a)((function(e) {
					return {
						root: {
							margin: e.spacing(3, 0),
							display: "flex",
							justifyContent: "center",
							alignItems: "center"
						}
					}
				}));

			function v() {
				var e = w();
				return Object(d.jsxs)(m.a, {
					align: "center",
					className: e.root,
					color: "textSecondary",
					children: [Object(d.jsx)(O.a, {}),
						"Tip: 给宝贝送去夏日清凉！"
					]
				})
			}
			var y = r(32),
				k = r(143),
				C = r(153),
				S = r(90),
				N = r.n(S),
				I = r(91),
				B = r.n(I),
				L = r(88),
				T = r.n(L),
				R = r(87),
				E = r.n(R),
				W = r(89),
				Y = r.n(W),
				A = r(60),
				F = r(52),
				J = function() {
					return Object(F.b)()
				},
				M = F.c,
				D = r(45),
				P = Object(D.b)({
					name: "toast",
					initialState: {
						open: !1,
						message: ""
					},
					reducers: {
						setMessage: function(e, t) {
							e.message = t.payload
						},
						setOpen: function(e, t) {
							e.open = t.payload
						}
					}
				}),
				U = P.actions,
				_ = U.setMessage,
				V = U.setOpen,
				z = P.reducer,
				G = {
					status: "ac-status",
					mode: "ac-mode",
					temperature: "ac-temperature"
				},
				H = {
					status: !1,
					mode: localStorage.getItem(G.mode) || "cold",
					temperature: parseInt(localStorage.getItem(G.temperature) || "") || 20
				},
				$ = Object(D.b)({
					name: "ac",
					initialState: H,
					reducers: {
						setStatus: function(e, t) {
							e.status = t.payload
						},
						setTemperature: function(e, t) {
							e.temperature = t.payload
						},
						increment: function(e) {
							e.temperature += 1, localStorage.setItem(G.temperature, e.temperature
								.toString())
						},
						decrement: function(e) {
							e.temperature -= 1, localStorage.setItem(G.temperature, e.temperature
								.toString())
						},
						setMode: function(e, t) {
							e.mode = t.payload, localStorage.setItem(G.mode, e.mode)
						},
						toggleStatus: function(e) {
							e.status = !e.status, localStorage.setItem(G.status, e.status
							.toString())
						}
					}
				}),
				q = function(e) {
					return e.ac.temperature
				},
				K = $.actions,
				Q = K.setTemperature,
				X = K.increment,
				Z = K.decrement,
				ee = K.setMode,
				te = K.toggleStatus,
				re = K.setStatus,
				ne = $.reducer;

			function ae(e) {
				return "https://cdn.jsdelivr.net/gh/YunYouJun/air-conditioner/public" + e
			}
			var oe, ce, ie = Object(x.a)((function(e) {
				return {
					margin: {
						margin: e.spacing(1)
					},
					extendedIcon: {
						marginRight: e.spacing(1)
					}
				}
			}));

			function se(e) {
				return Object(d.jsx)(C.a, Object(y.a)(Object(y.a)({}, e), {}, {
					onClick: function() {
						! function() {
							var e = document.getElementById("di");
							e && e.play()
						}(), e.onClick()
					}
				}))
			}

			function le() {
				var e = document.getElementById("ac-work");
				e.load(), e.play(), setTimeout((function() {
					! function() {
						var e = document.getElementById("air-extractor-fan");
						e.load(), e.play(), oe = setTimeout((function() {
							ce = setInterval((function() {
								e.currentTime = 2
							}), 56e3)
						}), 2e3)
					}()
				}), 8e3)
			}
			var de = Object(l.a)({
					palette: {
						primary: A.a
					}
				}),
				ue = ae("/assets/audio/di.mp3"),
				je = ae("/assets/audio/ac-work.mp3"),
				be = ae("/assets/audio/air-extractor-fan.mp3");

			function he() {
				var e = ie(),
					t = M((function(e) {
						return e.ac
					})),
					r = J();
				return Object(d.jsxs)(f.a, {
					my: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					children: [Object(d.jsx)("audio", {
						id: "di",
						src: ue,
						preload: "auto"
					}), Object(d.jsx)("audio", {
						id: "ac-work",
						src: je,
						preload: "auto"
					}), Object(d.jsx)("audio", {
						id: "air-extractor-fan",
						src: be,
						preload: "auto"
					}), Object(d.jsxs)("div", {
						children: [" ", Object(d.jsx)(se, {
							color: "primary",
							"aria-label": "cold",
							className: e.margin,
							onClick: function() {
								r(ee("cold"))
							},
							children: Object(d.jsx)(E.a, {})
						}), Object(d.jsx)(k.a, {
							theme: de,
							children: Object(d.jsx)(se, {
								color: t.status ? "secondary" :
									"primary",
								"aria-label": "add",
								className: e.margin,
								onClick: function() {
									! function(e, t) {
										if (e) {
											document
												.getElementById(
													"ac-work")
												.load();
											var r = document
												.getElementById(
													"air-extractor-fan"
													);
											oe && clearTimeout(
													oe), ce &&
												clearInterval(
													ce), r
												.currentTime =
												58
										} else le();
										t(te())
									}(t.status, r)
								},
								style: {
									color: "white"
								},
								children: Object(d.jsx)(T.a, {})
							})
						}), Object(d.jsx)(se, {
							"aria-label": "hot",
							className: e.margin,
							style: {
								backgroundColor: "orange",
								color: "white"
							},
							onClick: function() {
								r(ee("hot"))
							},
							children: Object(d.jsx)(Y.a, {})
						})]
					}), Object(d.jsx)(se, {
						"aria-label": "add",
						className: e.margin,
						onClick: function() {
							r((function(e, t) {
								q(t()) < 31 ? e(X()) : (e(_(
									"已经是最大温度啦！"
									)), e(V(!0)))
							}))
						},
						children: Object(d.jsx)(N.a, {})
					}), Object(d.jsx)(se, {
						"aria-label": "reduce",
						className: e.margin,
						onClick: function() {
							r((function(e, t) {
								q(t()) > 16 ? e(Z()) : (e(_(
									"已经是最小温度啦！"
									)), e(V(!0)))
							}))
						},
						children: Object(d.jsx)(B.a, {})
					})]
				})
			}
			var ge = r(15),
				me = r(149),
				fe = r(144),
				xe = r.p + "./static/media/logo.5fb28574.svg",
				pe = r(38),
				Oe = (r(111), "#e0e0e0"),
				we = "#cccccc",
				ve = "#bbbbbb",
				ye = Object(x.a)((function(e) {
					return {
						acBorder: {
							borderRadius: 10,
							borderBottomLeftRadius: 20,
							borderBottomRightRadius: 20
						},
						acDisplay: {
							textShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)"
						},
						acLogo: {
							width: 12
						},
						acStatus: {
							backgroundColor: function(e) {
								return e.backgroundColor || "transparent"
							}
						},
						energyLabel: {
							backgroundColor: "#4ea5f5"
						}
					}
				}));

			function ke(e) {
				return Object(d.jsx)(f.a, Object(y.a)({
					bgcolor: "background.paper",
					height: 150,
					border: 1,
					borderColor: Oe,
					borderRadius: 10,
					boxShadow: 3,
					position: "relative"
				}, e))
			}

			function Ce() {
				var e = M(q);
				return Object(d.jsxs)(m.a, {
					variant: "h4",
					align: "center",
					children: [Object(d.jsx)("span", {
						className: "font-digit ac-temperature",
						children: e
					}), Object(d.jsx)("small", {
						className: "font-digit",
						children: "\xb0C"
					})]
				})
			}
			var Se = a.a.forwardRef((function(e, t) {
				return Object(d.jsxs)(f.a, Object(y.a)(Object(y.a)({}, e), {}, {
					ref: t,
					position: "absolute",
					top: 25,
					right: 30,
					color: we,
					children: [Object(d.jsxs)(m.a, {
						align: "left",
						variant: "subtitle2",
						children: [Object(d.jsx)("span", {
							children: "cold" === e.mode ?
								"❄" : "☀️"
						}), "\ufe0f\ufe0f"]
					}), Object(d.jsx)(Ce, {})]
				}))
			}));

			function Ne(e) {
				return Object(d.jsx)(f.a, {
					textAlign: "center",
					mt: 12,
					children: Object(d.jsx)("a", {
						href: pe.c.url,
						title: pe.b,
						target: "_blank",
						rel: "noreferrer noopener",
						children: Object(d.jsx)("img", {
							className: e.className,
							
						})
					})
				})
			}

			function Ie() {
				return Object(d.jsx)(f.a, {
					mt: 1,
					border: 1,
					borderColor: Oe
				})
			}

			function Be(e) {
				var t = {
						backgroundColor: e.status ? "#38F709" : Oe
					},
					r = ye(t);
				return Object(d.jsx)(f.a, {
					className: r.acStatus,
					position: "absolute",
					height: 4,
					width: 4,
					borderRadius: "50%",
					top: 130,
					right: 10
				})
			}

			function Le(e, t, r, n) {
				var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
					o = Object(ge.a)(new Array(e).keys()),
					c = o.map((function(e) {
						return Object(d.jsx)(f.a, {
							mx: n,
							my: a,
							width: r,
							height: r,
							borderRadius: "50%",
							bgcolor: t
						}, e)
					}));
				return Object(d.jsx)(f.a, {
					display: "flex",
					justifyContent: "center",
					children: c
				})
			}

			function Te(e) {
				return Object(d.jsxs)(f.a, {
					className: e.className,
					position: "absolute",
					top: 10,
					left: 10,
					height: 70,
					width: 50,
					borderRadius: 2,
					p: .5,
					children: [Le(6, "white", 4, .25), Object(d.jsxs)(f.a, {
						my: .5,
						px: 1,
						py: .25,
						height: 28,
						width: "100%",
						bgcolor: "background.paper",
						children: [Object(d.jsxs)(me.a, {
							container: !0,
							children: [Object(d.jsx)(f.a, {
								bgcolor: "green",
								height: 3,
								width: "40%"
							}), Object(d.jsx)(f.a, {
								height: 3,
								marginLeft: "40%",
								style: {
									borderTop: 1.5,
									borderRight: 2,
									borderBottom: 1.5,
									borderLeft: 0,
									borderTopColor: "transparent",
									borderRightColor: "green",
									borderBottomColor: "transparent",
									borderLeftColor: "transparent",
									borderStyle: "solid"
								}
							}), Object(d.jsx)(f.a, {
								bgcolor: "green",
								height: 3,
								width: "10%"
							})]
						}), Object(d.jsx)(f.a, {
							mt: .25,
							bgcolor: "lightGreen",
							height: 3,
							width: "50%"
						}), Object(d.jsx)(f.a, {
							mt: .25,
							bgcolor: "#ffc107",
							height: 3,
							width: "60%"
						}), Object(d.jsx)(f.a, {
							mt: .25,
							bgcolor: "orange",
							height: 3,
							width: "70%"
						}), Object(d.jsx)(f.a, {
							mt: .25,
							bgcolor: "red",
							height: 3,
							width: "80%"
						})]
					}), Object(d.jsxs)(f.a, {
						mb: .25,
						pt: .1,
						height: 20,
						width: "100%",
						bgcolor: "background.paper",
						children: [Le(11, "black", 2, .1, .25), Object(d.jsx)(f.a, {
							my: .1,
							borderTop: 1,
							height: 0,
							width: "100%"
						}), Le(9, "black", 1.5, .1, .25), Le(10, "black", 1.2,
							.1, 0)]
					}), Le(8, "white", 2, .1)]
				})
			}
			var Re = a.a.forwardRef((function(e, t) {
				return Object(d.jsxs)(f.a, Object(y.a)(Object(y.a)({}, e), {}, {
					ref: t,
					mt: 3,
					display: "flex",
					justifyContent: "center",
					children: [Object(d.jsx)(f.a, {
						style: {
							transform: "rotate(10deg)"
						},
						bgcolor: ve,
						width: 5,
						height: 40
					}), Object(d.jsx)(f.a, {
						mx: 10,
						bgcolor: ve,
						width: 5,
						height: 40
					}), Object(d.jsx)(f.a, {
						style: {
							transform: "rotate(-10deg)"
						},
						bgcolor: ve,
						width: 5,
						height: 40
					})]
				}))
			}));

			function Ee(e) {
				var t = ye(e);
				return Object(d.jsxs)(f.a, {
					children: [Object(d.jsxs)(ke, {
						className: t.acBorder,
						children: [Object(d.jsx)(fe.a, {
							in: e.status,
							children: Object(d.jsx)(Se, {
								mode: e.mode
							})
						}), Object(d.jsx)(Ne, {
							className: t.acLogo
						}), Object(d.jsx)(Ie, {}), Object(d.jsx)(Be, {
							status: e.status
						}), Object(d.jsx)(Te, {
							className: t.energyLabel,
							titleLength: 6
						})]
					}), Object(d.jsx)(fe.a, {
						in: e.status,
						timeout: {
							enter: 2500,
							exit: 1500
						},
						children: Object(d.jsx)(Re, {})
					})]
				})
			}
			var We = r(148),
				Ye = r(146);

			function Ae() {
				var e = M((function(e) {
						return e.toast
					})),
					t = J(),
					r = function(e, r) {
						t(V(!1))
					};
				return Object(d.jsx)(We.a, {
					open: e.open,
					autoHideDuration: 5e3,
					onClose: r,
					children: Object(d.jsx)(Ye.a, {
						onClose: r,
						severity: "error",
						style: {
							width: "100%"
						},
						children: e.message
					})
				})
			}
			var Fe = r(155);
			var Je = function() {
				return Object(d.jsxs)("div", {
					children: [Object(d.jsx)(f.a, {
						children: Object(d.jsxs)(m.a, {
							variant: "body2",
							color: "textSecondary",
							align: "center",
							children: ["\xa9 ", Object(d.jsx)(Fe.a, {
								color: "inherit",
								href: pe.c.url,
								target: "_blank",
								children: "91\u5929\u5b87\u5de5\u4f5c\u5ba4"
							}), " - ", Object(d.jsx)(Fe.a, {
								color: "inherit",
								href: pe.a.url,
								target: "_blank",
								children: pe.a.name
							})]
						})
					}), Object(d.jsx)(m.a, {
						variant: "body2",
						color: "textSecondary",
						align: "center",
						children: " 2019 - " + (new Date).getFullYear()
					})]
				})
			};
			var Me = function() {
				var e = M((function(e) {
						return e.ac
					})),
					t = J();
				return Object(n.useEffect)((function() {
					function e(e) {
						switch (e.key) {
							case G.status:
								t(re("true" === e.newValue));
								break;
							case G.temperature:
								t(Q(parseInt(e.newValue || "20")));
								break;
							case G.mode:
								t(ee(e.newValue || "cold"))
						}
					}
					return window.addEventListener("storage", e),
						function() {
							window.removeEventListener("storage", e)
						}
				}), [t]), Object(d.jsx)(u, {
					children: Object(d.jsxs)(j.a, {
						maxWidth: "sm",
						className: e.status ? "hot" === e.mode ? "hot-color" :
							"cold-color" : "",
						children: [Object(d.jsxs)(f.a, {
							sx: {
								pt: 4
							},
							bgcolor: "transparent",
							children: [Object(d.jsx)(m.a, {
									color: "textPrimary",
									align: "center",
									variant: "h4",
									component: "h1",
									gutterBottom: !0,
									children: "李思念专属便携小空调"
								}), Object(d.jsx)(v, {}), Object(d.jsx)(
									Ee, {
										status: e.status,
										temperature: e.temperature,
										mode: e.mode
									}), Object(d.jsx)("div", {
									className: "text-center",
									children: Object(d.jsx)(f.a, {
										sx: {
											mt: 2
										},
										children: Object(d
											.jsx)(g.a, {
											variant: "outlined",
											onClick: function() {
												window
													.open(
														"https://annihi.lanzoui.com/s/Az",/*这行是链接网址 
													
														   安争
														"_blank",/*https://annihi.lanzoui.com/s/Az*/
														"width=300, height=400"
														)
											},
											children: "遥控空调"
										})
									})
								}), Object(d.jsx)(he, {}), Object(d.jsx)
								(Je, {})
							]
						}), Object(d.jsx)(Ae, {})]
					})
				})
			};

			function De() {
				return Object(d.jsx)(he, {})
			}
			var Pe = function() {
					return Object(d.jsx)(u, {
						children: Object(d.jsx)(j.a, {
							maxWidth: "sm",
							children: Object(d.jsx)(b.a, {
								children: Object(d.jsxs)(h.c, {
									children: [Object(d.jsx)(h.a, {
										path: "/rc",
										children: Object(d.jsx)(
											De, {})
									}), Object(d.jsx)(h.a, {
										path: "/",
										children: Object(d.jsx)(
											Me, {})
									})]
								})
							})
						})
					})
				},
				Ue = Object(D.a)({
					reducer: {
						ac: ne,
						toast: z
					}
				}),
				_e = Boolean("localhost" === window.location.hostname || "[::1]" === window.location
					.hostname || window.location.hostname.match(
						/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

			function Ve(e, t) {
				navigator.serviceWorker.register(e).then((function(e) {
					e.onupdatefound = function() {
						var r = e.installing;
						null != r && (r.onstatechange = function() {
							"installed" === r.state && (navigator.serviceWorker
								.controller ? (console.log(
									"New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
									), t && t.onUpdate && t.onUpdate(e)) : (
									console.log(
										"Content is cached for offline use."),
									t && t.onSuccess && t.onSuccess(e)))
						})
					}
				})).catch((function(e) {
					console.error("Error during service worker registration:", e)
				}))
			}
			var ze = function(e) {
					e && e instanceof Function && r.e(3).then(r.bind(null, 156)).then((function(t) {
						var r = t.getCLS,
							n = t.getFID,
							a = t.getFCP,
							o = t.getLCP,
							c = t.getTTFB;
						r(e), n(e), a(e), o(e), c(e)
					}))
				},
				Ge = r(74);
			Ge.a.initialize("UA-121354150-10"), Ge.a.pageview(window.location.pathname + window.location
					.search), c.a.render(Object(d.jsx)(a.a.StrictMode, {
					children: Object(d.jsx)(F.a, {
						store: Ue,
						children: Object(d.jsx)(Pe, {})
					})
				}), document.getElementById("root")),
				function(e) {
					if ("serviceWorker" in navigator) {
						if (new URL("", window.location.href).origin !== window.location.origin) return;
						window.addEventListener("load", (function() {
							var t = "".concat("", "/service-worker.js");
							_e ? (! function(e, t) {
								fetch(e, {
									headers: {
										"Service-Worker": "script"
									}
								}).then((function(r) {
									var n = r.headers.get("content-type");
									404 === r.status || null != n && -1 ===
										n.indexOf("javascript") ? navigator
										.serviceWorker.ready.then((function(
											e) {
											e.unregister().then((
												function() {
													window
														.location
														.reload()
												}))
										})) : Ve(e, t)
								})).catch((function() {
									console.log(
										"No internet connection found. App is running in offline mode."
										)
								}))
							}(t, e), navigator.serviceWorker.ready.then((function() {
								console.log(
									"This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
									)
							}))) : Ve(t, e)
						}))
					}
				}(), ze()
		},
		38: function(e) {
			e.exports = JSON.parse(
				'{"b":"云空调，便携小空调","a":{"url":"","email":"me@yunyoujun.cn","name":"YunYouJun"},"c":{"type":"git","url":""}}'
				)
		}
	},
	[
		[114, 1, 2]
	]
]);
//# sourceMappingURL=main.42db0f2e.chunk.js.map
