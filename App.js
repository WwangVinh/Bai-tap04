import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ColorChanger = () => {
    // State để lưu trữ màu nền của component cha
    const [backgroundColor, setBackgroundColor] = useState('green'); // Màu mặc định là 'green'

    // Hàm để thay đổi màu nền dựa trên nút được bấm
    const changeBackgroundColor = (color) => {
        setBackgroundColor(color);
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'green' }]}
                onPress={() => changeBackgroundColor('green')}
            >
                <Text style={styles.buttonText}>GREEN</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'blue' }]}
                onPress={() => changeBackgroundColor('blue')}
            >
                <Text style={styles.buttonText}>BLUE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'brown' }]}
                onPress={() => changeBackgroundColor('brown')}
            >
                <Text style={styles.buttonText}>BROWN</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'yellow' }]}
                onPress={() => changeBackgroundColor('yellow')}
            >
                <Text style={styles.buttonText}>YELLOW</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'red' }]}
                onPress={() => changeBackgroundColor('red')}
            >
                <Text style={styles.buttonText}>RED</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'black' }]}
                onPress={() => changeBackgroundColor('black')}
            >
                <Text style={styles.buttonText}>BLACK</Text>
            </TouchableOpacity>
        </View>
    );
};

// Các styles cho layout
const styles = StyleSheet.create({
    container: {
        flex: 1, // Chiếm toàn bộ màn hình
        justifyContent: 'center', // Canh giữa theo trục dọc
        alignItems: 'center', // Canh giữa theo trục ngang
    },
    button: {
        width: 300, // Độ rộng của button
        height: 50, // Chiều cao của button
        margin: 10, // Khoảng cách giữa các button
        justifyContent: 'center', // Canh giữa nội dung theo trục dọc
        alignItems: 'center', // Canh giữa nội dung theo trục ngang
    },
    buttonText: {
        color: 'white', // Màu chữ
        fontWeight: 'bold', // In đậm chữ
    },
});

export default ColorChanger;
