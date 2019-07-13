import {theme} from "../../theme";

export const textStyle = {
    headline: {
        fontFamily: 'opensans-bold',
        fontWeight: 'normal',
    },
    subtitle: {
        fontFamily: 'opensans-semibold',
        fontWeight: 'normal',
    },
    paragraph: {
        fontFamily: 'opensans-regular',
        fontWeight: 'normal',
    },
    caption1: {
        fontFamily: 'opensans-regular',
        fontWeight: 'normal',
    },
    caption2: {
        fontFamily: 'opensans-semibold',
        fontWeight: 'normal',
    },
    label: {
        fontFamily: 'opensans-bold',
        fontWeight: 'normal',
    },
    hintLabel: {
        fontFamily: 'opensans-semibold',
        fontWeight: 'normal',
    },
    button: {
        // fontFamily: 'opensans-extrabold',
        // fontWeight: 'normal',
    },
};
export const styles = {
    input: {
        fontFamily: 'opensans-regular',
        fontSize:14,
    },
    inputLabel: {
        fontFamily: 'opensans-semibold',
        fontSize:14,
        color: theme['color-label-input']
    },
    rowInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme['border-row'],
    },
    commonRow: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: theme['border-row']
    },
    picker: {
        width: 105,
    },
    inputNoLine: {
        fontFamily: 'opensans-regular',
        fontSize:14,
        borderWidth: 0,
        backgroundColor: '#fff'
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
    }
};
