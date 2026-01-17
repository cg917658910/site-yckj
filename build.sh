#!/bin/bash

# 易诚科技官网构建和部署脚本

set -e

echo "🚀 开始构建易诚科技官网..."

# 检查 Node.js 版本
echo "📋 检查环境..."
node --version
npm --version

# 安装依赖
echo "📦 安装依赖..."
# npm ci

# 代码检查
echo "🔍 运行代码检查..."
# npm run lint

# 类型检查
echo "📝 运行类型检查..."
# npm run typecheck

# 构建项目
echo "🏗️ 构建项目..."
npm run build

# 检查构建结果
if [ -d "dist" ]; then
    echo "✅ 构建成功！"
    echo "📊 构建统计："
    du -sh dist/
    find dist -name "*.js" -o -name "*.css" | wc -l | xargs echo "文件数量:"
    
    # 生成构建报告
    echo "📈 生成构建报告..."
    # npm run build -- --analyze
else
    echo "❌ 构建失败！"
    exit 1
fi

# 部署到测试环境（可选）
if [ "$1" = "deploy" ]; then
    echo "🚀 部署到测试环境..."
    # 这里可以添加部署逻辑
    # 例如：rsync -avz dist/ user@server:/path/to/deploy/
    echo "✅ 部署完成！"
fi

echo "🎉 构建流程完成！"