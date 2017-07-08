function growth(value,rate,years) {
var a=[]; var x=value;
for(i=0;i<years;i++) {
a.push(x);
x=x*(1+rate);
x=x.toFixed(2);
}
return a;
}
function grower(list_values,list_growth,years,products) {
var a=[]; var b=[];
for(i=0;i<years;i++) {
for(j=0;j<products;j++) {
b=growth(list_values[j],list_growth[j],years);
a.push(b);
}
}
return a;
}
function trimmer(list) {
var a=[]; var n=list.length; var x;
for(i=0;i<n;i++) {
x=list[i].trim();
x=parseFloat(x);
a.push(x);
}
return a;
}
function splitter(x) {
var a=new Array(); var y=x.trim();
a=y.split(',');
return a;
}
function list_investments(value,rate,years) {
var a=[]; var x=value;
for(i=0;i<years;i++) {
a.push(x);
x=x*(1+rate);
x=parseInt(x);
}
return a;
}
function divider(x,y) {
var a=[]; var k=[]; var z=new Array(); var n=x.length; var b;
for(i=0;i<n;i++) {
b=x[i]/y[i];
b=b*100; b=b.toFixed(2); k.push(b);
b=String(b); b=b+"%"; a.push(b);
}
z.push(a); z.push(k);
return z;
}
function averager(x) {
var b=0; var n=x.length;
for(i=0;i<n;i++) {
b=b+parseInt(x[i]);
}
b=b/n; b=b.toFixed(2);
return b;
}
function summer(x,y) {
var a=[]; var n=x.length; var b;
for(i=0;i<n;i++) {
b=x[i]+y[i];
b=parseInt(b);
a.push(b);
}
return a;
}
function subtractor(x,y) {
var a=[]; var n=x.length; var b;
for(i=0;i<n;i++) {
b=x[i]-y[i];
b=parseInt(b);
a.push(b);
}
return a;
}
function list_years(start,years) {
var a=[];
for(i=0;i<years;i++) {
a.push(start+i);
}
return a;
}
function list_startups(startup,years) {
var a=[];
for(i=0;i<years;i++) {
if(i==0) {a.push(startup);}
if(i!=0) {a.push(0);}
}
return a;
}
function list_loans(loan,years) {
var a=[];
for(i=0;i<years;i++) {
if(i==0) {a.push(loan);}
if(i!=0) {a.push(0);}
}
return a;
}
function list_fixeds(value,rate,years) {
var a=[]; var x=value;
for(i=0;i<years;i++) {
a.push(x);
x=x*(1+rate);
x=parseInt(x);
}
return a;
}
function list_repayments(loan,years) {
var a=[];
for(i=0;i<years;i++) {
if(i!=(years-1)) {a.push(0);}
if(i==(years-1)) {a.push(loan);}
}
return a;
}
function list_interests(loan,rate,years) {
var a=[]; var b;
b=loan*rate;
b=parseInt(b);
for(i=0;i<years;i++) {
a.push(b);
}
return a;
}
function list_depreciations(startup,years) {
var a=[]; var b;
b=startup/years;
b=parseInt(b);
for(i=0;i<years;i++) {
a.push(b);
}
return a;
}
function list_taxes(ebt,rate,years) {
var a=[]; var b;
for(i=0;i<years;i++) {
b=ebt[i]*rate;
b=parseInt(b);
a.push(b);
}
return a;
}
function primator(x,y) {
var a=[]; var n=x.length; var p=x[0].length; var b=0;
for(i=0;i<p;i++) {
b=0;
for(j=0;j<n;j++) {
b=b+(x[j][i]*y[j][i]);
b=parseInt(b);
}
a.push(b);
b=0;
}
return a;
}
function calc_npv(netflows,startup,interest,years) {
var a; var b; var c; var d=0;
for(i=0;i<years;i++) {
b=netflows[i]; c=1+interest; c=Math.pow(c,i); b=b/c; d=d+b;
}
a=d-startup; a=parseInt(a);
return a;
}
function calc_payback(netflows,startup,years) {
var a=startup; var b; var c=0;
for(i=0;i<years;i++) {
b=netflows[i]/a;
if(b<=1) {c=c+1; a=a-netflows[i]; continue;}
if(b>1) {c=c+(a/netflows[i]);}
}
c=c.toFixed(2);
return c;
}