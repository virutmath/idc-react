import React from 'react';
import {
    StyleProp,
    TextProps,
    TextStyle,
    View,
    ViewProps,
} from 'react-native';

import { Text } from 'react-native-ui-kitten/ui';
import { textStyle } from './common/style';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from 'react-native-ui-kitten/theme';

interface ComponentProps {
    hint?: string;
    value: string;
}

export type ProfileSettingProps = ComponentProps & ViewProps & ThemedComponentProps;
class ProfileSettingComponent extends React.Component<ProfileSettingProps> {
    renderTextElement = (text: string, style: StyleProp<TextStyle>): React.ReactElement<TextProps> => {
        return (
            <Text
                style={style}
                appearance='hint'>
                {text}
            </Text>
        );
    };

    render(): React.ReactNode {
        const { style, themedStyle, hint, value, ...restProps } = this.props;
        const { container, hintLabel, valueLabel } = themedStyle;

        return (
            <View
                {...restProps}
                style={[container, style]}>
                {hint ? this.renderTextElement(hint, hintLabel) : null}
                {this.renderTextElement(value, valueLabel)}
            </View>
        );
    }
}
export const ProfileSetting = withStyles(ProfileSettingComponent, (theme: ThemeType) => ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    hintLabel: textStyle.caption2,
    valueLabel: {
        color: theme['text-basic-color'],
        ...textStyle.caption2,
    },
}));
