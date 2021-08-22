// gelen verinin tipini belirleyebiliriz.
import PropTypes from "prop-types";

function User(props) {
    return (
        <h1>
            {props.name}
        </h1>
    )
}

//gelen name'i string olarak kabul ediyorum.
User.propTypes = {
    // isRequired => kesin olarak name ' i string olarak göndermeli. null dahi gönderemez.(undefined)
    name: PropTypes.string.isRequired,
    // oneOfType => gelecek olan age string de number de olabilir. İkisini de kabul edebilirsin.
    age: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default User;