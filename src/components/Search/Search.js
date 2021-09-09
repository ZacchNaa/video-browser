import React, { useEffect, useState } from 'react'
import axios from "axios";

// ?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=
const Search = () => {
    // state
    const [term, setTerm] = useState('reactjs')
    const [results, setResults] = useState([])


    // api call in useEffect
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action:'query',
                    list:'search',
                    prop:'info',
                    inprop:'url',
                    utf8:'',
                    format:'json',
                    origin:'*',
                    srsearch:term,
                }
            })

            // update state
            setResults(data.query.search)
        }
       
        // handling initial render
        if (term && !results.length) {
            search()
        } else {            
            /**
             * making efficient code
             * preventing api request on every onChange event on the input field
             * using setTimeout (it returns an id)
             * 
             */
            const timeOutId = setTimeout(() => {
            term && search(); //run only if there is a term           
            }, 500)
    
            // cleanUp work
            return () => {
                clearTimeout(timeOutId)
            }
        }
    }, [term, results.length])

    // mapping results
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" rel="noreferrer" className="ui button">Go</a>
                        </div>
						<div className="content">
							<div className="header">{result.title}</div>
							{/* renders stringified html tags from the api response,
                             (result.snippet) as normal html.
                             NOTE: this is secure though. only use if really trust source api  */}
							<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
						</div>
					</div>
				);
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <input value={term} onChange={e=>setTerm(e.target.value)} type="text" className="input" placeholder="Enter Search Term" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search
