import React from 'react';
import {ProfileSetting} from "../components/ProfileSetting.component";
import {
    StyleSheet,
    View
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from 'react-native-ui-kitten/theme';
import {textStyle} from "../components/common/style";
import {Button, Text} from 'react-native-ui-kitten/ui';
import {ContainerView} from "../components/common/ContainerView.component";

import Api from '../helpers/api';

interface ComponentProps {
    onUploadPhotoButtonPress: () => void;
    onButtonPress: () => void;
}

export type HomeScreenProps = ThemedComponentProps & ComponentProps;

class HomeScreenComponent extends React.Component<HomeScreenProps> {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                fullName: null,
                age: null,
                gender: null,
                weight: null,
                height: null,
                email: null,
                phone: null,
                medicalInfo: null
            }
        };
    }

    async componentDidMount(): void {
        const api = new Api;
        let profile = await api.getProfile();
        this.setState((state) => {
            state.profile = profile;
            return state;
        })
    }

    onChangeName = (name) => {
        this.setState((state) => {
            state.name = name;
            return state;
        })
    };

    render(): React.ReactNode {
        const {themedStyle} = this.props;
        let profile = this.state.profile;
        return (
            <ContainerView style={themedStyle.container}>
                <View style={themedStyle.photoSection}>

                </View>
                <View style={themedStyle.infoSection}>
                    <ProfileSetting
                        style={themedStyle.profileSetting}
                        hint='Họ tên'
                        value={profile.fullName}
                    />
                    <ProfileSetting
                        style={themedStyle.profileSetting}
                        hint='Giới tính'
                        value={profile.gender}
                    />
                    <ProfileSetting
                        style={themedStyle.profileSetting}
                        hint='Năm sinh'
                        value={`${profile.birthYear}`}
                    />
                    <ProfileSetting
                        style={themedStyle.profileSetting}
                        hint='Cân nặng'
                        value={`${profile.weight} kg`}
                    />
                    <ProfileSetting
                        style={themedStyle.profileSetting}
                        hint='Chiều cao'
                        value={`${profile.height} cm`}
                    />
                </View>
                <View style={themedStyle.contactSection}>
                    <ProfileSetting
                        style={themedStyle.profileSetting}
                        hint='Email'
                        value={profile.email}
                    />
                    <ProfileSetting
                        style={themedStyle.profileSetting}
                        hint='Số ĐT'
                        value={profile.phone}
                    />
                </View>
                <View style={themedStyle.medicalSection}>
                    <Text appearance='hint' style={textStyle.hintLabel}>Bệnh sử</Text>
                    <Text>
                        {profile.medicalInfo}
                    </Text>
                </View>
                <Button
                    style={themedStyle.button}
                    textStyle={textStyle.button}
                    size='large'
                    onPress={() => this.props.navigation.navigate('Profile')}
                >
                    Thay đổi thông tin
                </Button>
            </ContainerView>
        );
    }
}

HomeScreenComponent.navigationOptions = {
    // header: null,
    title: 'Thông tin cá nhân'
};

export const HomeScreen = withStyles(HomeScreenComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-2'],
    },
    photoSection: {
        marginVertical: 40,
    },
    infoSection: {
        marginTop: 24,
        backgroundColor: theme['background-basic-color-1'],
    },
    contactSection: {
        marginTop: 24,
        backgroundColor: theme['background-basic-color-1'],
    },
    profileSetting: {
        borderBottomWidth: 1,
        borderBottomColor: theme['border-basic-color-2'],
    },
    photo: {
        width: 124,
        height: 124,
        alignSelf: 'center',
    },
    photoButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        transform: [{translateY: 82}],
        borderColor: theme['border-basic-color-4'],
        backgroundColor: theme['background-basic-color-4'],
    },
    medicalSection: {
        marginTop: 24,
        backgroundColor: theme['background-basic-color-1'],
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    button: {
        marginHorizontal: 24,
        marginVertical: 24,
    },
}));
