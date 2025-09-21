---
layout: default
title: RiskPlot - Risk Visualization Made Easy
---

# RiskPlot

A comprehensive Python package for risk analysis visualization, featuring ridge plots, heatmaps, waterfall charts, network diagrams, globe visualizations, and surface plots.

![RiskPlot Logo](assets/logo.png)

## 🚀 Quick Start

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

## ✨ Features

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

## 📊 Visualization Gallery

<div class="gallery">
  <div class="gallery-item">
    <img src="assets/ridge_plot_example.png" alt="Ridge Plot">
    <h3>Ridge Plots</h3>
    <p>Compare distributions across categories</p>
  </div>

  <div class="gallery-item">
    <img src="assets/network_example.png" alt="Network Plot">
    <h3>Network Analysis</h3>
    <p>Visualize entity relationships</p>
  </div>

  <div class="gallery-item">
    <img src="assets/globe_example.png" alt="Globe Visualization">
    <h3>Globe Visualizations</h3>
    <p>Interactive geographic risk mapping</p>
  </div>

  <div class="gallery-item">
    <img src="assets/surface_example.png" alt="Surface Plot">
    <h3>Surface Plots</h3>
    <p>3D risk landscape analysis</p>
  </div>
</div>

## 🔧 Installation Options

### Basic Installation
```bash
pip install riskplot
```

### With Optional Dependencies
```bash
# For network visualizations
pip install riskplot[network]

# For globe visualizations
pip install riskplot[globe]

# For all features
pip install riskplot[all]
```

## 📚 Documentation

- [Getting Started Guide](guides/getting-started)
- [API Reference](api/)
- [Examples Gallery](examples/)
- [Advanced Features](guides/advanced-features)

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](https://github.com/yourusername/riskplot/blob/main/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/yourusername/riskplot/blob/main/LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/yourusername/riskplot)
- [PyPI Package](https://pypi.org/project/riskplot/)
- [Issue Tracker](https://github.com/yourusername/riskplot/issues)
- [Discussions](https://github.com/yourusername/riskplot/discussions)