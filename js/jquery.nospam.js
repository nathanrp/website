/* 
 * No Spam (1.3.2)
 * by Mike Branski <mikebranski@gmail.com>
 * https://github.com/mikebranski/jquery-nospam
 *
 * Copyright (c) 2008-2011 Mike Branski (https://github.com/mikebranski)
 * Licensed under GPL version 3 (http://www.gnu.org/copyleft/gpl.html)
 *
 * NOTE: This script requires jQuery to work.  Download jQuery at jquery.com
 *
 */
(function(a){a.fn.nospam=function(b){b=a.extend({replaceText:false,filterLevel:"normal"},b);return this.each(function(){e=null;if(b.filterLevel=="low"){if(a(this).is("a[rel]")){e=a(this).attr("rel").replace("//","@").replace(/\//g,".")}else{e=a(this).text().replace("//","@").replace(/\//g,".")}}else{if(a(this).is("a[rel]")){e=a(this).attr("rel").split("").reverse().join("").replace("//","@").replace(/\//g,".")}else{e=a(this).text().split("").reverse().join("").replace("//","@").replace(/\//g,".")}}if(e){if(a(this).is("a[rel]")){a(this).attr("href","mailto:"+e);if(b.replaceText){a(this).text(e)}}else{a(this).text(e)}}})}})(jQuery)