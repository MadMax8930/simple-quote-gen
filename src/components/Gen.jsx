import React, {useState} from 'react';
import '../index.css';



const quotes = [
    "Etre libre, ce n'est pas pouvoir faire ce que l'on veut, mais c'est vouloir ce que l'on peut",
    "Mes amis, il n'y a pas d'amis !",
    "Le coeur a ses raisons que la raison ne connaît pas.",
    "Ma vie n'est rien. Ce qui compte, ce sont les raisons de ma vie. Je ne suis pas un chien.",
    "Soyez grands par les faits, et simples en paroles.",
    "Le meilleur compagnon contre l'ennui est un bon livre.", 
    "Il n'y a de grand que ce qui est durable, de durable que ce qui est juste.",
    "Il vaut mieux tomber avec des hommes que de rester debout avec des enfants.",
    "Les faux amis sont des oiseaux de passage qui viennent à la belle saison, et s'en vont à la mauvaise.", 
    "Examinez-vous vous-même, plutôt que de juger les autres.", 
    "Le moyen le plus prompt de repousser l'injure est l'oubli.", 
    "Un bon cœur ne peut se résigner aux maux qu'il cause.", 
    "Celui qui se plaît, plaît rarement aux autres.", 
    "Qui ne sait pas se taire ne fera jamais rien de grand.",
    "N'attendez aucune pitié de celui qui ne s'apitoie pas sur lui-même.",
    "Bien mal acquis s'en va de même.", 
    "L'amitié ne peut subsister sans l'estime.", 
    "Il faut vivre avec les gens pour apprendre à les connaître.", 
    "Ceux qui paraissent heureux, n'ont que le paraître.", 
    "Tel que le ver luisant, plus un homme reste dans l'obscurité, plus son esprit brille.", 
    "Rire et pleurer sans savoir pourquoi, c'est le privilège des femmes.", 
    "Un sot a toujours assez d'esprit pour nuire.", 
    "La vanité se pare de ses fers lorsqu'ils sont dorés.", 
    "Craignez celui qui vous craint.", 
    "Se vanter de sa félicité, c'est appeler le malheur.",
    "Le travail est le dieu qui donne le repos.",
    "En sortant de la demeure du médisant, secouez la poussière de vos pieds.", 
    "Le bonheur a besoin d'être interrompu pour être senti.", 
    "L'or, comme les liqueurs fortes, augmente la soif.",
    "L'injustice à la fin produit l'indépendance.", 
    "Pour bien goûter le bonheur, il faut avoir été malheureux."
]

function Gen() {
    // STATE VAR
    const[quote, setQuote] = useState(quotes[0]); //initialise le state


    function randomQuote() {
        const randomQ = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(randomQ)
    }

    return (
        <div className="container">

            <div className="row flex-top justify-content-center">
                <header class="border shadow">
                   <h1>Quote Generator</h1>
                </header>
            </div> 

            <div className="row flex-top justify-content-center">
                <button onClick={randomQuote} className="btn-large new-quote-button">Click Me</button>
            </div>

            <div className="row justify-content-center">
                <main className="card">
                    <p className="quote card-body center">{quote}</p>
                </main>
            </div>

        </div>
    )
}

export default Gen