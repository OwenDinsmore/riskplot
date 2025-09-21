---
layout: default
title: RiskPlot Documentation
description: Professional risk visualization for Python
---

# RiskPlot

RiskPlot is a production-ready Python package designed for financial risk analysis and visualization. Built for risk managers, quantitative analysts, and financial researchers who need clear, accurate, and publication-quality charts.


## Quick Start

```bash
pip install riskplot
```

```python
import riskplot
import pandas as pd
import numpy as np

# Create sample data
data = pd.DataFrame({
    'category': ['A', 'B', 'C', 'D'],
    'values': np.random.normal(0, 1, 4)
})

# Create a ridge plot
fig, ax = riskplot.ridge_plot(data, 'category', 'values')
```

## Features

### Core Visualizations
- **Ridge Plots**: Distribution comparisons across categories
- **Heatmaps**: Correlation matrices and risk matrices
- **Waterfall Charts**: Risk attribution and P&L analysis
- **Time Series**: VaR tracking and drawdown analysis

### Advanced Visualizations
- **Network Plots**: Interaction networks between entities
- **Globe Visualizations**: Geographic risk distributions
- **Surface Plots**: 2D/3D risk landscapes

## 🎯 Use Cases

- **Financial Risk Management**: Portfolio risk analysis, VaR calculations
- **Country Risk Analysis**: Geographic risk assessment
- **Network Analysis**: Financial interconnectedness, trade relationships
- **Stress Testing**: Scenario analysis and surface optimization

## Visualization Gallery

### Distribution Analysis
![Ridge Plot Example](assets/images/ridge_plot_example.png)
*Compare return distributions across multiple portfolios*

### Correlation Analysis
![Heatmap Example](assets/images/heatmap_example.png)
*Portfolio correlation matrices with clear visual indicators*

### Attribution Analysis
![Waterfall Chart Example](assets/images/waterfall_example.png)
*Return attribution across risk factors*

### Risk Monitoring
![Time Series Example](assets/images/timeseries_example.png)
*Value-at-Risk and volatility tracking over time*

### Risk Assessment
![Risk Matrix Example](assets/images/risk_matrix_example.png)
*Probability vs impact risk assessment matrix*

### Performance Analysis
![Drawdown Example](assets/images/drawdown_example.png)
*Portfolio drawdown analysis and high water marks*

### Geographic Risk
![Country Risk Example](assets/images/country_risk_example.png)
*Country-level risk assessment and scoring*

## Installation

```bash
pip install riskplot
```

For specialized visualizations:
```bash
# Network analysis features
pip install riskplot[network]

# Interactive globe charts
pip install riskplot[globe]

# Complete feature set
pip install riskplot[all]
```

## 📚 Documentation

- [Getting Started Guide](guides/getting-started)
- [API Reference](api/)
- [Examples Gallery](examples/)
- [Advanced Features](guides/advanced-features)

## Contributing

Contributions are welcome. Please see our [Contributing Guide](https://github.com/OwenDinsmore/riskplot/blob/main/CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](https://github.com/OwenDinsmore/riskplot/blob/main/LICENSE) for details.

## Links

- [GitHub Repository](https://github.com/OwenDinsmore/riskplot)
- [PyPI Package](https://pypi.org/project/riskplot/)
- [Issue Tracker](https://github.com/OwenDinsmore/riskplot/issues)