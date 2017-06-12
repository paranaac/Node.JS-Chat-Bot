(function() {
    var __extends = function(child, parent) {
        for (var key in parent) {
            if (__hasProp.call(parent, key)) child[key] = parent[key];
        }
        function ctor() {
            this.constructor = child;
        }
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };	
		/*********************
			DATABASE
		**********************/
		var MongoClient = require('mongodb').MongoClient;
		var ObjectId = require('mongodb').ObjectID;
		var mongodburl = "mongodb://localhost:27017/dnb";
		
		/**********************
		**********************/
		var sendMsg = false;
		var flipText = require('flip-text');
		const pokemon = require('pokemon');
		var BigNumber = require('bignumber.js');
		var bigInt = require("big-integer");
		var GameC4 = require('connect-four');
		var C4GAME = null;
		require('coffee-script/register')
		var pokemonBattle = require ('pokemon-battle');
		var oneLinerJoke = require('one-liner-joke');
		var Pokedex = require('pokedex'),
		pokedex = new Pokedex();
		var ttt = require('octothorpe-xo');
		var tictactoe = null;
		var C4GAME = null;
		var hangman = require('hangman-engine');
		var GuessGame = require('guessing-game-123/index.js');
		var nani = require('nani').init('/////////////////////////', '/////////////////////////');
		var _ = require("lodash");
		var cheerio = require('cheerio');
		var rad = require('roll-a-dice');
		var dice = new rad();
		var S = require('string');
		var moment  = require('moment');
		var countdown = require('moment-countdown');
		var Client = require('node-wolfram');
		var Wolfram = new Client('/////////////////////////');
		var giphy = require('giphy-api')();
		var API_KEY = '/////////////////////////';
		const TVDB = require('node-tvdb');
		const tvdb = new TVDB('/////////////////////////');
		var Wordnik = require('wordnik');
		var blackJackEnabled = true;
		var blackJackUsers = [];
		var blackJackPlayer = [Date.now(), ""];
		var blackJackPlayers = [];
		var blackJackTimeLimit =  10000000 * 60 * 1000;
		var lastBlackJack = "";
		var $ = require('jquery');
		var FORMAT = 'gif';
		var RATING = 'pg-13';
		var stdin = process.openStdin();
		var DubAPI = require('dubapi');
		var gis = require('g-image-search');
		var geocoder = require('geocoder');
		var imageSearch = require('node-google-image-search');
		var request = require('request');
		var mlexer = require('math-lexer');
		var Scraper = require('images-scraper'), google = new Scraper.Google();
		var MsTranslator = require('mstranslator');
		var weather = require('weather-js');
		var api = require('dictionaryapi');
		var Wiki = require("wikijs");
		var request = require('request');
		var urban = require('urban');
		var Ector = require('ector');
		var config = {
			apiKey: "//////////////////////////////////////////////////",
			units: "imperial",
			debug: process.env.NODE_ENV === 'development'
		};
		var simpleWeather = require("simple-weather")(config);
		var zipcodes = require('zipcodes');
		var ector = new Ector();
		var $ = require('jquery')((require("jsdom").jsdom().defaultView));
		var phantom = require('phantom');
		var http = require('http');
		var net = require('net');
		var util = require('util');
		var request = require('request');
		var tName = "";
		var sName = "";
		var NodeGeocoder = require('node-geocoder');
		var EventEmitter = require('events').EventEmitter;
		var __hasProp = {}.hasOwnProperty;
		var spitLikes = true;
		var chatskills = require('chatskills');
		var funny = chatskills.add('funny');
		var arr = [];
		var Lastfm = require('simple-lastfm'); 
		var lastfm = new Lastfm({ 
			api_key: '//////////////////////////////////////////////////',
			api_secret: '///////////////////////////////////////////////////////////////////////////',
			username: '///////////////////////////////////////////////////////////////////////////',
			password: '///////////////////////////////////////////////////////////////////////////'
		});
		var readlineSync = require('readline-sync');
		var LastfmAPI = require('lastfmapi');
		var lfm = new LastfmAPI({
			'api_key': '///////////////////////////////////////////////////////////////////////////',
			'secret': '///////////////////////////////////////////////////////////////////////////'
		});
		var wn = new Wordnik({
		api_key: '////////////////////////////////////////////////////////////////////////////////////////////////////'
		});
		var LastFmAPI2 = require('lastfm').LastFmNode;
		
		var lastFm = new LastFmAPI2({
            api_key: '///////////////////////////////////////////////////////////////////////////',
            secret: '///////////////////////////////////////////////////////////////////////////'
        });
		
		var promise = require('promise');
		
		/********************
			   ARRAYS
		*********************/
		hearts = [":heart:", ":green_heart:", ":yellow_heart:", ":blue_heart:" ,":purple_heart:"];
		
		var chucknorrisFile = require("./arrays/chucknorris.js");
		var chucknorris = chucknorrisFile.arrayExp();
		
		var mitchFile = require("./arrays/mitch.js");
		var mitch = mitchFile.arrayExp();
		
		var vizFile = require("./arrays/viz.js");
		var viz = vizFile.arrayExp();
		
		var randomartistFile = require("./arrays/randomArtist.js");
		var randomartist = randomartistFile.arrayExp();
		
		
		var dogfactFile = require("./arrays/dogfact.js");
		var dogfact = dogfactFile.arrayExp();
		
		var tilFile = require("./arrays/til.js");
		var til = tilFile.arrayExp();
	  
		var catfactFile = require("./arrays/catfact.js");
		var catfact = catfactFile.arrayExp();
		
		var yomamaFile = require("./arrays/yomama.js");
		var yomama = yomamaFile.arrayExp();
		
		var ball8File = require("./arrays/ball8.js");
		var ball8 = ball8File.arrayExp();
	  
		new DubAPI({
			username: '///////////////////////////////////////////////////////////////////////////',
			password: '///////////////////////////////////////////////////////////////////////////'
		}, function(err, bot) {
			if (err) return console.error(err);

		
		/********************
		==CONNECT TO A ROOM==
		*********************/   
		function connect() {bot.connect('///////////////////////////////////////////////////////////////////////////');}

		MongoClient.connect(mongodburl, function(errDb, db) {  
        bot.on('connected', function(name) {
            console.log('Bot entered the ' + name + ' room.');
			var users = bot.getUsers();
            for(var i = 0; i < users.length; i++) {
				logUser(db, users[i], function(data){});
			}
        });

        bot.on('disconnected', function(name) {
            console.log('Disconnected from ' + name);
            setTimeout(connect, 15000);
        });
		
        bot.on('error', function(err) {
            console.error(err);
        });
		
		
		bot.on('chat-skip', function(data) {
			bot.sendChat("Song was skipped.");
		});

		bot.on('user-join', function(data) {
			logUser(db, data.user, function(user){
			console.log("info", "BOT", '[JOIN]' + '[' + user.username + '|' + user.id + '|' +user.dubs + '|' + user.logType + ']');
			});
			
			setTimeout(function (){  bot.sendChat("Welcome " + data.user.username + "! :wave:"); }, 3000); 

		});

		bot.on('room_playlist-update', function(data) {
			try {
				var pop = data.media.name.replace(/&amp;/g, '\&');
				var parts = pop.split(' - ', 2);
				tName = parts[0].trim();
				sName = parts[1].trim();
				
				if (tName !== null && sName !== null && !sName.includes("[")) {
					lastfm.getSessionKey(function(result) {
					if(result.success) {
						lastfm.scrobbleTrack({
							artist: tName,
							track: sName,
							callback: function(result) {
							}
						});
					}
				 });
				}

			} catch (err) {};
			var h1 = Math.floor(Math.random() * hearts.length);
			if (data.lastPlay && spitLikes) {
				$(".dubup").click();
				var length6 = msToTime(data.lastPlay.media.songLength);
				var name = data.lastPlay.media.name.replace(/&amp;/g, '\&');
				if (name.length > 21) {
					name = name.substring(0, 19) + "..."
				}
				bot.sendChat(name + " [" + length6 + '] :arrow_up: ' + data.lastPlay.score.updubs + '| :arrow_down: ' + data.lastPlay.score.downdubs + "| " + hearts[h1] + " " + data.lastPlay.score.grabs + "|");
				h1 = Math.floor(Math.random() * hearts.length);
			}
			bot.updub();
		});
				
		/***************************************************
		==================CHAT EVENTS=======================
		=======COMMANDS=======USERS==========MESSAGES=======
        ***************************************************/

        bot.on(bot.events.chatMessage, function(data) {
            console.log(data.user.username + ': ' + data.message);
            var command = data.message.split(' ')[0];
            var firstIndex = data.message.indexOf(' ');
            var qualifier = "";
            if (firstIndex != -1) {
                qualifier = data.message.substring(firstIndex + 1, data.message.length);
            }
            switch (command) {
               
			   // ==DEFINE==
				case ".define":
                if (qualifier != "") {
                    var dict = new api.DictionaryAPI(api.COLLEGIATE, 'cf2109fd-f2d0-4451-a081-17b11c48069b');
                    var linkQualifier = qualifier;
                    linkQualifier = linkQualifier.replace(/ /g, '%20');
                    dict.query(linkQualifier.toLowerCase(), function(err, result) {
                        result = result.replace(/<vi>(.*?)<\/vi>|<dx>(.*?)<\/dx>|<dro>(.*?)<\/dro>|<uro>(.*?)<\/uro>|<svr>(.*?)<\/svr>|<sin>(.*?)<\/sin>|<set>(.*?)<\/set>|<pl>(.*?)<\/pl>|<pt>(.*?)<\/pt>|<ss>(.*?)<\/ss>|<ca>(.*?)<\/ca>|<art>(.*?)<\/art>|<ew>(.*?)<\/ew>|<hw>(.*?)<\/hw>|<sound>(.*?)<\/sound>|<pr>(.*?)<\/pr>|<fl>(.*?)<\/fl>|<date>(.*?)<\/date>|<sxn>(.*?)<\/sxn>|<ssl>(.*?)<\/ssl>/g, '');
                        result = result.replace(/<vt>(.*?)<\/vt>/g, ' ');
                        result = result.replace(/<\/sx> <sx>|<sd>/g, ', ');
                        result = result.replace(/\s{1,}<sn>/g, '; ');
                        result = result.replace(/\s{1,}<un>/g, ': ');
                        result = result.replace(/<(?!\/entry\s*\/?)[^>]+>/g, '');
                        result = result.replace(/\s{1,}:/g, ': ');
                        if (result.indexOf(":") != -1 && (result.indexOf(":") < result.indexOf("1:") || result.indexOf("1:") == -1) && (result.indexOf(":") < result.indexOf("1 a") || result.indexOf("1 a") == -1)) {
                            result = result.substring(result.indexOf(":") + 1);
                        } else if (result.indexOf("1:") != -1 || result.indexOf("1 a") != -1) {
                            if ((result.indexOf("1:") < result.indexOf("1 a") && result.indexOf("1:") != -1) || result.indexOf("1 a") == -1) {
                                result = result.substring(result.indexOf("1:"));
                            } else {
                                result = result.substring(result.indexOf("1 a"));
                            }
                        }
                        result = result.substring(0, result.indexOf("</entry>"));
                        result = result.replace(/\s{1,};/g, ';');
                        result = result.replace(/\s{1,},/g, ',');
                        if (result != '') {
                            if (result.length > 250) {
                                result = result.substring(0, 247) + "...";
                            }
                            bot.sendChat(result);

                        } else {
                            bot.sendChat("No definition found.");
                        }
                    });
                } else {
                    bot.sendChat("Try .define followed by something to look up.");
                }
                break;
				
				function countDown(x) {
					var delta = x;
					var days = Math.floor(delta / 86400);
					delta -= days * 86400;
					var hours = Math.floor(delta / 3600) % 24;
					delta -= hours * 3600;
					var minutes = Math.floor(delta / 60) % 60;
					delta -= minutes * 60;
					return days + "d " + hours + "h " + minutes + "m.";
				}
				
				
			    // ==TVNFO==
				case ".tvnfo":
					if (qualifier !== "") {
							tvdb.getSeriesByName(qualifier)
						.then(response => { bot.sendChat(response[0].seriesName + 
						" [" + response[0].network + "] [*-" + response[0].status + "-*]");
						bot.sendChat("Overview: " + response[0].overview);
			
						})
						.catch(error => { bot.sendChat("No Info"); });
					}
					else {
						bot.sendChat("No series entered");
					}
				break;
				
				// ==NEXT EPISODE==
				case ".next":
					var rp = require('request-promise');
					var nextEpisode = function(show) {
						show = show.replace(/\s|\./g, '');
						return rp({
							uri: 'http://epguides.frecar.no/show/' + show + '/next/',
							json: true
						});
					};
					nextEpisode(qualifier).then(function (data) {
					
					var nextEP = new Date(data.episode.release_date);
					var today = new Date();
					
					msPerDay = 24 * 60 * 60 * 1000 ;
					timeLeft = (nextEP.getTime() - today.getTime());
					e_daysLeft = timeLeft / msPerDay;
					daysLeft = Math.floor(e_daysLeft);
					daysLeft += 2;

					bot.sendChat(data.episode.show.title + ": \"" + data.episode.title + "\" [S" + data.episode.season + "E" +  data.episode.number + "] airs on: " + data.episode.release_date + " (" + daysLeft + " days from now)");
				}).catch(function (err) {
					bot.sendChat('Next episode information not available.');
				});
				break;

			    // ==WOLFRAM ALPHA==
		        case ".ask":
					if (qualifier !== "") {
						var url1 = `http://api.wolframalpha.com/v1/result?appid=69UE4G-X89KPP8WK2&i=${qualifier}`;
				
						request(url1, function (error, response, body) {
						if (!error && response.statusCode == 200) {
							bot.sendChat(body); 
					}	
					else {
						console.log(error);
					}
					});		
					} 
					else {
						bot.sendChat("Ask something");
					}
				break;
				
				// ==CALCULATE==
                case ".calculate":
					var counter = 0;
					var counter2 = 0;
					for (var i = 0; i < qualifier.length; i++) {
						if (qualifier.charAt(i) == '(') {
							counter++;
						} else if (qualifier.charAt(i) == ')') {
							counter2++;
						}
					}
					qualifier = qualifier.replace(/x/g, '*');
					if (qualifier != "" && !(/\d\(/g.test(qualifier)) && !(/[\!\,\@\'\"\?\#\$\%\&\_\=\<\>\:\;\[\]\{\}\`\~\||log]/g.test(qualifier)) && !(/\^\s{0,}\d{0,}\s{0,}\^/g.test(qualifier)) && !(/\)\d/g.test(qualifier)) && !(/^[\+\*\/\^]/g.test(qualifier)) && !(/[\+\-\*\/\^]$/g.test(qualifier)) && !(/[\+\-\*\/\^]\s{0,}[\+\*\/\^]/g.test(qualifier)) && !(/\d\s{1,}\d/g.test(qualifier)) && !(/\s\.\s/g.test(qualifier)) && !(/\.\d\./g.test(qualifier)) && !(/\d\.\s{1,}\d/g.test(qualifier)) && !(/\d\s{1,}\.\d/g.test(qualifier)) && !(/\.\./g.test(qualifier)) && (!(/([a-zA-Z])/g.test(qualifier))) && counter == counter2) {
						var func = qualifier;
						func += " + (0*x) + (0*y)";
						var realfunc = mlexer.parseString(func);
						var answer = (realfunc({
							x: 0,
							y: 0
						}));
						if (answer.toString() != "NaN") {
							if (answer.toString() != "Infinity") {
								bot.sendChat(answer.toString());
								if (answer.toString() == "420") {
									bot.sendChat("Blaze it fgt");
								}
							} else {
								bot.sendChat('http://i.imgur.com/KpAzEs8.jpg');
							}
						} else {
							bot.sendChat("/me does not compute correctly.");
						}
					} else if (qualifier === "") {
						bot.sendChat("Try .calc followed by something to calculate.");
					} else {
						bot.sendChat("/me does not compute correctly.");
					}
                break;
				
				case '.info':
					if (qualifier == "") {
						findUserById(db, data.user.id, function(user){
					if(!user.money) {
						user.money = 0;
					}
					Number.prototype.format = function(n, x) {
						var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
						return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
					};
					var totalAMTCASH =  bigInt(user.money.toString()).toString();
					if (user.money < 1e21) {
						bot.sendChat('*' + user.username + '*, you have $' + user.money.format() + '. [Win/Loss] Hangman: *(' + user.hmwin + "/" + user.hmloss + ")* Blackjack: *(" + user.bjwin + "/"
						+ user.bjloss + ")* Rock/Paper/Scissors: *(" + user.rpswin + "/" + user.rpsloss + ")*");
					} else {
						bot.sendChat('*' + user.username + '*, you have $' + totalAMTCASH + '. [Win/Loss] Hangman: *(' + user.hmwin + "/" + user.hmloss + ")* Blackjack: *(" + user.bjwin + "/"
						+ user.bjloss + ")* Rock/Paper/Scissors: *(" + user.rpswin + "/" + user.rpsloss + ")*");
					}
					return;
					});
					} else {
						var user = bot.getUserByName(qualifier.trim());
						if (user == null) {
							bot.sendChat(qualifier + " is not in the room, can't retrieve information.");
							return;
						} else {

						findUserById(db, user.id, function(user){
					if(!user.money) {
						user.money = 0;
					}
					Number.prototype.format = function(n, x) {
						var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
						return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
					};

					bot.sendChat('*' + user.username + '* has $' + user.money.format() + '. [Win/Loss] Hangman: *(' + user.hmwin + "/" + user.hmloss + ")* Blackjack: *(" + user.bjwin + "/"
						+ user.bjloss + ")* Rock/Paper/Scissors: *(" + user.rpswin + "/" + user.rpsloss + ")*");
					return;
						});
					  }
					}
				
				break;
				
				case '/r':
				case '/r/':
					if (qualifier == "") {
						bot.sendChat("Enter a subreddit name.");
					} else {
						try {
							var arg = qualifier.split(" ")
							var arg0  = (typeof arg[0] === "undefined")   ? "" : arg[0];
							var arg1  = (typeof arg[1] === "undefined")   ? "week" : arg[1];
							var arg2  = (typeof arg[2] === "undefined")   ? "" : arg[2];
						
									function getResults(q, t, n, callback) {
									let url = 'https://www.reddit.com/r/' + q.trim() + '/top.json?sort=top&t=' + t + '&limit=' + '20';
									
									request({ 
										method: 'GET', 
										uri: url
									}, function (err, response, data) {
										if(err) {
											callback(err, null);
											return;
										}

										data = JSON.parse(data);
										if (data != null) {
										try {
										var mainObj = data.data.children;	
										var urls = {};
										} catch(err) {
										}
									
										for(let i = 0; i < mainObj.length; i++) {
											try{
											
											let url2 = mainObj[i].data.title + " " + mainObj[i].data.url + " " + mainObj[i].data.selftext;
											urls[i+1] = url2;
											} catch(err) {
												
											}
										}	
										callback(null, urls);
										}
									})
									.on('error', function(err) {
										callback(err, null);
									});
								}
								
								getResults(arg0, arg1, arg2, function(err, data) {
								try {
									var myData = JSON.stringify(data);
									var parsed = JSON.parse(myData);
									var arr = [];

									for(var x in parsed){
									  arr.push(parsed[x]);
									}
								
									if (arg2 === "") {
										bot.sendChat(arr[Math.floor(Math.random()*arr.length)]);
										
									} else {
										bot.sendChat(arr[arg2-1]);
									}
							
								} catch(err) {
									bot.sendChat("Nothing found.");
								}
					
							});
						} catch(err) {
							bot.sendChat("Nothing found.");
						}
					}
				
				break;
				
				case '.wallet':
					if (qualifier == "") {
						findUserById(db, data.user.id, function(user){
								if(!user.money) {
									user.money = 0;
								}
								Number.prototype.format = function(n, x) {
									var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
									return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
								};
							
								var totalAMTCASH =  bigInt(user.money.toString()).toString();
								if (user.money < 1e21) {
									bot.sendChat('*' + user.username + '*, you have $' + user.money.format() + '.');
								} else {
									bot.sendChat('*' + user.username + '*, you have $' + totalAMTCASH + '.');
								}
								return;
						});
					} else {
						var user = bot.getUserByName(qualifier.trim());
						if (user == null) {
							bot.sendChat(qualifier + " is not in the room, can't retrieve information.");
							return;
						} else {
					
						findUserById(db, user.id, function(user){
								if(!user.money) {
									user.money = 0;
								}
								bot.sendChat('*' + user.username + '* has a total of $' + user.money.format() + '.');
								return;
						});
					  }
					}
				break;
				
				// MOD-ONLY
				case '.money': 
					if (data.user.username == 'Cyan') {
						var arg = qualifier.split(" ")
						var money  = (typeof arg[0] === "undefined")   ? "" : arg[0];
						money = money.replace("$", '')
					
						var user  = (typeof arg[1] === "undefined")   ? "" : arg[1];
					
						if (user == "") {
							moneyUser(db, money, bot.getUser(data.user.id), function(user){});
						} else {
							moneyUser(db, money, bot.getUserByName(user), function(user){});
					}
					} else {
						bot.sendChat("You do not have permission to use this feature");
					}
				break;

				case '.transfer': 
					if (qualifier == "") {
						bot.sendChat("You must enter an amount to give and the user's name.");
					}
					var arg = qualifier.split(" ")
					var tCash  = (typeof arg[0] === "undefined")   ? "" : arg[0];
					tCash = tCash.replace("$", '')
					tCash = tCash.replace(/,/g , "");
					tempCashAmt = tCash;
					var recipient  = (typeof arg[1] === "undefined")   ? "" : arg[1];
						recipient = recipient.replace("@", "");
					var userInRoom = bot.getUserByName(recipient.trim());
					
					if (data.user.username == recipient) {
						bot.sendChat("You can't transfer money to yourself.");
					} else if (userInRoom == null) {
						bot.sendChat(recipient + " is not in the room, can't send them money.");
						return;
					} else {
						findUserById(db, data.user.id, function(me){
							if(!me.money || me.money <= 0) {
								bot.sendChat("You're out of money, you can't send any.");
								return;
							}
							else if (me.money < parseInt(tempCashAmt )) {
								bot.sendChat("You do not have enough money to give to " + recipient + " $" + tempCashAmt + ", you have $" + me.money + ".");
								return;						
							} 
							else if (isNaN(parseInt(tempCashAmt)) || (parseInt(tempCashAmt) < 0))  {
								bot.sendChat(tempCashAmt + " is not a valid amount, try again.");
								return;
							} else if(parseInt(tempCashAmt) > 1000000) {
								bot.sendChat("You cannot transfer more than $1,000,000.");
								return;
							
							} else {
								moneyUser(db, parseInt(tempCashAmt), bot.getUserByName(recipient), function(user){});
								moneyUser(db, tempCashAmt*-1, bot.getUser(data.user.id) , function(user){});
						
								findUserById(db, bot.getUserByName(recipient).id, function(rec){ 
									findUserById(db, data.user.id, function(me2){ 
								
									bot.sendChat("You've given $" + tCash + " of your money to " + recipient + ". They now have $" + rec.money.format() + " and you have $" + me2.money.format() + ".");
								 });
								});
								return;
							}
						});
					}
				break;

				function isNumeric(num) {
					return !isNaN(num)
				}
				
				case '.bet':
				case 'bet':
					if (qualifier == "") {
						bot.sendChat("Enter a color to bet on and amount of money to bet.");
						return;
					}
					var arg = qualifier.split(" ")
					var color  = (typeof arg[0] === "undefined")   ? "" : arg[0];
					var bet  = (typeof arg[1] === "undefined")   ? "" : arg[1];
					bet = bet.replace("$", '');
				    bet = bet.replace(/,/g , "");
					color = color.toLowerCase();
					
					if (color == '' || bet == '') {
						bot.sendChat("You must enter a color and amount of money to bet.");
						return;
					}
					else if (!( (color=='black' || color == 'red') && (parseInt(bet) > 0) && isNumeric(parseInt(bet)) && (!bet.includes('.')))) {
							bot.sendChat("You must enter a valid color and money amount.");
							return;
					} else {
								findUserById(db, data.user.id, function(user){
									if(!user.money || user.money <= 0) {
										moneyUser(db, 5, bot.getUser(data.user.id), function(user){});
										bot.sendChat("You're out of money, try again. *Gives you $5*");
										return;
									}
									else if (user.money < parseInt(bet)) {
										bot.sendChat("You do not have enough money to bet $" + bet+ ", you have $"+ user.money.format() + ".");
										return;						
									} 
									else {
										var rNumber = Math.random();
										var actualColor = '';
										if (rNumber < 0.5) {
											actualColor = 'black';
											rNumber = Math.random();
										 } else {
											actualColor = 'red';
											rNumber = Math.random();
										  }
										if (color == actualColor) {
										
										  moneyUser(db, (bet*2), bot.getUser(data.user.id), function(user){
											 findUserById(db, data.user.id, function(user){
												if(!user.money || user.money <= 0) {
												user.money = 0;
												}
												bot.sendChat("Congratulations! You won $" + (bet*2).format() + "! You now have $" + user.money.format() + ".");
												return;
												});
										  });
										  return;
										  
										} 
										else {
										  moneyDecUser(db, bet, bot.getUser(data.user.id), function(user){
										   findUserById(db, data.user.id, function(user){
												if(!user.money || user.money <= 0) {
												user.money = 0;
												}
												bot.sendChat("Sorry, you lost. The color was " + actualColor + ". You now have $" + user.money.format() + ".");
												return;
												});
										  });
										  return;
										}
								}
							});
						}
				break;
				
				case '.geocities':
					if(qualifier === "") {
						bot.sendChat("Enter something to search.");
					} else {
						  gifcities(qualifier + '', function (err, gifs) {
						  try {
							bot.sendChat(gifs[Math.floor(Math.random()*gifs.length)].url);
						  } catch(err) {
								bot.sendChat("Nothing found.");
						  }
						});
					}
				break;
				
				
				case '.c4':
				case '.C4':
					if (C4GAME == null) {
						C4GAME = new GameC4();
						bot.sendChat("*CONNECT-FOUR* - To start, use the .drop command along with a column number (1-7) and a color, 'red' or 'blue'.");
					}
				break;
	
			   case '.drop':
			   
			   	var arg = qualifier.split(" ");
				var arg0  = arg[0] - 1;
				var arg1  = arg[1];
				if (qualifier == null) {
					bot.sendChat("Pick a column to drop a piece into.");
					return;
				}
				if (C4GAME == null) {
					bot.sendChat("No game is running, use *.C4* to start a new one.");
					return;
				}
		
				if (C4GAME.validMove(parseInt(arg0))) {
					if (arg1 == undefined) {
						bot.sendChat("You must specify a team color.");
						return;
					}
					else if (arg1.trim() == "blue" || arg1.trim() == "red") {
						C4GAME.play(arg1, parseInt(arg0));
						var res = [];
						
						for(j = 0; j <= 5; j++) {
							   var board = "";
							   for(i = 0; i < 7; i++) {
									var temp = C4GAME.get(i, j);
									if (temp == null) {
										board += '\uD83D\uDD32';
								   } else if (temp == 'red') {
										board += '\ud83d\udd34';
								   } else {
										board += '\ud83d\udd35';
								   }
							  }
							  res[j] = board;
							  
						   }
						   
						 bot.sendChat(res[5]);
					     bot.sendChat(res[4]);
						 bot.sendChat(res[3]);
						 bot.sendChat(res[2]);
						 bot.sendChat(res[1]);
						 bot.sendChat(res[0]);
					  
					  } else {
						bot.sendChat(arg1.charAt(0).toUpperCase() + arg1.slice(1) + " is not a valid team color. Please use red or blue.");
						return;
					}
				} else {
					bot.sendChat("That's not a valid move");
				}
				
				if (C4GAME.ended) {
					bot.sendChat(C4GAME.winner.charAt(0).toUpperCase() + C4GAME.winner.slice(1) + " wins.");
					C4GAME = null;
					return;
				}
	
	
				break;
				
				
	
				case '.tictactoe':
				case '.ttt':
					if (tictactoe == null) {
						tictactoe = new ttt();
						bot.sendChat(tictactoe.colUno());
						bot.sendChat(tictactoe.colDos());
						bot.sendChat(tictactoe.colTres());
						bot.sendChat("It's now " + tictactoe.nextMark + "'s turn.");
					}
				break;
				
				case '.mark':
				if (qualifier == null) {
					bot.sendChat("Pick a spot in the board to place your X");
					return;
				}
				if (tictactoe == null) {
					bot.sendChat("No game is running, use *.tictactoe* to start a new one.");
					return;
				}
			
				var arg = qualifier.split(" ")
				var arg0  = 0;
				var arg1  = 0;
				
				if (qualifier == '1') {
					arg0 = 1;
					arg1 = 1;
				} else if (qualifier == '2') {
					arg0 = 1;
					arg1 = 2;
				} else if (qualifier == '3') {
					arg0 = 1;
					arg1 = 3;
				}  else if (qualifier == '4') {
					arg0 = 2;
					arg1 = 1;	
				}  else if (qualifier == '5') {
			    	arg0 = 2;
					arg1 = 2;
				}  else if (qualifier == '6') {
					arg0 = 2;
					arg1 = 3;
				}  else if (qualifier == '7') {
					arg0 = 3;
					arg1 = 1;
				}  else if (qualifier == '8') {
				    arg0 = 3;
					arg1 = 2;
				}  else if (qualifier == '9') {
					arg0 = 3;
					arg1 = 3;
				}  else {
				}  
					
				if (tictactoe.canMark(arg0, arg1)) {
					tictactoe.mark(arg0, arg1);
				
					bot.sendChat(tictactoe.colUno());
						bot.sendChat(tictactoe.colDos());
							bot.sendChat(tictactoe.colTres());
				
					if (!tictactoe.hasEnded) {
					bot.sendChat("It's now " + tictactoe.nextMark + "'s turn.");
					}
					if (tictactoe.hasEnded) {
						bot.sendChat("*Game Over!* The winner is: " + tictactoe.winner + "");
						tictactoe = null;
					return;
					}
					return;
				
				} else {
					bot.sendChat("That spot has already been marked");
					return;
				}
				
				case '.slot':
				case 'slot':
				case '.slots':
					Number.prototype.format = function(n, x) {
						var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
						return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
					};
					var bet = qualifier.replace("$", "");
					bet = bet.replace(/,/g , "");
					var slots = [ ":hankey:", ":bell:", ":bell:", ":bell:", ":cherries:" , ":cherries:", ":cherries:", ":cherries:", ":tangerine:", ":tangerine:", ":tangerine:" , ":tangerine:", ":hearts:", ":hearts:", ":hearts:", ":hearts:",
					":spades:", ":spades:", ":spades:", ":spades:", ":clubs:", ":clubs:", ":clubs:", ":diamonds:", ":diamonds:",":diamonds:",  ":diamonds:" ];

					if (qualifier == "") {
						bot.sendChat("Enter an amount to bet.");
						return;
					} 
					else if (!(isNumeric(parseInt(bet)) && (parseInt(bet) > 0) && (!bet.includes('.')))) {
						bot.sendChat(qualifier + " is not a valid bet.");
						return;
					} 
					else {
						findUserById(db, data.user.id, function(user){
							if(!user.money || user.money <= 0) {
								moneyUser(db, 50, bot.getUser(data.user.id), function(user){});
								bot.sendChat("You're out of money, try agian. *Gives you $50*");
								return;
							} else if (user.money < parseInt(bet)) {
								bot.sendChat("You don't have enough to bet $" + bet+ ", you have $"+ user.money.format() + ".");
								return;						
							} else {
									
							var s1 = _.shuffle(slots)[0];
							var s2 = _.shuffle(slots)[0];
							var s3 = _.shuffle(slots)[0];
							
							var output = '';
							var betAmt = 0;
							
							if(s1 == ':hankey:' || s2 == ':hankey:' || s3 == ':hankey:') {
								output = "[ *Shit* ] You lose $" + bet + ".";
								betAmt = bet*-1;
								
							} else if ((s1 == s2 && s1 == s3 && s3 == s2 && s1)) {
									if(s1 == ":cherries:") {
										output = "[50x! *CHERRY!* ] You win $" + (bet*50) + ".";
										betAmt = bet*50;
									} else if (s1 == ":bell:") {
										output = "[100x! *JACKPOT!* ]  $" + (bet*100) + ".";
										betAmt = bet*100;
									} else if (s1 == ":tangerine:") {
										output = "[8x! *TANGERINE!* ] You win $" + (bet*8) + ".";
										betAmt = bet*8;
									} else {
											output = "[5x! *3-Of-A-Kind!* ] You win $" + (bet*5) + ".";
											betAmt = bet*5;
									}
							}
							else if (((s1 == s2) || (s2 == s3) || (s1 == s3)) && ((s1 == ":bell:" && s2 == ":bell:") || (s2 == ":bell:" && s3 == ":bell:") ||
								(s1 == ":bell:" && s3 == ":bell:"))) {
								output = "[4x! *Two-Bell!* ] You win $" + (bet*4)+ ".";	
								betAmt = bet*4;					
							
							} else if ((s1 == s2) || (s2 == s3) || (s1 == s3)) {
								output = "[2x! *2-Pair!* ] You win $" + (bet*2) + ".";
								betAmt = bet*2;
							
							} else if ((s1 == ":bell:") || (s2 == ":bell:") || (s3 == ":bell:")) {
								output = "[ *FREE SPIN!* ] You keep $" + bet + ".";
								return;
							}
							else {
								output = "You lose $" + bet + ".";
								betAmt = bet*-1;
							}
							
							moneyUser(db, (betAmt), bot.getUser(data.user.id), function(user){});
							bot.sendChat("*SLOT*: " + s1 + " " + s2 + " " + s3 + " " + output); 
							}
						});
					}

				break;
				
				
				case '.battle':
					if (qualifier == null) {
						bot.sendChat("You must enter the name of the Pokemon you want to use to battle.");
					} else {
					
						var arg = qualifier.split(" ")
						var arg0  = (typeof arg[0] === "undefined")   ? "" : arg[0];
						var arg1  = (typeof arg[1] === "undefined")   ? "X" : arg[1];
			
					
						var myPok1 = arg0.toLowerCase();
						var myID = pokedex.pokemon(myPok1).id;
						
						var myPok2;
						if (arg1 === "X") {
							myPok2 = pokemon.random().toLowerCase();
						} else {
							myPok2 = arg1.toLowerCase();
						}
						
						var randID = pokedex.pokemon(myPok2).id;

						try {
							bot.sendChat(pokedex.pokemon(myPok1).sprites.animated + " " + pokedex.pokemon(myPok2).sprites.animated);
						} catch(err) {
							bot.sendChat("The Pokemon you entered does not exist. Try again.");
							return;
						}
						try {
						bot.sendChat(pokemonBattle.battle(myID, randID));
						} catch (err) {
							bot.sendChat("Something went wrong. Try again.");
						}
					}
				
				break;
				
				case '.roll':
				case 'roll':
				case '.dice':
				
				var arg = qualifier.split(" ")
				var diceNum  = (typeof arg[0] === "undefined")   ? "" : arg[0];
				var bet  = (typeof arg[1] === "undefined")   ? "" : arg[1];
				bet = bet.replace("$", '')
				bet = bet.replace(/,/g , "");
				
				if (qualifier == "") {
					bot.sendChat("Enter a dice number, and amount to bet.");
					return;
				}
				else if (diceNum == '' || bet == '') {
					bot.sendChat("You must enter a dice number and amount of money to bet.");
					return;
				} else if (!(isNumeric(parseInt(diceNum)) && (parseInt(bet) > 0) && isNumeric(parseInt(bet) && (!bet.includes('.'))))) {
						bot.sendChat("You must enter a valid dice number and money amount.");
						return;
				} else {
						findUserById(db, data.user.id, function(user){
							if(!user.money || user.money <= 0) {
								moneyUser(db, 5, bot.getUser(data.user.id), function(user){});
								bot.sendChat("You're out of money, try agian. *Gives you $5*");
								return;
							}
							else if (user.money < parseInt(bet)) {
								bot.sendChat("You do not have enough money to bet $" + bet+ ", you have $"+ user.money.format() + ".");
								return;						
							} 
							else {
								var diceResult = dice.fair().roll();
								if (diceResult == diceNum) {
									moneyUser(db, (bet*4), bot.getUser(data.user.id), function(user){
										 findUserById(db, data.user.id, function(user){
											if(!user.money || user.money <= 0) {
												user.money = 0;
											}
											bot.sendChat("Congratulations! You won $" + (bet*4).format() + "! You now have $" + user.money.format() + ".");
											return;
									  });
									});
									return; 
								} 
								else {
									 moneyDecUser(db, bet, bot.getUser(data.user.id), function(user){
									   findUserById(db, data.user.id, function(user){
											if(!user.money || user.money <= 0) {
											user.money = 0;
										  }
										  bot.sendChat("Sorry, you lost. The number was " + diceResult + ". You now have $" + user.money.format() + ".");
										   return;
									  });
									 });
									return;
								}
							}
						 });
					}
				break;
		    
			// ==WIKIPEDIA==
			case ".wiki": 
            if (qualifier!=""){
                Wiki.page(qualifier, false, function(err, page){
                    page.summary(function(err, summary){
                        if (summary!=undefined){
                            Wiki.page(qualifier, false, function(err, page){
                                page.html(function(err, html){
                                    if (html.indexOf('<ul>')!=-1){
                                        html=html.substring(0, html.indexOf('<ul>'));
                                    }
                                    html=html.replace(/<[^>]+>/g, '');
                                    Wiki.page(qualifier, false, function(err, page){
                                        page.summary(function(err, summary){
                                            if (summary!=undefined){
                                                if (summary=="" || summary.indexOf("This is a redirect")!=-1){
                                                    summary="redirect "+html;
                                                }
                                                if (summary.indexOf('may refer to:')!=-1 || summary.indexOf('can refer to:')!=-1 || summary.indexOf('may also refer to:')!=-1 || summary.indexOf('may refer to the following:')!=-1 || summary.indexOf('may stand for:')!=-1){
                                                    bot.sendChat("Please be more specific.");
                                                    var queryChoice=qualifier;
                                                    queryChoice=queryChoice.replace(/ /g, '_');
                                                    bot.sendChat("More info: http://en.wikipedia.org/wiki/" + queryChoice);
                                                }
                                                else if (summary.substring(0,8).toLowerCase()=="redirect"){
                                                    subQuery='';
                                                    if (summary.indexOf('#')==-1){
                                                        if (summary.substring(8,9)==' '){
                                                            var query=summary.substring(9);
                                                        }
                                                        else{
                                                            var query=summary.substring(8);
                                                        }
                                                    }
                                                    else{
                                                        var query=summary.substring(9, summary.indexOf('#'));
                                                        subQuery=summary.substring(summary.indexOf('#')+1);
                                                    }
                                                    Wiki.page(query, false, function(err, page2){
                                                        page2.content(function(err, content){
                                                            if (content!=undefined){
                                                                if (content.indexOf('may refer to:')!=-1 || content.indexOf('can refer to:')!=-1 || content.indexOf('may also refer to:')!=-1 || content.indexOf('may refer to the following:')!=-1 || content.indexOf('may stand for:')!=-1){
                                                                    bot.sendChat("Please be more specific.");
                                                                }
                                                                else if (subQuery!=''){
                                                                    content=content.substring(content.indexOf("=== "+subQuery+" ===")+8+subQuery.length);
                                                                    if (content.length>250){
                                                                        content=content.substring(0, 247)+"...";
                                                                    }  
                                                                    bot.sendChat(content);
                                                                }
                                                                else{
                                                                    if (content.length>250){
                                                                        content=content.substring(0, 247)+"...";
                                                                    }  
                                                                    bot.sendChat(content);
                                                                }
                                                                var queryChoice=qualifier;
                                                                queryChoice=queryChoice.replace(/ /g, '_');
                                                                bot.sendChat("More info: http://en.wikipedia.org/wiki/" + queryChoice);
                                                            }
                                                            else{
                                                                bot.sendChat("No wiki found.");
                                                            }
                                                        });
                                                    });
                                                }
                                                else{
                                                    if (summary.length>250){
                                                        summary=summary.substring(0, 247)+"...";
                                                    }  
                                                    bot.sendChat(summary);
                                                    var queryChoice=qualifier;
                                                    queryChoice=queryChoice.replace(/ /g, '_');
                                                    bot.sendChat("More info: http://en.wikipedia.org/wiki/" + queryChoice);
                                                }
                                            }
                                            else{
                                                bot.sendChat("No wiki found.");
                                            }    
                                        });
                                    });
                                });
                            });
                        }
                        else {
                            bot.sendChat("No wiki found.");
                        } 
                    });
                });
            }
            else{
                bot.sendChat("Try .wiki followed by something.");
            }
			break;
				
			case ".plays": 
				var artistChoice = tName;
				  if (qualifier == "") {
                    artistchoice = tName;
                } else {
				    artistChoice = qualifier;
				}
					lastfm.getPlays({
                    artist: artistChoice,
                    callback: function(result) {
                        if (result.success == true) {
							bot.sendChat(result.artist + " has been played " + result.plays + " times."); 
						}
						}
				   });
				
			break;
			
			case ".flip":
				if (qualifier == "") {
					bot.sendChat("?_?");
				} else if (qualifier == "your mom") {
					bot.sendChat("Your mom is too heavy to flip.");
				} else {
					bot.sendChat("(?°?°)??" + flipText(qualifier));
				}
			break;
			
            case ".artist": 
                var artistChoice = tName;

                if (qualifier == "") {
                    artistchoice = tName;
                } else {
                    artistChoice = qualifier;
                }
                lastfm.getArtistInfo({
                    artist: artistChoice,
                    callback: function(result) {
                        if (result.success == true) {
                            if (result.artistInfo.bio.summary != "") {
                                var summary = result.artistInfo.bio.summary;
                                summary = summary.replace(/(&quot;)/g, '"');
                                summary = summary.replace(/(&amp;)/g, '&');
                                summary = summary.replace(/(&eacute;)/g, '?;
                                summary = summary.replace(/(&aacute;)/g, '?;
                                summary = summary.replace(/(&auml;)/g, '?;
                                summary = summary.replace(/(&iacute;)/g, '?;
                                summary = summary.replace(/(&oacute;)/g, '??
                                summary = summary.replace(/(&Scaron;)/g, '?);
                                summary = summary.replace(/<[^>]+>/g, '');
                                if (summary.indexOf(" 1) ") != -1) {
                                    summary = summary.substring(summary.lastIndexOf(" 1) ") + 4);
                                    if (summary.indexOf(" 2) ") != -1) {
                                        summary = summary.substring(0, summary.lastIndexOf(" 2)"));
                                    }
                                } else if (summary.indexOf(" 1. ") != -1) {
                                    summary = summary.substring(summary.lastIndexOf(" 1. ") + 4);
                                    if (summary.indexOf(" 2. ") != -1) {
                                        summary = summary.substring(0, summary.lastIndexOf(" 2."));
                                    }
                                } else if (summary.indexOf(" (1) ") != -1) {
                                    summary = summary.substring(summary.lastIndexOf(" (1) ") + 4);
                                    if (summary.indexOf(" (2) ") != -1) {
                                        summary = summary.substring(0, summary.lastIndexOf(" (2)"));
                                    }
                                }
                                if (summary.length > 950) {
                                    summary = summary.substring(0, 747) + "...";
                                }
                                bot.sendChat(summary);
                                var lastfmArtist = artistChoice;
                                lastfmArtist = lastfmArtist.replace(/ /g, '+');
                                   bot.sendChat("Last.FM: http://www.last.fm/music/" + lastfmArtist);
                                } else {
                                    bot.sendChat("No artist info found.");
                                }
                            } else {
                                bot.sendChat("No artist info found.");
                            }
                        }
                    });
             break;
				
		    case ".genre": 
				var artistChoice="";
				if (qualifier==""){
					artistChoice= tName;
					trackChoice=sName;
				}
				else{
					artistChoice=qualifier;
					trackChoice=null;
				}
				lastfm.getTags({
					artist: artistChoice,
					track: trackChoice,
					callback: function(result) {
						var tags = "";
						if (result.tags!=undefined){
							for (var i=0; i<result.tags.length; i++){
								tags+=result.tags[i].name;
								tags+=", ";
							}
							tags=tags.substring(0, tags.length-2);
						}
						if (qualifier==""){
							if (tags!=""){
								bot.sendChat("Genre of "+trackChoice+" by "+artistChoice+": "+tags);
							}
							else{
								bot.sendChat("No genre found.");
							}
						}
						else{
							if (tags!=""){
								bot.sendChat("Genre of "+artistChoice+": "+tags);
							}
							else{
								bot.sendChat("No genre found.");
							}
						}
					}
				});
			break;

			case ".nowplaying":
				var info = "Nothing is playing.";
				var FIVEMINUTES = 300;
				var date = new Date();
				var options = {
				  user: "BNK",
				  limit: 15,
				};
				
				if(data.user.username != 'Cyan') {
					bot.sendChat("You don't have authorization to use this command.");
					return;
				}
				
				lfm.user.getRecentTracks(options, function(err, tracks) {
				  try {
					var trackm = tracks.track[0];

					info = trackm.artist['#text'] + " - " + trackm.name;
					bot.sendChat("Cyan is *now playing* : " + info + ".");
					} catch(err) {}
				});		
			break;

				
			case ".similar": 
				var artistChoice="";
				if (qualifier==""){
					artistChoice= tName;
				}
				else{
					artistChoice=qualifier;
				}
				lfm.artist.getSimilar({
					'limit' : 7,
					'artist' : artistChoice,
					'autocorrect' : 1
				}, function (err, similarArtists) {
					if (similarArtists!=undefined){
						var artists = '';
						for (var i=0; i<similarArtists.artist.length; i++){
							artists = artists + similarArtists.artist[i].name + ", ";
						}
						artists = artists.substring(0, artists.length-2);
						bot.sendChat("Similar artists to " + artistChoice + ": " + artists);
					}
					else{
						bot.sendChat("No similar artists found.");
					}
				});
			break;

			case ".translate": 
				const translate = require('google-translate-api');
				if (qualifier != "") {
					translate(qualifier.trim(), {to: 'en'}).then(res => {
					var result = res.text.trim();
					if (result.substr(result.length-4) === "null") {
						result = result.substring(0, result.length - 4);
					}
					bot.sendChat(result);
				}).catch(err => {
						bot.sendChat("Something went wrong.");
						console.log(err);
				});
                 
                } else {
                    bot.sendChat("Try .translate followed by something.");
                }
            break;
			
                
            case ".forecast": 
					if (qualifier == "") {
						bot.sendChat("Enter a city or country or zip code.");
					} 
					else if(!isNaN(parseInt(qualifier))) {
					   var myZipCity = JSON.stringify(zipcodes.lookup(qualifier));
					   var jsonobject = JSON.parse(myZipCity);
					   var city = jsonobject.city;
					   var state = jsonobject.state;
					   var cityandstate = city + ", " + state;
					   weather.find({search: cityandstate, degreeType: 'F'}, function(err, result) {
					   if (result!=null){
						  var today = result[0].forecast[1];
						  var tomorrow = result[0].forecast[2];
						  var thenextday = result[0].forecast[3];

						  bot.sendChat(result[0].location.name + ": " + today.skytextday + " [Low: " + today.low
						   + String.fromCharCode(176) + "F] [High: " + today.high + String.fromCharCode(176) + "F] "  +
						   " P: " + today.precip + "%");

						  bot.sendChat(tomorrow.shortday+ ": " + tomorrow.skytextday + " [Low: " + tomorrow.low
						   + String.fromCharCode(176) +  "F] [High: " + tomorrow.high +  String.fromCharCode(176) +  "F] "  +
						   " P: " + tomorrow.precip + "%");

						  bot.sendChat(thenextday.shortday+ ": " + thenextday.skytextday + " [Low: " + thenextday.low
						   + String.fromCharCode(176) + "F] [High: " + thenextday.high + String.fromCharCode(176) + "F] "  +
						   " P: " + thenextday.precip + "%");
					  } 
					  else {
						 bot.sendChat("Not found. Perhaps " + qualifier + " is from outside planet Earth, try again.");
					 }
				 });

					} else  {
					 weather.find({search: qualifier, degreeType: 'F'}, function(err, result) {
					   if (result!=null){
						  var today = result[0].forecast[1];
						  var tomorrow = result[0].forecast[2];
						  var thenextday = result[0].forecast[3];

						  bot.sendChat(result[0].location.name + ": " + today.skytextday + " [Low: " + today.low
						   + String.fromCharCode(176) + "F] [High: " + today.high + String.fromCharCode(176) + "F] "  +
						   " P: " + today.precip + "%");

						  bot.sendChat(tomorrow.shortday+ ": " + tomorrow.skytextday + " [Low: " + tomorrow.low
						   + String.fromCharCode(176) +  "F] [High: " + tomorrow.high +  String.fromCharCode(176) +  "F] "  +
						   " P: " + tomorrow.precip + "%");

						  bot.sendChat(thenextday.shortday+ ": " + thenextday.skytextday + " [Low: " + thenextday.low
						   + String.fromCharCode(176) + "F] [High: " + thenextday.high + String.fromCharCode(176) + "F] "  +
						   " P: " + thenextday.precip + "%");
					  } 
					  else {
						 bot.sendChat("Not found. Perhaps " + qualifier + " is from outside planet Earth, try again.");
					 }


				 });
				 }
           break;
			 
		   case ".forecastC": 
                if (qualifier == "") {
                    bot.sendChat("Enter a city or country or zip code.");
                } 
                else
                {
                 weather.find({search: qualifier, degreeType: 'C'}, function(err, result) {
                   if (result!=null){
                      var today = result[0].forecast[1];
                      var tomorrow = result[0].forecast[2];
                      var thenextday = result[0].forecast[3];

                      bot.sendChat(result[0].location.name + ": " + today.skytextday + " [Low: " + today.low
                       + String.fromCharCode(176) + "C] [High: " + today.high + String.fromCharCode(176) + "C] "  +
                       " P: " + today.precip + "%");

                      bot.sendChat(tomorrow.shortday+ ": " + tomorrow.skytextday + " [Low: " + tomorrow.low
                       + String.fromCharCode(176) +  "C] [High: " + tomorrow.high +  String.fromCharCode(176) +  "C] "  +
                       " P: " + tomorrow.precip + "%");

                      bot.sendChat(thenextday.shortday+ ": " + thenextday.skytextday + " [Low: " + thenextday.low
                       + String.fromCharCode(176) + "C] [High: " + thenextday.high + String.fromCharCode(176) + "C] "  +
                       " P: " + thenextday.precip + "%");
                  } 
                  else {
                     bot.sendChat("Not found. Perhaps " + qualifier + " is from outside planet Earth, try again.");
					 }


				 });
				 }
             break;

             case ".weather":
				 if (qualifier == "") {
					bot.sendChat("Enter a city or country or zip code.");
				} 
				
				else if(!isNaN(parseInt(qualifier))) {
					   var myZipCity = JSON.stringify(zipcodes.lookup(qualifier));
					   var jsonobject = JSON.parse(myZipCity);
					   var city = jsonobject.city;
					   var state = jsonobject.state;
					   var cityandstate = city + ", " + state;
					   weather.find({search: cityandstate, degreeType: 'F'}, function(err, result) {
						   if (result!=null) {
							   bot.sendChat(result[0].location.name + " is currently: " + result[0].current.temperature + 
								   String.fromCharCode(176) + "F (Feels like " + result[0].current.feelslike + String.fromCharCode(176) + "F) " + result[0].current.skytext + " Humidity: " + result[0].current.humidity + "% Wind: " + result[0].current.windspeed);
						   } 
						   else 
						   {
							 bot.sendChat("Not found. Perhaps " + qualifier + " is from outside planet Earth, try again.");
						 }
						});
				} else {
					 weather.find({search: qualifier, degreeType: 'F'}, function(err, result) {
					   if (result!=null){
						   bot.sendChat(result[0].location.name + " is currently: " + result[0].current.temperature + 
							   String.fromCharCode(176) + "F (Feels like " + result[0].current.feelslike + String.fromCharCode(176) + "F) " + result[0].current.skytext + " Humidity: " + result[0].current.humidity + "% Wind: " + result[0].current.windspeed);
					   } 
					   else 
					   {
						 bot.sendChat("Not found. Perhaps " + qualifier + " is from outside planet Earth, try again.");
					 }
					});
				}				
          break;
		 
		  case ".weatherC":
				 if (qualifier == "") {
					bot.sendChat("Enter a city or country or zip code.");
				} 
				else if (qualifier == "X") {
					  weather.find({search: 'Atlanta, GA', degreeType: 'C'}, function(err, result) {
				   if (result!=null){
					   bot.sendChat(result[0].location.name + " is currently: " + result[0].current.temperature + 
						   String.fromCharCode(176) + "C (Feels like " + result[0].current.feelslike + String.fromCharCode(176) + "C) " + result[0].current.skytext + " Humidity: " + result[0].current.humidity + "% Wind: " + result[0].current.windspeed);
				   } 
				   else 
				   {
					 bot.sendChat("Not found. Perhaps " + qualifier + " is from outside planet Earth, try again.");
				 }
			 });
				} 
				else { 
				 weather.find({search: qualifier, degreeType: 'C'}, function(err, result) {
				   if (result!=null){
					   bot.sendChat(result[0].location.name + " is currently: " + result[0].current.temperature + 
						   String.fromCharCode(176) + "C (Feels like " + result[0].current.feelslike + String.fromCharCode(176) + "C) " + result[0].current.skytext + " Humidity: " + result[0].current.humidity + "% Wind: " + result[0].current.windspeed);
				   } 
				   else 
				   {
					 bot.sendChat("Not found. Perhaps " + qualifier + " is from outside planet Earth, try again.");
				 }
			 });
			 }				
         break;

         case ".temp":
			 if (qualifier == "") {
				bot.sendChat("Enter a zip code.");
			 } else {
			  var myZipCity = JSON.stringify(zipcodes.lookup(qualifier));
			  var jsonobject = JSON.parse(myZipCity);
			  var city = jsonobject.city;
			  var state = jsonobject.state;
			  simpleWeather["v2.5"].current.byZipcode(qualifier, "US").then(function(response) {
				bot.sendChat(city + ", " + state + " is currently: " + response.main.temp + String.fromCharCode(176) + "F");
			}).catch(function(err) {
				bot.sendChat("Nothing found");
			});
		   }
       break;

      case ".lmgtfy":
		   if (qualifier == "") {
				bot.sendChat("Enter a name to look up.");
			} else {
			
				var url = require('url');

				function lmgt (query) {
				  var urlObject = {
					protocol: 'http:',
					hostname: 'lmgtfy.com',
					query: {
					  q: query
					}
				  }
				  url = url.format(urlObject)
				  return url
				}

				var query = qualifier;
				var result = lmgt(query);
				bot.sendChat("Let me Google that for you: " + result);
			}
      break;
	
	
     case ".google":
		   if (qualifier == "") {
				bot.sendChat("Enter a name to look up.");
			} else {
			
				var url = require('url');

				function lmgt (query) {
				  var urlObject = {
					protocol: 'http:',
					hostname: 'google.com/search',
					query: {
					  q: query
					}
				  }
				  url = url.format(urlObject)
				  return url
				}

				var query = qualifier;
				var result = lmgt(query);
				bot.sendChat("Let me Google that for you: " + result);
			}
	break;
	
    case ".urban":
		if (qualifier == "") {
			bot.sendChat("Enter a name to look up.");
		} else {
			if (qualifier.length > 1) {
				lookup(qualifier, function(entry) {
					if (entry['definition'].length > 0) {
						bot.sendChat(entry['definition']);
					} else {
						bot.sendChat("Nothing found for " + qualifier);
					}
				});
			}
		}
    break;

    case ".gif":
			if (qualifier == "") {
				bot.sendChat("Enter a name.");
			}
			else {
				  function randomItem (list) {
					return list[Math.round(Math.random() * 15 - 1)];
				}
				try {
				 
				 giphy.search({
					   q: qualifier,
					   limit: 7,
					   fmt: 'json'
				   }, function(err, response) {
					 try {
					   bot.sendChat(randomItem(response.data).images.fixed_height.url);
				   } catch (e) {
				   bot.sendChat("Nothing found.");
				   }
			   });	
			   
				}
			   catch (e) {
				bot.sendChat("Nothing found.");
			}							
		 }
	break;
	
	
	case ".imgur":
		if (qualifier == "") {
            bot.sendChat("Enter something to look up.");
        }
        else {
			var Imgur = require('imgur-search');
			var imgur = new Imgur('e0a95ca1dda5ffa');
				imgur.search(qualifier + '+ext:gif').always(function (resp) {
					try {
					var item = resp[Math.floor(Math.random()*resp.length)];
					if(item.looping === true) {
					bot.sendChat(item.title + " " + item.gifv);  
					} else {
						bot.sendChat("Request timed out.");
					}
				}
				 catch (err) {
						bot.sendChat("Nothing found.");
				}
			});
		}
	break;

	  case ".gif1":
			if (qualifier == "") {
				bot.sendChat("Enter a name.");
			}
			else {
			    function randomItem (list) {
					return list[0];
				}
				try {
				 giphy.search({
					   q: qualifier,
					   limit: 1,
					   fmt: 'json'
				   }, function(err, response) {
					 try {
					   bot.sendChat(randomItem(response.data).images.fixed_height.url);
				   } catch (e) {
				   bot.sendChat("Nothing found.");
				   }
			   });	
			   
				}
			   catch (e) {
				bot.sendChat("Nothing found.");
				}							
		  }
	break;

	case ".stop playing":
		bot.clearQueue();
	break;
	case ".queueYT":
		bot.queueMedia("youtube", qualifier);
		bot.sendChat("Song was added to the queue.");
	break;
	case ".queueSC":
		bot.queueMedia("soundcloud", qualifier);
		bot.sendChat("Song was added to the queue.");
	break;



	case ".numguess": 
	case ".guessnum":

	if (guessGame == null) {
		if (qualifier !== "") {
		 bot.sendChat("No game is running, use *.numguess* to start a new game.");
		 return;
		}
		
		guessGame = getGuessGame();
		bot.sendChat("Guess a number between 1 and 100. Guesses: (" + guessGame.guesses.length + "/10).");
		console.log(guessGame.number);
	} else {
			if (qualifier == "new") {
				bot.sendChat("Old game was cancelled.");
				guessGame = null;
				guessGame = getGuessGame();
				bot.sendChat("Guess a number between 1 and 100. Guesses: (" + guessGame.guesses.length + "/10).");
				return;
			}
			bot.sendChat("Guess a number between 1 and 100. Guesses: (" + guessGame.guesses.length + "/10).");
	}

	break;


	case "ng":
	case ".ng":

		if (qualifier==""){
			bot.sendChat("Guess a number between 1 and 100. Current Guesses: (" + guessGame.guesses.length + "/10).");
		}else {

		if (guessGame == null) {
			bot.sendChat("No game is running, use *.numguess* to start a new game.");
			return;
		}

		guessGame.start();
		var maxAttemps = guessGame.config.maxAttempt;

		if (inArray(qualifier, guessGame.guesses)) {
			bot.sendChat("You already guessed the number " + qualifier + ". Guesses: (" + guessGame.guesses.length + "/15).");
			return;
		} else if ( (isNaN(parseInt(qualifier))) || (parseInt(qualifier) < 1) || (parseInt(qualifier) > 100) ) {
			   bot.sendChat("You must pick a number between 1 and 100.");
			   return;
			}
			else {
				guessGame.guess(qualifier);
				
				if (guessGame.status == "WON") {
					bot.sendChat("You *won*. The number was " + guessGame.number + ". You made " + guessGame.guesses.length + " incorrect guesses.");
					guessGame = null;
					return;
				} else if (guessGame.status == "LOST") {
					bot.sendChat("You *lost*, 10 guesses were made. The number was " + guessGame.number + ".");
					guessGame = null;
					return;
				} else {
					if (guessGame.higher) {
						bot.sendChat("Try again, the number " + qualifier + " is too low. Guesses: (" + guessGame.guesses.length + "/10).");
						return;
					} else {
						bot.sendChat("Try again, the number " + qualifier + " is too high. Guesses: (" + guessGame.guesses.length + "/10).");
						return;
					}
				}
			}
		}
	break;



	case ".hm":
	case ".hangman": 

		if (qualifier == "leaders") {
			hmLeaders(db, function(hmwin){
				var propsChat = 'Hangman Top Winners: ';
				for(var i = 0; i < hmwin.length; i++){
					propsChat += '*' + hmwin[i].username + '* [' + hmwin[i].hmwin + ']';

					if(i !== (hmwin.length - 1))
						propsChat += ', ';
				}
				bot.sendChat(propsChat);
				});
			return;
		}

		if (qualifier == "losers") {
			hmLosers(db, function(hmloss){
				var propsChat = 'Hangman Top Losses: ';
				for(var i = 0; i < hmloss.length; i++){
					propsChat += '*' + hmloss[i].username + '* [' + hmloss[i].hmloss + ']';

					if(i !== (hmloss.length - 1))
						propsChat += ', ';
				}
				bot.sendChat(propsChat);
				});
			return;
		}

		if (game == null) {
			if (qualifier !== "") {
			 bot.sendChat("No game is running, use .hangman to start a new game.");
			 return;
			}
			
			game = getGame();
			hints = true;
			bot.sendChat("*H A N G M A N* : " + game.getConcealedPhrase());
		} else {
				if (qualifier == "new") {
					bot.sendChat("Old game was cancelled.");
					game = null;
					game = getGame();
					hints = true;
					bot.sendChat("*H A N G M A N* : " + game.getConcealedPhrase());
					return;
				}
				bot.sendChat("*H A N G M A N* : " + game.getConcealedPhrase());
				if (qualifier == "define") {
				try {
				hDef = getDef(hPhrase);
				} catch (err) { }
				}
		}

	break;

	case ".riddle":
		if (qualifier =="") {
			return;
		} else {
		 robot(qualifier, data.user.username);
		}
		break;

		case ".guess":
		if (qualifier==""){
			bot.sendChat("Enter something to guess, *" + data.user.username + "*.");
		}else {

		if (game == null) {
			bot.sendChat("No game is running, use *.hangman* to start a new game.");
			return;
		}

		game.start();

		if(qualifier == "help") {
			if (hints) {
				game.hint();
				bot.sendChat("*WORD* : " + game.getConcealedPhrase() + " [" + (game.config.maxAttempt-game.guesses.length) + "] [" +game.guesses.toString() + "]");
				hints = false;
				return;
			} else {
				bot.sendChat("The hint for the current game has alread been used, *" + data.user.username + "*.");
				return;
			}	
		}

		var wonTries = game.config.maxAttempt-game.guesses.length;

		if (qualifier.length > 1) {
			if(qualifier == hPhrase) {
				bot.sendChat("You *won* with " + (game.config.maxAttempt-game.guesses.length) + " tries left! The word was: " + hPhrase + ".");
				hmUser(db, bot.getUser(data.user.id), function(user){});
				game = null;
				return;
			} else {
					game.guess("X");
					bot.sendChat("*WORD* : " + game.getConcealedPhrase() + " [" + (game.config.maxAttempt-game.guesses.length) + "] [" +game.guesses.toString() + "]");
					if (game.status == "WON") {
					if (hints) {
						bot.sendChat("You *won* with " +  wonTries + " tries left and no help!");
						hmUser(db, bot.getUser(data.user.id), function(user){});
						game = null;
					return;
					} else {
						bot.sendChat("You *won* with " +  wonTries + " tries left and a hint!");
						hmUser(db, bot.getUser(data.user.id), function(user){});
						game = null;
					return;
					}
					game = null;
					return;
				} else if (game.status == "LOST") {
					bot.sendChat("You *lost*. The word was: " + hPhrase);
					hmLossUser(db, bot.getUser(data.user.id), function(user){});
					game = null;
					return;
				}
				return;
			}

		}
		 

			if (inArray(qualifier, game.hits)) {
				bot.sendChat("You already guessed the letter: " + qualifier + ".");
				return;
			} else {
				game.guess(qualifier.toLowerCase());
				bot.sendChat("*WORD* : " + game.getConcealedPhrase() + " [" + (game.config.maxAttempt-game.guesses.length) + "] [" +game.guesses.toString() + "]");
			}



		if (game.status == "WON") {
			if (hints) {
				bot.sendChat("You *won* with " +  wonTries + " tries left and no help!");
				hmUser(db, bot.getUser(data.user.id), function(user){});
			} else {
				bot.sendChat("You *won* with " +  wonTries + " tries left and 1 hint!");
				hmUser(db, bot.getUser(data.user.id), function(user){});
				
			}

			game = null;
			return;
		} else if (game.status == "LOST") {
			bot.sendChat("You *lost*. The word was: " + hPhrase);
			hmLossUser(db, bot.getUser(data.user.id), function(user){});
			game = null;
			return;
		}
		}

	break;

	function inArray(needle, haystack) {
		if (haystack == null) {
			return false;
		}
		var length = haystack.length;
		for(var i = 0; i < length; i++) {
			if(haystack[i] == needle)
				return true;
		}
		return false;
	}

	case ".play":
		var playingSong = bot.getMedia();
		if (qualifier==""){
			bot.sendChat("Pick a playlist to play. [DNB, JUNGLE, DARK-DNB]");
		} else if (qualifier == "dark-dnb" || qualifier == "Dark-dnb" || qualifier == "DARK-DNB") {
				bot.queuePlaylist('58826d505ad0102400206e4b');
				bot.sendChat("Playlist added to the queue.");
			
			} else if (qualifier == "JUNGLE" || qualifier == "jungle" || qualifier == "Jungle") {
				bot.sendChat("Playlist is empty");
			} else {
				bot.sendChat("Playlist is empty");
			}
	break;

	case ".img":  
		if (qualifier==""){
			bot.sendChat("Enter something to look up.");
		}
		else {
			gis(qualifier).then(function logResults(results) {
			  var random = Math.random() * 5 - 1;
			  bot.sendChat(results[random]);
		  }).catch(function(err){
			  console.log("Error: Google Timeout");
		  });
		}
	break;
	}

	if (data.message === "q?") {
		if (arr.length > 0) {
		 bot.sendChat("Queue: " + arr.toString());
	 }
	 else {
		 bot.sendChat("The queue is empty right now.");
	 }

	}
	if (data.message === ".today") {
	  var month = new Date().getMonth() + 1;
	  var day = new Date().getDate();
	  var factApi = `http://numbersapi.com/${month}/${day}`;
	  request(factApi, function (error, response, body) {
		var result = 'Bad request';
		if (!error && response.statusCode === 200 ) {
		  result = body;
		}
		bot.sendChat(result);
		});
	}

	if (data.message === ".fact") {
	request("http://numbersapi.com/random/trivia", function (error, response, body) {
			bot.sendChat(!error && response.statusCode == 200 
							? body 
	: "Facts are not available.");
	 });
	}

	if (data.message === ".yesterday") {
	  var month = new Date().getMonth() + 1;
	  var day = new Date().getDate() - 1;
	  var factApi = `http://numbersapi.com/${month}/${day}`;
	  request(factApi, function (error, response, body) {
		var result = 'Bad request';
		if (!error && response.statusCode === 200 ) {
		  result = body;
		}
		bot.sendChat(result);
		});
	}

	if (data.message === ".tomorrow") {
	  var month = new Date().getMonth() + 1;
	  var day = new Date().getDate() + 1;
	  var factApi = `http://numbersapi.com/${month}/${day}`;
	  request(factApi, function (error, response, body) {
		var result = 'Bad request';
		if (!error && response.statusCode === 200 ) {
		  result = body;
		}
		bot.sendChat(result);
		});
	}


	if (data.message === "q+") {
	   if (arr.includes(data.user.username + "")) {
		 bot.sendChat("You're already in the queue!");
	 }
	 else {
	   bot.sendChat("You've been added to the queue, @" + data.user.username + "!");
	   arr.push(data.user.username + "");
	}
	}
	if (data.message === "q-") {
	   if (arr.includes(data.user.username + "")) {
		   var indx = arr.indexOf(data.user.username + "");
		   bot.sendChat("You've been removed from the queue, @" + data.user.username + "!");
		   arr.splice(indx, 1);
	   }
	}
	if (data.message === ".joke") {
		var joke = require('jokesearch');
		joke.getJoke(function(joke) {
			bot.sendChat(joke);
		});
	}

	if(data.message === "getID") {

		bot.sendChat(getID(data.user.username));
	}
	if (data.message === ".catfact") {
		var catfact1 = Math.floor(Math.random() * catfact.length);
		bot.sendChat(catfact[catfact1]);
		catfact1 = Math.floor(Math.random() * catfact.length);
	}
	if (data.message === ".mitchhedberg") {
		var mitchhedberg1 = Math.floor(Math.random() * mitch.length);
		bot.sendChat(mitch[mitchhedberg1]);
		mitchhedberg1 = Math.floor(Math.random() * mitch.length);
	}
	if (data.message.split(" ")[0] == ".8ball") {
		var ball81 = Math.floor(Math.random() * ball8.length);
		bot.sendChat(ball8[ball81]);
		ball81 = Math.floor(Math.random() * ball8.length);
	}
	if (data.message === ".announce on") {
		bot.sendChat("Song history announce turned on.");
		spitLikes = true;
	}
	if (data.message === ".chucknorris") {
		var chucknorris1 = Math.floor(Math.random() * chucknorris.length);
		bot.sendChat(chucknorris[chucknorris1]);
		chucknorris1 = Math.floor(Math.random() * chucknorris.length);
	}
	if (data.message === ".til") {
		var til1 = Math.floor(Math.random() * til.length);
		bot.sendChat(til[til1]);
		til1 = Math.floor(Math.random() * til.length);
	}

	if (data.message === ".visitors") {
		visitorsCount(db, function(hmwin){
				var propsNum = hmwin.length;
				bot.sendChat("A total of " + propsNum + " people have visited this room.");
		});	

	
	if (data.message === ".1%" || data.message === ".richest") {
		moneyLeaders(db, function(money){
				var propsChat = 'Richest users: ';
				for(var i = 0; i < money.length; i++){
				
				var totalAMTCASH =  bigInt(money[i].money.toString()).toString();
					if (money[i].money < 1e21) {
						propsChat += '*' + money[i].username + '* [$' + money[i].money.format() + ']';
					} else {
						propsChat += '*' + money[i].username + '* [$' + totalAMTCASH + ']';
					}

					if(i !== (money.length - 1))
						propsChat += ', ';
				}
				bot.sendChat(propsChat);
		});	
	}

	if (data.message === ".99%" || data.message === ".poorest" ) {
		moneyLosers(db, function(money){
				var propsChat = 'Poorest users: ';
				for(var i = 0; i < money.length; i++){
					propsChat += '*' + money[i].username + '* [$' + money[i].money.format() + ']';

					if(i !== (money.length - 1))
						propsChat += ', ';
				}
				bot.sendChat(propsChat);
		});	
	}

		

	if (data.message === ".randomartist") {
		var randomartist1 = Math.floor(Math.random() * randomartist.length);
		bot.sendChat(randomartist[randomartist1]);
		randomartist1 = Math.floor(Math.random() * randomartist.length);
	}

	if (data.message === ".y") {
		bot.sendChat("http://i.imgur.com/EQXVGmK.png");
	}
	if (data.message === ".deported") {
		bot.sendChat("https://i.imgur.com/UEkATx7.png");
	}
	if (data.message === ".nobodygottimeforthat") {
		bot.sendChat("https://i.imgur.com/MGWbWTM.png");
	}
	if (data.message === "deported") {
		bot.sendChat("http://i.imgur.com/oQ30Umd.jpg");
	}
	if (data.message === ".dttm") {
		bot.sendChat("https://i.imgur.com/p8BGdj8.png");
	}
	if (data.message === ".curry value") {
		bot.sendChat("http://i.imgur.com/AauiLOa.png");
	}
	if (data.message === ".dillininja") {
		bot.sendChat("https://i.imgur.com/WY3BMTx.png");
	}
	if (data.message === ".dub phiczics") {
		bot.sendChat("https://i.imgur.com/ErnWuMG.png");
	}
	
	if (data.message === ".spekticles") {
		bot.sendChat("https://i.imgur.com/QhUI5BB.png");
	}
	
	if (data.message === ".pedalem") {
		bot.sendChat("https://i.imgur.com/W1LJKIm.png");
	}
	
	if (data.message.split(" ")[0] === (".blackjack") || data.message.split(" ")[0] === (".21") ) {
		blackJack(data.user.username, data.message.split(" "));
	 }
	if (data.message === ("hit") || data.message === ("hitme")) {
		blackJack(data.user.username, data.message.split(" "));
	 }
	 if (data.message === ("stand") || data.message === ("stay")) {
		blackJack(data.user.username, data.message.split(" "));
	 }
	 
	if (data.message === ".one-liner") {
		var getRandomJoke = oneLinerJoke.getRandomJoke().body;
		bot.sendChat(getRandomJoke);
	}


	if (data.message === ".pokemon") {

	var myPok = pokemon.random();
	var randPokedex = myPok.toLowerCase()

	bot.sendChat(pokedex.pokemon(randPokedex).sprites.animated + " *Pokemon:* " + myPok + " (#" + pokedex.pokemon(randPokedex).id + ")");

	}


	if (data.message === ".skip") {
		if (bot.isStaff(bot.getUserByName(data.user.username))) {
			bot.moderateSkip();
		} else {
			bot.sendChat("You don't have permission to do that, @" + data.user.username);
		}
	}


	if (data.message === ".rock") {
        var userChoice = "rock";
        var computerChoice = Math.random();
		var output = "";

        if (computerChoice < 0.33) {
            computerChoice = "rock";
        } else if (computerChoice > 0.66) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        output += "You picked *" + userChoice + "* and robot *" + computerChoice + "*. ";

        var areThey = function(value1, value2, choice1, choice2) {
            if (value1 === choice1 && value2 === choice2) {
                return (true);
            } else if (value1 === choice2 && value2 === choice1) {
                return (true);
            }
            return (false);
        }

        var compare = function(choice1, choice2) {
            if (areThey("paper", "rock", choice1, choice2)) {
				rpsDBLosses(db, bot.getUserByName(data.user.username), function(user){});
                return (output + "You ~*lose*~.");
            } else if (areThey("paper", "scissors", choice1, choice2)) {
				rpsDBLosses(db, bot.getUserByName(data.user.username), function(user){});
                return (output +"You ~*lose*~.");
            } else if (areThey("scissors", "rock", choice1, choice2)) {
				rpsDBScores(db, bot.getUserByName(data.user.username), function(user){});
                return (output +"You ~*win*~.");
            }
            return (output +"~*It's a tie!*~.");
        }
        bot.sendChat((compare(userChoice, computerChoice)));
    }
    if (data.message === ".paper") {
            // Get the human player's choice
            var userChoice = "paper";
            var computerChoice = Math.random();
			var output = "";

            if (computerChoice < 0.33) {
                computerChoice = "rock";
            } else if (computerChoice > 0.66) {
                computerChoice = "paper";
            } else {
                computerChoice = "scissors";
            }
           output += "You picked *" + userChoice + "* and robot *" + computerChoice + "*. ";

            var areThey = function(value1, value2, choice1, choice2) {
                if (value1 === choice1 && value2 === choice2) {
                    return (true);
                } else if (value1 === choice2 && value2 === choice1) {
                    return (true);
                }
                return (false);
            }

            var compare = function(choice1, choice2) {
                if (areThey("paper", "rock", choice1, choice2)) {
					rpsDBScores(db, bot.getUserByName(data.user.username), function(user){});
                    return (output +"You ~*win*~.");
                } else if (areThey("paper", "scissors", choice1, choice2)) {
					rpsDBLosses(db, bot.getUserByName(data.user.username), function(user){});
                    return (output +"You ~*lose*~.");
                } else if (areThey("scissors", "rock", choice1, choice2)) {
					rpsDBLosses(db, bot.getUserByName(data.user.username), function(user){});
                    return (output +"You ~*lose*~.");
                }
                return (output +"~*It's a tie!*~.");
            }
            bot.sendChat((compare(userChoice, computerChoice)));
        }
        if (data.message === ".scissors") {
            // Get the human player's choice
            var userChoice = "scissors";
            var computerChoice = Math.random();
			var output = "";

            if (computerChoice < 0.33) {
                computerChoice = "rock";
            } else if (computerChoice > 0.66) {
                computerChoice = "paper";
            } else {
                computerChoice = "scissors";
            }
			output += "You picked *" + userChoice + "* and robot *" + computerChoice + "*. ";

            var areThey = function(value1, value2, choice1, choice2) {
                if (value1 === choice1 && value2 === choice2) {
                    return (true);
                } else if (value1 === choice2 && value2 === choice1) {
                    return (true);
                }
                return (false);
            }

            var compare = function(choice1, choice2) {
                if (areThey("paper", "rock", choice1, choice2)) {
					rpsDBLosses(db, bot.getUserByName(data.user.username), function(user){});
					return (output +"You ~*lose*~.");
                } else if (areThey("paper", "scissors", choice1, choice2)) {
					rpsDBScores(db, bot.getUserByName(data.user.username), function(user){});
                    return (output +"You ~*win*~.");
                } else if (areThey("scissors", "rock", choice1, choice2)) {
					rpsDBLosses(db, bot.getUserByName(data.user.username), function(user){});
                    return (output +"You ~*lose*~.");
                }
                return (output +"~*It's a tie!*~.");
            }
            bot.sendChat((compare(userChoice, computerChoice)));
        }
    });
	function msToTime(duration) {
		var milliseconds = parseInt((duration % 1000) / 100),
		seconds = parseInt((duration / 1000) % 60),
		minutes = parseInt((duration / (1000 * 60)) % 60),
		hours = parseInt((duration / (1000 * 60 * 60)) % 24);

		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;

		if (hours == 0) {
			return minutes + ":" + seconds;
		} else {
			return hours + ":" + minutes + ":" + seconds;
		}
	}

		var superb = require('superb');
		function newWord() {
			return superb();
		}
	
	 var fs = require('fs');
	 var path = require('path');
	 var riddles = require('./static/consts/riddles.json');	
	 
	 var answerRid = '';
	 
	function robot(args, user) {
		if (args == 'me') {
		  var index = Math.floor(Math.random() * riddles.count);
			var riddle = riddles[index].riddle;
			var answer = riddles[index].answer;
			answerRid = answer;
			bot.sendChat('*Riddle:* ' + riddle);
			console.log(answer);
			return;
			} else if (args == 'answer') {
			 
			bot.sendChat('Giving up so soon? Should have seen that coming. *Answer:* ' + answerRid + ".");
				return;
			} 
			else {
			var userAnswer = args.toLowerCase();
			var correctAnswer = answerRid.toLowerCase();

			if (!userAnswer || correctAnswer.indexOf(userAnswer) === -1) {
			  bot.sendChat('Wrong! Try again *' + user + '*.');
				return;
			} else {
			  answerRid = '';
			  bot.sendChat('Well would you look at that! The next one will be much harder, *' + user + '*.');
				return;
			}
			}
	}

  
	var guessGame = null;
		
	function getGuessGame() {
		if (guessGame == null) {
			guessGame = GuessGame.newGame();
			return guessGame;
		}
		return guessGame;
	}

	var game = null;
	var hPhrase = null;
	var hDef = null;
	var hints = false;
	
	function getGame() {
		hPhrase = newWord();
		if (game == null) {
		 game = hangman.newGame(hPhrase);
		 console.log(hPhrase);
		 return game;
		}
		return game;
	}
	
	var wd = require("word-definition");

	function getDef(word) {
		
		wd.getDef(word, "en", null, function(definition) {
		try {
		bot.sendChat(definition.definition);
		return;
		} catch(err) {
				bot.sendChat("No definition found.");
			return;
		}
		
		});			 
	}
		
		/****************************************************************************
        ****************************************************************************/
		
		function getID(author) {
		 var p1 = bot.getUserByName(author);
		 return p1.id;
		}
		
		function getUsername(id) {
			var p2 = bot.getUser(id);
			return p2.username;
		}
		
		function getBlackJackGame(username, count) {
			count = (typeof count === "undefined") ? false : count;
			for (i = 0; i < blackJackUsers.length; i++) { // search stored games
				if (blackJackUsers[i].indexOf(getID(username) != -1)) {
					return (count) ? i : blackJackUsers[i];
				}
			}
			return -1; // if not already playing
		}
		
		function deleteBlackJackGame(username, freepass) { // game over, remove from blackJackUsers array
			freepass = (typeof freepass === "undefined") ? false : freepass;
			blackJackPlayer = [Date.now(), ""]; // remove userID of previous current player

			for (i = 0; i < blackJackUsers.length; i++) { // search stored games
				if (blackJackUsers[i].indexOf(getID(username)) != -1) {
					blackJackUsers.splice(blackJackUsers.indexOf(getID(username)), 1);
					break;
				}
			}
			if (freepass && blackJackPlayers.indexOf(getID(username)) != -1) { // don't prohibit them from waiting for 5 others to play BJ
				blackJackPlayers.splice(blackJackPlayers.indexOf(getID(username)), 1); // remove from the list that inhibits immediate plays
			}
		}
		
		function _getRandCard(deck, remove) {
			var randNumber = Math.round(Math.random() * (deck.length - 1));
			if (remove) {
				deck.splice(randNumber, 1);
			}
			return [deck, randNumber];
		}
	    
		// return the total point value of a given hand ["Q", 3, "A", 6]
		function getSumOfHand(hand) { 
        var skippedAces = 0;
        var total = 0;

        for (i = 0; i < hand.length; i++) {
            switch (hand[i]) {
                case 'A':
                    skippedAces++;
                    break;
                case 2:
                    total = total + 2;
                    break;
                case 3:
                    total = total + 3;
                    break;
                case 4:
                    total = total + 4;
                    break;
                case 5:
                    total = total + 5;
                    break;
                case 6:
                    total = total + 6;
                    break;
                case 7:
                    total = total + 7;
                    break;
                case 8:
                    total = total + 8;
                    break;
                case 9:
                    total = total + 9;
                    break;
                case 10:
                case 'J':
                case 'Q':
                case 'K':
                    total = total + 10;
                    break;
                case '?': // joker
                default:
                    break;
            }
        }

        if (skippedAces) {
            for (i = 0; i < skippedAces; i++) {
                total = ((total + 11) <= 21) ? (total + 11) : (total + 1); // Ace = 11pts unless over 21, then Ace = 1pt
            }
        }

        return total;
	}
	
	
	
	function blackJackStand(author){// function for dealer to keep hitting if needed
		var game                = getBlackJackGame(author, true);
		var output              = "*" +author + "*, robot's final hand: ";
		var getCard             = null;
		console.log("blackJackStand(" + author + ") called, game = " + game);

		try {if(getSumOfHand(blackJackUsers[game][2]) < getSumOfHand(blackJackUsers[game][3]) && getSumOfHand(blackJackUsers[game][2]) < 21) {
			bot.sendChat("*" + author + "*, your score is lower than robot's, you must hit.");
			return;
		} else {
			blackJackUsers[game][7] = true;
		}} catch(err){}

		while(game != -1 && getSumOfHand(blackJackUsers[game][2]) >= getSumOfHand(blackJackUsers[game][3])) {	// Dealer keeps hitting until score is higher than the user's
			getCard      = _getRandCard(blackJackUsers[game][4], true);// deal a card and get the new deck-chosen card
			blackJackUsers[game][3].push(blackJackUsers[game][4][getCard[1]]);// add the new card to the dealer's hand
			blackJackUsers[game][4] = getCard[0];// make sure we use the spliced deck
		}
		try {
		output += blackJackUsers[game][3].join("-") + " [" + getSumOfHand(blackJackUsers[game][3]) + "], yours: " + blackJackUsers[game][2].join("-") + ", [" + getSumOfHand(blackJackUsers[game][2]) + "].";

	   
	   if(getSumOfHand(blackJackUsers[game][2]) < getSumOfHand(blackJackUsers[game][3]) && getSumOfHand(blackJackUsers[game][3]) <= 21) {
				bot.sendChat(output + " robot wins. `You LOSE.`");
				
				blackJackUpdateDBLosses(db, bot.getUserByName(author), function(user){});
				
				deleteBlackJackGame(author);
			} else if(getSumOfHand(blackJackUsers[game][3]) > 21) {
				bot.sendChat(output + " robot busts, `You WIN!`");	
				blackJackUpdateDBScores(db, bot.getUserByName(author), function(user){});
				deleteBlackJackGame(author);
			} else if(getSumOfHand(blackJackUsers[game][2]) == getSumOfHand(blackJackUsers[game][3]) && getSumOfHand(blackJackUsers[game][2]) == 21) {
				bot.sendChat(ouput + "You both scored 21, that's impressive yo! :O");
				deleteBlackJackGame(author, true);
			} else {
				bot.sendChat("Something broke.");
			}
		  } catch(err) {}
			
		}	
		function checkBlackJackWager(author, wager) {// make sure players bet what||less than they can gain||lose
		var correctedPosition   = parseInt(_.random(1,7) + 1);
		var maxWin              = correctedPosition - 1;
		var maxLose             = 1;
		wager                   = parseInt(wager);

		if((correctedPosition - wager) < 1 || (correctedPosition + wager) > 1) {// check if they bet more than they can win
			wager = (maxWin > maxLose) ? maxLose : maxWin;// use the lesser amount
		}
		return wager;
		}	
			
	
		
	function checkBlackJackPlayer(author, args1) {// throttle blackjack games
		var authorID = getID(author);

		if(blackJackPlayer[1] == "") {	
			blackJackPlayer[1] = authorID;// set current userID to enforce 1 player at a time
			blackJackPlayers.unshift(authorID);// new player, add to blackjack players tracker
			return true;
		} else if(blackJackPlayer[1] != "" && blackJackPlayer[1] != authorID) {// wrong active player
			if (args1 !== "cancel") {
				bot.sendChat("One player at a time, *" + author + "*.");
			}
				return false;
		
		} else if((Date.now() - blackJackPlayer[0]) > blackJackTimeLimit) {// time limit expired
			var username = getUsername(blackJackPlayer[1]);
			var game     = getBlackJackGame(username, true);//array key of current saved game

			bot.sendChat("*" + username + "*, the timer expired or the connection was lost, making you forfeit.");
			deleteBlackJackGame(username, true);
			return true;
		} else if(blackJackPlayer[1] == authorID) {// they are the current player
			return true;
		}
		return true;
	}
		
	function blackJack(author,args) {// ever been to a casino? good, then I won't explain this function
    var savedGame = null;
    var getCard   = null;
    var game      = null;
    var output    = "";
    args[0]       = (typeof args[0] === "undefined")   ? "" : args[0];
    args[1]       = (typeof args[1] === "undefined")   ? "" : args[1];

    if(!blackJackEnabled && args[1] != "on" && args[1] != "off") {
       bot.sendChat("*" + author + "*, blackjack is broken, try again later.");
        return;
    }
		
	if (args[1] == "cancel" && checkBlackJackPlayer(author, args[1])) {
			var savedInfo = savedGame = getBlackJackGame(author);
			if (savedInfo == -1) {
				bot.sendChat("*" + author + "* there's nothing to forfeit.");
				return;
			}
			bot.sendChat("*" + author + "* forfeit the game.");
			deleteBlackJackGame(author, true);
			return;
	}
	
	if (args[1] == "leaders") {
		bjLeaders(db, function(x){
			var scoresChat = 'BlackJack Top Winners: ';
			for(var i = 0; i < x.length; i++){
				 scoresChat += '*' + x[i].username + '* [' + x[i].bjwin + ']';

				if(i !== (x.length - 1))
					 scoresChat += ', ';
			}
			bot.sendChat( scoresChat);
		});	
		return;
	}
	
	if (args[1] == "losers") {
		bjLosers(db, function(x){
			var scoresChat = 'BlackJack Top Losses: ';
			for(var i = 0; i < x.length; i++){
				 scoresChat += '*' + x[i].username + '* [' + x[i].bjloss + ']';

				if(i !== (x.length - 1))
					 scoresChat += ', ';
			}
			bot.sendChat( scoresChat);
		});	
		return;
	}
	

    if(!checkBlackJackPlayer(author, "") && args[1] != "hit" && args[1] != "hitme" && args[1] != "stand" && args[1] != "stay") {
	  // console.log("Something went wrong.");
       return;// why the eff was this even called then??
    }

    switch(args[0]) {
        case 'hitme':
        case 'hit':
            savedGame = getBlackJackGame(author);// array of current saved game
            game      = getBlackJackGame(author, true);//array key of current saved game

            if(savedGame != -1 && blackJackUsers[game][7]) {
               bot.sendChat("*" + author + "*, you chose to stand. Dealer must play their hand now.");
                return;
            }

            if(savedGame != -1) {
                getCard              = _getRandCard(savedGame[4], true);// deal a card and get the new deck-chosen card
                savedGame[2].push(savedGame[4][getCard[1]]);// add the new card to the user's hand
                savedGame[4]         = getCard[0];// make sure we use the spliced deck
                blackJackUsers[game] = savedGame;

                output  = "*" + author + "*, you dealt a " + savedGame[4][getCard[1]] + " making your hand: " + savedGame[2].join("-") + " [" + getSumOfHand(savedGame[2]) + "] ";

                if(getSumOfHand(savedGame[2]) == 21 && getSumOfHand(savedGame[3]) == 21) {
                    bot.sendChat(output + "You tied!");
                    deleteBlackJackGame(author, true);
                    return;
                } else if(getSumOfHand(savedGame[2]) == 21) {
                   bot.sendChat(output + "forcing you to stand, dealer's turn now.");
                    blackJackStand(author);
                    return;
                } else if(getSumOfHand(savedGame[2]) > 21) {
                    bot.sendChat(output + "which is a BUST. `You LOSE!`");
					
					blackJackUpdateDBLosses(db, bot.getUserByName(author), function(user){});
					
                    deleteBlackJackGame(author);// game over, remove from blackJackUsers array
                    return;
                }  else if (getSumOfHand(savedGame[2]) < getSumOfHand(savedGame[3])) {
                   bot.sendChat(output + ". Dealer's hand: " + savedGame[3].join("-") + ", [" + getSumOfHand(savedGame[3]) + "]. Your hand is smaller. You must hit.");
                } else {
                    bot.sendChat(output + ". Dealer's hand: " + savedGame[3].join("-") + ", [" + getSumOfHand(savedGame[3]) + "]. Hit or stand?");
                }
            } else {
               // bot.sendChat("*" + author + "*, start a new game with the blackjack command.");
            }
            break;
        case 'stand':
        case 'stay':
            blackJackStand(author);
            break;
		case '21':
        case 'blackjack':
        default:
          args[1] = _.random(1,5);
		  if(isNaN(args[1]) || args[1] == "" || typeof args[1] === "undefined") {
               console.log("Try again.");
                deleteBlackJackGame(author, true);
                return;
			}
			else if(checkBlackJackWager(author, args[1]) != args[1]) {// check if they bet excessively
                args[1] = parseInt(checkBlackJackWager(author, args[1]));
				//  console.log("@" + author + ", your wager has been changed to " + args[1]);
            }
			
            savedGame = getBlackJackGame(author);

            if (savedGame != -1) {
                bot.sendChat("*" + author + "*, you already have a game running. Hand: " + savedGame[2][0] + "-" + savedGame[2][1] + ", [" + getSumOfHand(savedGame[2]) + "] Dealer: " + savedGame[3][0] + "-" + savedGame[3][1] + ", [" + getSumOfHand(savedGame[3]) + "]. Hit or stand?");
            } else {
                var newDeck    = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, "J", "J", "J", "J", "Q", "Q", "Q", "Q", "K", "K", "K", "K", "A", "A", "A", "A"];
                var handUser   = [];// values of cards from newDeck, not the keys
                var handDealer = [];
                game           = null;
                getCard        = null;
                output         = "";

                getCard        = _getRandCard(newDeck, true);// deal a card and get the new deck-chosen card
                handUser.push(newDeck[getCard[1]]);// add the first card to the user's hand
                newDeck        = getCard[0];// make sure we use the spliced deck

                getCard        = _getRandCard(newDeck, true);// deal another card
                handDealer.push(newDeck[getCard[1]]);// add second dealt card to dealer's hand
                newDeck        = getCard[0];

                getCard        = _getRandCard(newDeck, true);// deal another card
                handUser.push(newDeck[getCard[1]]);// add the third card to the user's hand
                newDeck        = getCard[0];// make sure we use the spliced deck

                getCard        = _getRandCard(newDeck, true);// deal another card
                handDealer.push(newDeck[getCard[1]]);// add fourth dealt card to dealer's hand
                newDeck        = getCard[0];

                blackJackUsers.push([getID(author), args[1], handUser, handDealer, newDeck, false, false]);// add dealt hands and reduced decks to blackJackUsers tracking array

                game   = blackJackUsers.length - 1;// set array key for future storage/retrieval within function;
                output = "*" + author + "*'s dealt: " + '\uD83C\uDCA0' + "-" + handUser[1] + ". Dealer's dealt: " + '\uD83C\uDCA0' + "-" + handDealer[1] + ". ";

                if(handUser[1] == "A" || handDealer[1] == "A") {
                    output += "Ace found. Your hand: " + handUser[0] + "-" + handUser[1] + ", Dealer's hand: " + handDealer[0] + "-" + handDealer[1] + ". ";

                    if(((handUser[0] == 10 || handUser[0] == "J" || handUser[0] == "Q" || handUser[0] == "K") && handUser[1] == "A") && ((handDealer[0] == 10 || handDealer[0] == "J" || handDealer[0] == "Q" || handDealer[0] == "K") && handDealer[1] == "A")) {
                        bot.sendChat(output + " You both hit blackjack! :O");
                        blackJackUsers[game][6] = true;// cards now face-up
                        deleteBlackJackGame(author, true);
                    } else if((handUser[0] == 10 || handUser[0] == "J" || handUser[0] == "Q" ||handUser[0] == "K") && handUser[1] == "A") {
                        bot.sendChat(output + " `You WIN!`");
						blackJackUpdateDBScores(db, bot.getUserByName(author), function(user){});
                        blackJackUsers[game][6] = true;// cards now face-up
                        deleteBlackJackGame(author);
                    } else if((handDealer[0] == 10 || handDealer[0] == "J" || handDealer[0] == "Q" || handDealer[0] == "K") && handDealer[1] == "A") {
                        bot.sendChat(output + " *" + author + "* got ~destroyed~ at blackjack by robot.");
						
						blackJackUpdateDBLosses(db, bot.getUserByName(author), function(user){});
						
                        blackJackUsers[game][6] = true;// cards now face-up
                        deleteBlackJackGame(author);
                    } else {
                        if (getSumOfHand(handUser) < getSumOfHand(handDealer)) {
                            output += "Your hand is smaller, you must hit.";
                        } else {
                            output += "Hit or stand?";
                        }

                         bot.sendChat(output);
                    }
                } else {
                    output += "No aces found, revealing hands now. You: " + handUser[0] + "-" + handUser[1] + ", robot: " + handDealer[0] + "-" + handDealer[1] + ". ";

                    if(getSumOfHand(handUser) == 21 && getSumOfHand(handDealer) == 21) {
                        output += "You both hit blackjack!";
                        blackJackUsers.splice(game, 1);// game over, remove from blackJackUsers array
                        return;
                    } else if(getSumOfHand(handUser) == 21) {
                        output += " `You WIN!`";
						blackJackUpdateDBScores(db, bot.getUserByName(author), function(user){});
                        blackJackUsers.splice(game, 1);// game over, remove from blackJackUsers array
                        return;
                    } else if(getSumOfHand(handDealer) == 21) {
                        output += "You just got beaten at blackjack by robot!";
						
						blackJackUpdateDBLosses(db, bot.getUserByName(author), function(user){});
						
                        blackJackUsers.splice(game, 1);// game over, remove from blackJackUsers array
                        return;
                    } else if (getSumOfHand(handUser) < getSumOfHand(handDealer)) {
                        output += "Your hand is smaller, you must hit.";
                    } else {
                        output += "Hit or stand?";
                    }

                    bot.sendChat(output);
                    blackJackUsers[game][6] = true;// cards now face-up
                }

                try {
				if(blackJackUsers[game][5]) {
                    blackJackUsers.splice(game, 1);// game over, remove from blackJackUsers array
                    return;
                }
				} catch(err) {}
            }
            break;
		}
	}
	function checkBlackJackOutput(chatID, message) {
		if(message.search("!blackjack") >= "-1" ||  message.search("!blackjack") <= 2) {
			return false;// Do this first cause there's a higher chance of the chatted msg being irrelevant to BlackJack
		} else {
			if(lastBlackJack != "") {        
			}
			lastBlackJack = chatID;
			return true;
		}
	}	

	Number.prototype.format = function(n, x) {
		var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
		return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
	};



	/****************************************
	****************************************
	****************************************/
	function logUser(db, user, callback) {
		findUserById(db, user.id, function(foundUser) {
			if(!foundUser){
				insertUser(db, user, function(newUser){
					user.logType = "inserted";
					return callback(user);
				});
			}
			else {
				var username = user.username;
				db.collection("users").updateOne(
				{ "id" : user.id },
				{   $set: { "dubs": user.dubs },
					$currentDate: { "LastConnected": true }
				}, function(err, results) {
					user.logType = "updated";
					return callback(user);
				});
			}
		});
	};

	function findUserById(db, userid, callback) { 
		db.collection("users").findOne( { "id": userid }, function(err, doc) {
			if (doc != null) {
				callback(doc);
			} else {
				callback();
			}
		});
	};

	function updateUser(db, userid, user, callback) {
	};

	function insertUser(db, user, callback) {
		user.hmwin = 0;
		user.bjwin = 0;
		user.money = 50;
		user.bjloss = 0;
		user.hmloss = 0;
		user.rpswin = 0;
		user.rpsloss = 0;
		user.items = "";
		user.DateAdded = new Date();
		user.LastConnected = new Date();
		db.collection("users").insertOne(user, function(err, result) {
			callback(result.ops[0]);
		});
	};

	function hmUser(db, user, callback) {
		db.collection("users").updateOne(
		   { "id": user.id },
		   { $inc: { hmwin: 1 } },
		   { },
			function(err,data){
				if (err){
					//console.log("ERR:", err);
					callback();
				}else{
					findUserById(db, user.id, function(foundUser){
						return callback(foundUser);
					});
				}
			}
		);
	};


	function hmLossUser(db, user, callback) {
		db.collection("users").updateOne(
		   { "id": user.id },
		   { $inc: { hmloss: 1 } },
		   { },
			function(err,data){
				if (err){
					//console.log("ERR:", err);
					callback();
				}else{
					findUserById(db, user.id, function(foundUser){
						return callback(foundUser);
					});
				}
			}
		);
	};

	function moneyUser(db, amt, user, callback) {
		db.collection("users").updateOne(
		   { "id": user.id },
		   { $inc: { money: parseInt(amt) } },
		   { },
			function(err,data){
				if (err){
					callback();
				}else{
					findUserById(db, user.id, function(foundUser){
						console.log("Updated ", user.username, " money ", foundUser.money);
						return callback(foundUser);
					});
				}
			}
		);
	};

	var tempCashAmt = 0;

	function moneyDecUser(db, amt, user, callback) {
		db.collection("users").updateOne(
		   { "id": user.id },
		   { $inc: { money: (amt*-1) } },
		   { },
			function(err,data){
				if (err){
					callback();
				}else{
					findUserById(db, user.id, function(foundUser){
						console.log("Updated ", user.username, " money ", foundUser.money);
						return callback(foundUser);
					});
				}
			}
		);
	};

	var blackJackUpdateDBScores = function(db, user, callback) {
		db.collection("users").updateOne(
		   { "id": user.id },
		   { $inc: { bjwin: 1 } },
		   { },
			function(err,data){
				if (err){
					console.log("ERR:", err);
					callback();
				}else{
					findUserById(db, user.id, function(foundUser){
						return callback(foundUser);
					});
				}
			}
		);
	};

	var blackJackUpdateDBLosses = function(db, user, callback) {
		db.collection("users").updateOne(
		   { "id": user.id },
		   { $inc: { bjloss: 1 } },
		   { },
			function(err,data){
				if (err){
					console.log("ERR:", err);
					callback();
				}else{
					findUserById(db, user.id, function(foundUser){
						return callback(foundUser);
					});
				}
			}
		);
	};


	var rpsDBScores = function(db, user, callback) {
		db.collection("users").updateOne(
		   { "id": user.id },
		   { $inc: { rpswin: 1 } },
		   { },
			function(err,data){
				if (err){
					console.log("ERR:", err);
					callback();
				}else{
					findUserById(db, user.id, function(foundUser){
						return callback(foundUser);
					});
				}
			}
		);
	};

	var rpsDBLosses = function(db, user, callback) {
		db.collection("users").updateOne(
		   { "id": user.id },
		   { $inc: { rpsloss: 1 } },
		   { },
			function(err,data){
				if (err){
					console.log("ERR:", err);
					callback();
				}else{
					findUserById(db, user.id, function(foundUser){
						return callback(foundUser);
					});
				}
			}
		);
	};



	/*
	=====================
	WINNERS AND LOSERS
	DATABASE RETRIEVE
	====================
	*/

	var hmLeaders = function(db, callback) {
		var propsCursor = db.collection("users").find().sort( { hmwin: -1 } ).limit(3);
		propsCursor.toArray(function(err, docs) {
			if (docs != null) {
				callback(docs);
			} else {
				callback();
			}
		});
	};

	var hmLosers = function(db, callback) {
		var propsCursor = db.collection("users").find().sort( { hmloss: -1 } ).limit(3);
		propsCursor.toArray(function(err, docs) {
			if (docs != null) {
				callback(docs);
			} else {
				callback();
			}
		});
	};

	var moneyLeaders = function(db, callback) {
		var moneyCursor = db.collection("users").find().sort( { money: -1 } ).limit(5);
		moneyCursor.toArray(function(err, docs) {
			if (docs != null) {
				callback(docs);
			} else {
				callback();
			}
		});
	};

	var moneyLosers = function(db, callback) {
		var moneyCursor = db.collection("users").find().sort( { money: 1 } ).limit(3);
		moneyCursor.toArray(function(err, docs) {
			if (docs != null) {
				callback(docs);
			} else {
				callback();
			}
		});
	};

	var bjLosers = function(db, callback) {
		var bjCursor = db.collection("users").find().sort( { bjloss: -1 } ).limit(3);
		bjCursor.toArray(function(err, docs) {
			if (docs != null) {
				callback(docs);
			} else {
				callback();
			}
		});
	};

	var bjLeaders = function(db, callback) {
		var heartsCursor = db.collection("users").find().sort( { bjwin: -1 } ).limit(3);
		heartsCursor.toArray(function(err, docs) {
			if (docs != null) {
				callback(docs);
			} else {
				callback();
			}
		});
	};

	var visitorsCount = function(db, callback) {
		var propsCursor = db.collection("users").find().sort( { hmwin: -1 } );
		propsCursor.toArray(function(err, docs) {
			if (docs != null) {
				callback(docs);
			} else {
				callback();
			}
		});
	};


	/****************************************
	*****************************************
	/****************************************/

	const querystring = require('querystring');
	const got = require('got');

	const URL_PREFIX = 'https://web.archive.org/web/';
	const API_PREFIX = 'https://gifcities.archive.org';
	const API_PATH = '/api/v1/gifsearch';

	function apiUrlWithSearchTerm(term) {
	  const qs = querystring.stringify({q: term});
	  return `${API_PREFIX}${API_PATH}?${qs}`;
	}

	function gifcities(term, cb) {
	  return got(apiUrlWithSearchTerm(term)).then(response => {
		const gifs = JSON.parse(response.body).map(gif => {
		  gif.url = URL_PREFIX + gif.gif;
		  return gif;
		});

		if (cb) {
		  cb(null, gifs);
		}

		return gifs;
	  })
	  .catch(err => {
		if (cb) {
		  cb(err);
		}

		return err;
	  });
	}

	function toFixed(x) {
	  var result = '';
	  var xStr = x.toString(10);
	  var digitCount = xStr.indexOf('e') === -1 ? xStr.length : (parseInt(xStr.substr(xStr.indexOf('e') + 1)) + 1);
	  
	  for (var i = 1; i <= digitCount; i++) {
		var mod = (x % Math.pow(10, i)).toString(10);
		var exponent = (mod.indexOf('e') === -1) ? 0 : parseInt(mod.substr(mod.indexOf('e')+1));
		if ((exponent === 0 && mod.length !== i) || (exponent > 0 && exponent !== i-1)) {
		  result = '0' + result;
		}
		else {
		  result = mod.charAt(0) + result;
		}
	  }
	  return result;
	}

	function lookup(query, callback) {
			var response = urban(query);
			response.first(function(json) {
				var entry = {}
				try {
					if (json.definition && query.length > 0) {
						entry['definition'] = json.definition;
					} else {
						entry['definition'] = "";
					}
					if (json.example && query.length > 0) {
						entry['example'] = json.example;
					} else {
						entry['example'] = "";
					}
					callback(entry);
				} catch (e) {
					entry['definition'] = "";
					entry['example'] = "";
					callback(entry);
				}
			});
		}
	stdin.addListener("data", function(d) {
	  try {
		  bot.sendChat(d.toString().trim());
	  } catch(err) {
	   console.log("Error");
	}
	});

	connect();
	});
	 });
	}).call(this);