var Quotes =[ {
    quote:"Be yourself; everyone else is already taken.",
    author:"― Oscar Wilde"
},
{
    quote:"A room without books is like a body without a soul.",
    author:"― Marcus Tullius Cicero"
},
{
    quote:"You only live once, but if you do it right, once is enough.",
    author:"― Mae West"
},
{
    quote:"In three words I can sum up everything I've learned about life: it goes on.",
    author:"― Oscar Wilde"
},
{
    quote:"A room without books is like a body without a soul.",
    author:"― Robert Frost"
},
{
    quote:"If you tell the truth, you don't have to remember anything.",
    author:"― Mark Twain"
},
{
    quote:"A friend is someone who knows all about you and still loves you.",
    author:"― Elbert Hubbard"
},
{
    quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    author:"― Oscar Wilde"
},
{
    quote:"Always forgive your enemies; nothing annoys them so much.",
    author:"― Oscar Wilde"
}
]
var x = 0
var quotee = 0


function showAndChange(){
    quotee = Math.floor(Math.random() * 9)
    if (quotee == x) {
        
        quotee++
    }
    document.getElementById('Quote1').innerHTML= Quotes[quotee].quote
    document.getElementById('Quote2').innerHTML= Quotes[quotee].author
    x = quotee

}
