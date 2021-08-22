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
    name: PropTypes.string.isRequired
    // isRequired => kesin olarak name ' i string olarak göndermeli. null dahi gönderemez.(undefined)
};

export default User;