import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text as SvgText } from 'react-native-svg';

const Relatorio = () => {
  const rawData = [
    { categoria: 'Excelente', porcentagem: 30, cor: '#FFD700' },
    { categoria: 'Bom', porcentagem: 25, cor: '#6495ED' },
    { categoria: 'Neutro', porcentagem: 20, cor: '#2ECC71' },
    { categoria: 'Ruim', porcentagem: 15, cor: '#E77C7C' },
    { categoria: 'Péssimo', porcentagem: 10, cor: '#40E0D0' },
  ];

  const pieData = rawData.map((item, index) => ({
    value: item.porcentagem,
    svg: { fill: item.cor },
    key: `pie-${index}`,
    arc: { outerRadius: '100%', cornerRadius: 5 },
    categoria: item.categoria,
  }));

  const Labels = ({ slices }) =>
    slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <SvgText
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={12}
          fontWeight="bold"
        >
          {`${data.value}%`}
        </SvgText>
      );
    });

  return (
    <View style={styles.container}>
      <PieChart
        style={{ height: 220, width: 220 }}
        data={pieData}
        innerRadius={20}
        outerRadius={100}
        labelRadius={110}
      >
        <Labels />
      </PieChart>

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
