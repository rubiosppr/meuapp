import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

const Relatorio = () => {
  const rawData = [
    { categoria: 'Excelente', porcentagem: 30, cor: '#FFD700' },
    { categoria: 'Bom', porcentagem: 25, cor: '#6495ED' },
    { categoria: 'Neutro', porcentagem: 20, cor: '#2ECC71' },
    { categoria: 'Ruim', porcentagem: 15, cor: '#E77C7C' },
    { categoria: 'Péssimo', porcentagem: 10, cor: '#40E0D0' },
  ];

  const radius = 100; // Raio do gráfico
  const centerX = radius;
  const centerY = radius;

  const total = rawData.reduce((sum, item) => sum + item.porcentagem, 0);

  let cumulativeAngle = 0;

  const createPieSlice = (startAngle, sweepAngle, color) => {
    const startRadians = (Math.PI / 180) * startAngle;
    const endRadians = (Math.PI / 180) * (startAngle + sweepAngle);

    const x1 = centerX + radius * Math.cos(startRadians);
    const y1 = centerY + radius * Math.sin(startRadians);

    const x2 = centerX + radius * Math.cos(endRadians);
    const y2 = centerY + radius * Math.sin(endRadians);

    const largeArcFlag = sweepAngle > 180 ? 1 : 0;

    const d = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z',
    ].join(' ');

    return <Path key={startAngle} d={d} fill={color} />;
  };

  const pieSlices = rawData.map((item) => {
    const sweepAngle = (item.porcentagem / total) * 360;
    const slice = createPieSlice(cumulativeAngle, sweepAngle, item.cor);
    cumulativeAngle += sweepAngle;
    return slice;
  });

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        <G>{pieSlices}</G>
      </Svg>

      {/* Legenda */}
      <View style={styles.legend}>
        {rawData.map((item, index) => (
          <View key={index} style={styles.legendRow}>
            <View style={[styles.colorBox, { backgroundColor: item.cor }]} />
            <Text style={styles.legendText}>{item.categoria}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legend: {
    backgroundColor: '#2B1D62',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  colorBox: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 4,
  },
  legendText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Relatorio;
