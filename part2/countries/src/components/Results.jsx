import PropTypes from 'prop-types';

const Results = ( { countries, showDetails } ) => {
    return (
        <div>

            <h2>Hola resultados</h2>

            { countries.map(element => {
                return (
                    <div style={{display: 'flex', gap: '8px'}} key={element.name.official}>
                        <p>{ element.name.common }</p>
                        <button 
                            onClick={() => showDetails(element.name.common)}
                            style={{ border: '1px solid gray' }}
                        >
                            Show
                        </button>
                    </div>
                )
            }) }
        </div>
    );
};


Results.propTypes = {
    countries: PropTypes.array.isRequired,
    showDetails: PropTypes.func.isRequired
};


export default Results;
