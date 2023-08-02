import PropTypes from 'prop-types'

const FilterCountries = ({ value, handleChange }) => {
    return (
        <form>
            <input type="text" placeholder="Search" value={value} onChange={handleChange}/>
        </form>
    );
}

FilterCountries.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default FilterCountries;
