import React from 'react';
import {
    Picker,
    StyleSheet,
    View,
    TextInput,
    KeyboardAvoidingView, ScrollView
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from 'react-native-ui-kitten/theme';
import Api from '../helpers/api';
import {styles, textStyle} from "../components/common/style";
import {Button, Input, Radio, RadioGroup, Text} from 'react-native-ui-kitten/ui';
import {ContainerView} from "../components/common/ContainerView.component";
import Profile from '../models/Profile';

interface ComponentProps {
    onUploadPhotoButtonPress: () => void;
    onButtonPress: () => void;
}

export type ProfileUpdateScreenProps = ThemedComponentProps & ComponentProps;

class ProfileUpdateScreenComponent extends React.Component<ProfileUpdateScreenProps> {
    constructor(props) {
        super(props);
        this.state = {
            profile: Profile,
        };
        this.genders = ['m', 'f', 'n'];
        this.selectedGender = 0;
    }

    async componentDidMount(): void {
        const api = new Api;
        let _this = this;
        let profile = await api.getProfile();
        this.setState((state) => {
            state.profile = profile;
            _this.selectedGender = _this.genders.indexOf(profile.genderCode);
            return state;
        });

    }

    onChangeGender = (selectedGender) => {
        let _this = this;
        _this.selectedGender = selectedGender;
        _this.setState((state) => {
            state.profile.genderCode = _this.genders[selectedGender];
            return state;
        });
        _this.weightInput.focus();
    };

    render(): React.ReactNode {
        const {themedStyle} = this.props;
        let profile = this.state.profile;
        return (
            <KeyboardAvoidingView behavior={"padding"} style={styles.form}>
                <ScrollView style={themedStyle.container}>
                    <View style={styles.rowInput}>
                        <Text style={textStyle.caption2}>Họ tên</Text>
                        <TextInput
                            autoFocus={true}
                            ref={ref => this.nameInput = ref}
                            placeholder="Nhập họ tên đầy đủ"
                            style={styles.inputNoLine}
                            value={profile.fullName}
                            autoCapitalize="words"
                            autoCorrect={true}
                            returnKeyType={"next"}
                            onSubmitEditing={() => this.birthYearInput.focus()}
                        />
                    </View>
                    <View style={styles.rowInput}>
                        <Text style={textStyle.caption2}>Năm sinh</Text>
                        <TextInput
                            ref={ref => this.birthYearInput = ref}
                            placeholder="VD: 1989"
                            keyboardType='numeric'
                            style={styles.inputNoLine}
                            value={`${profile.birthYear}`}
                            autoCapitalize="none"
                            returnKeyType={"next"}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.rowInput}>
                        <Text style={textStyle.caption2}>Giới tính</Text>
                        <Picker style={styles.picker}
                                onValueChange={this.onChangeGender}
                                selectedValue={this.selectedGender}>
                            <Picker.Item label="Nam" value="m"/>
                            <Picker.Item label="Nữ" value="f"/>
                            <Picker.Item label="Khác" value="n"/>
                        </Picker>
                    </View>
                    <View style={styles.rowInput}>
                        <Text style={textStyle.caption2}>Cân nặng (kg)</Text>
                        <TextInput
                            ref={ref => this.weightInput = ref}
                            placeholder="...kg"
                            keyboardType='numeric'
                            style={styles.inputNoLine}
                            value={`${profile.weight}`}
                            onSubmitEditing={() => this.heightInput.focus()}
                            autoCapitalize="none"
                            returnKeyType={"next"}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.rowInput}>
                        <Text style={textStyle.caption2}>Chiều cao (cm)</Text>
                        <TextInput
                            ref={ref => this.heightInput = ref}
                            placeholder="...cm"
                            keyboardType='numeric'
                            style={styles.inputNoLine}
                            value={`${profile.height}`}
                            onSubmitEditing={() => this.emailInput.focus()}
                            autoCapitalize="none"
                            returnKeyType={"next"}
                            autoCorrect={false}
                        />
                    </View>
                    <View style={styles.rowInput}>
                        <Text style={textStyle.caption2}>Email</Text>
                        <TextInput
                            ref={ref => this.emailInput = ref}
                            placeholder="abc@example.com"
                            style={styles.inputNoLine}
                            value={profile.email}
                            autoCapitalize="none"
                            returnKeyType={"next"}
                            autoCorrect={false}
                            onSubmitEditing={() => this.phoneInput.focus()}
                        />
                    </View>
                    <View style={styles.rowInput}>
                        <Text style={textStyle.caption2}>Số ĐT</Text>
                        <TextInput
                            ref={ref => this.phoneInput = ref}
                            placeholder="01234567890"
                            style={styles.inputNoLine}
                            value={profile.phone}
                            autoCapitalize="none"
                            returnKeyType={"next"}
                            autoCorrect={false}
                            onSubmitEditing={() => this.infoInput.focus()}
                        />
                    </View>
                    <View style={styles.rowInput}>
                        <TextInput
                            ref={ref => this.infoInput = ref}
                            placeholder="Thông tin, tiền sử bệnh"
                            style={styles.inputNoLine}
                            value={profile.medicalInfo}
                            multiline={true}
                            numberOfLines={5}
                            returnKeyType={"send"}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                </ScrollView>
                <Button
                    style={themedStyle.button}
                    textStyle={textStyle.button}
                    size='large'
                    onPress={() => this.props.navigation.navigate('Links')}>
                    Lưu lại
                </Button>
            </KeyboardAvoidingView>
        );
    }
}

ProfileUpdateScreenComponent.navigationOptions = {
    // header: null,
    title: 'Cập nhật thông tin cá nhân'
};

export const ProfileUpdateScreen = withStyles(ProfileUpdateScreenComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
    },
    button: {
        marginHorizontal: 24,
        marginVertical: 24,
    },
}));

