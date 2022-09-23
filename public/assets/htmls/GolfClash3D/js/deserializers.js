var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.JointSpring' )
  var i1699 = data
  i1698.spring = i1699[0]
  i1698.damper = i1699[1]
  i1698.targetPosition = i1699[2]
  return i1698
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.JointMotor' )
  var i1701 = data
  i1700.m_TargetVelocity = i1701[0]
  i1700.m_Force = i1701[1]
  i1700.m_FreeSpin = i1701[2]
  return i1700
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.JointLimits' )
  var i1703 = data
  i1702.m_Min = i1703[0]
  i1702.m_Max = i1703[1]
  i1702.m_Bounciness = i1703[2]
  i1702.m_BounceMinVelocity = i1703[3]
  i1702.m_ContactDistance = i1703[4]
  i1702.minBounce = i1703[5]
  i1702.maxBounce = i1703[6]
  return i1702
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.JointDrive' )
  var i1705 = data
  i1704.m_PositionSpring = i1705[0]
  i1704.m_PositionDamper = i1705[1]
  i1704.m_MaximumForce = i1705[2]
  return i1704
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1707 = data
  i1706.m_Spring = i1707[0]
  i1706.m_Damper = i1707[1]
  return i1706
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1709 = data
  i1708.m_Limit = i1709[0]
  i1708.m_Bounciness = i1709[1]
  i1708.m_ContactDistance = i1709[2]
  return i1708
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1711 = data
  i1710.m_ExtremumSlip = i1711[0]
  i1710.m_ExtremumValue = i1711[1]
  i1710.m_AsymptoteSlip = i1711[2]
  i1710.m_AsymptoteValue = i1711[3]
  i1710.m_Stiffness = i1711[4]
  return i1710
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1713 = data
  i1712.m_LowerAngle = i1713[0]
  i1712.m_UpperAngle = i1713[1]
  return i1712
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1715 = data
  i1714.m_MotorSpeed = i1715[0]
  i1714.m_MaximumMotorTorque = i1715[1]
  return i1714
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1716 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1717 = data
  i1716.m_DampingRatio = i1717[0]
  i1716.m_Frequency = i1717[1]
  i1716.m_Angle = i1717[2]
  return i1716
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1719 = data
  i1718.m_LowerTranslation = i1719[0]
  i1718.m_UpperTranslation = i1719[1]
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1720 = root || new pc.UnityMaterial()
  var i1721 = data
  i1720.name = i1721[0]
  request.r(i1721[1], i1721[2], 0, i1720, 'shader')
  i1720.renderQueue = i1721[3]
  i1720.enableInstancing = !!i1721[4]
  var i1723 = i1721[5]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1723[i + 0]) );
  }
  i1720.floatParameters = i1722
  var i1725 = i1721[6]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1725[i + 0]) );
  }
  i1720.colorParameters = i1724
  var i1727 = i1721[7]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1727[i + 0]) );
  }
  i1720.vectorParameters = i1726
  var i1729 = i1721[8]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1729[i + 0]) );
  }
  i1720.textureParameters = i1728
  var i1731 = i1721[9]
  var i1730 = []
  for(var i = 0; i < i1731.length; i += 1) {
    i1730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1731[i + 0]) );
  }
  i1720.materialFlags = i1730
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1735 = data
  i1734.name = i1735[0]
  i1734.value = i1735[1]
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1739 = data
  i1738.name = i1739[0]
  i1738.value = new pc.Color(i1739[1], i1739[2], i1739[3], i1739[4])
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1743 = data
  i1742.name = i1743[0]
  i1742.value = new pc.Vec4( i1743[1], i1743[2], i1743[3], i1743[4] )
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1747 = data
  i1746.name = i1747[0]
  request.r(i1747[1], i1747[2], 0, i1746, 'value')
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1751 = data
  i1750.name = i1751[0]
  i1750.enabled = !!i1751[1]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1753 = data
  i1752.name = i1753[0]
  i1752.width = i1753[1]
  i1752.height = i1753[2]
  i1752.mipmapCount = i1753[3]
  i1752.anisoLevel = i1753[4]
  i1752.filterMode = i1753[5]
  i1752.hdr = !!i1753[6]
  i1752.format = i1753[7]
  i1752.wrapMode = i1753[8]
  i1752.alphaIsTransparency = !!i1753[9]
  i1752.alphaSource = i1753[10]
  return i1752
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1754 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1755 = data
  i1754.hashCode = i1755[0]
  request.r(i1755[1], i1755[2], 0, i1754, 'material')
  i1754.materialHashCode = i1755[3]
  request.r(i1755[4], i1755[5], 0, i1754, 'atlas')
  var i1757 = i1755[6]
  var i1756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1757.length; i += 2) {
  request.r(i1757[i + 0], i1757[i + 1], 1, i1756, '')
  }
  i1754.m_FallbackFontAssetTable = i1756
  i1754.normalStyle = i1755[7]
  i1754.normalSpacingOffset = i1755[8]
  i1754.boldStyle = i1755[9]
  i1754.boldSpacing = i1755[10]
  i1754.italicStyle = i1755[11]
  i1754.tabSize = i1755[12]
  i1754.m_Version = i1755[13]
  i1754.m_SourceFontFileGUID = i1755[14]
  request.r(i1755[15], i1755[16], 0, i1754, 'm_SourceFontFile_EditorRef')
  request.r(i1755[17], i1755[18], 0, i1754, 'm_SourceFontFile')
  i1754.m_AtlasPopulationMode = i1755[19]
  i1754.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1755[20], i1754.m_FaceInfo)
  var i1759 = i1755[21]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.add(request.d('UnityEngine.TextCore.Glyph', i1759[i + 0]));
  }
  i1754.m_GlyphTable = i1758
  var i1761 = i1755[22]
  var i1760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.add(request.d('TMPro.TMP_Character', i1761[i + 0]));
  }
  i1754.m_CharacterTable = i1760
  var i1763 = i1755[23]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 2, i1762, '')
  }
  i1754.m_AtlasTextures = i1762
  i1754.m_AtlasTextureIndex = i1755[24]
  var i1765 = i1755[25]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('UnityEngine.TextCore.GlyphRect', i1765[i + 0]));
  }
  i1754.m_UsedGlyphRects = i1764
  var i1767 = i1755[26]
  var i1766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.add(request.d('UnityEngine.TextCore.GlyphRect', i1767[i + 0]));
  }
  i1754.m_FreeGlyphRects = i1766
  i1754.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1755[27], i1754.m_fontInfo)
  i1754.m_AtlasWidth = i1755[28]
  i1754.m_AtlasHeight = i1755[29]
  i1754.m_AtlasPadding = i1755[30]
  i1754.m_AtlasRenderMode = i1755[31]
  var i1769 = i1755[32]
  var i1768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.add(request.d('TMPro.TMP_Glyph', i1769[i + 0]));
  }
  i1754.m_glyphInfoList = i1768
  i1754.m_KerningTable = request.d('TMPro.KerningTable', i1755[33], i1754.m_KerningTable)
  i1754.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1755[34], i1754.m_FontFeatureTable)
  var i1771 = i1755[35]
  var i1770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1771.length; i += 2) {
  request.r(i1771[i + 0], i1771[i + 1], 1, i1770, '')
  }
  i1754.fallbackFontAssets = i1770
  i1754.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1755[36], i1754.m_CreationSettings)
  var i1773 = i1755[37]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('TMPro.TMP_FontWeightPair', i1773[i + 0]) );
  }
  i1754.m_FontWeightTable = i1772
  var i1775 = i1755[38]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('TMPro.TMP_FontWeightPair', i1775[i + 0]) );
  }
  i1754.fontWeights = i1774
  return i1754
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1779 = data
  i1778.m_FamilyName = i1779[0]
  i1778.m_StyleName = i1779[1]
  i1778.m_PointSize = i1779[2]
  i1778.m_Scale = i1779[3]
  i1778.m_LineHeight = i1779[4]
  i1778.m_AscentLine = i1779[5]
  i1778.m_CapLine = i1779[6]
  i1778.m_MeanLine = i1779[7]
  i1778.m_Baseline = i1779[8]
  i1778.m_DescentLine = i1779[9]
  i1778.m_SuperscriptOffset = i1779[10]
  i1778.m_SuperscriptSize = i1779[11]
  i1778.m_SubscriptOffset = i1779[12]
  i1778.m_SubscriptSize = i1779[13]
  i1778.m_UnderlineOffset = i1779[14]
  i1778.m_UnderlineThickness = i1779[15]
  i1778.m_StrikethroughOffset = i1779[16]
  i1778.m_StrikethroughThickness = i1779[17]
  i1778.m_TabWidth = i1779[18]
  return i1778
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1783 = data
  i1782.m_Index = i1783[0]
  i1782.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1783[1], i1782.m_Metrics)
  i1782.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1783[2], i1782.m_GlyphRect)
  i1782.m_Scale = i1783[3]
  i1782.m_AtlasIndex = i1783[4]
  return i1782
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1785 = data
  i1784.m_Width = i1785[0]
  i1784.m_Height = i1785[1]
  i1784.m_HorizontalBearingX = i1785[2]
  i1784.m_HorizontalBearingY = i1785[3]
  i1784.m_HorizontalAdvance = i1785[4]
  return i1784
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1786 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1787 = data
  i1786.m_X = i1787[0]
  i1786.m_Y = i1787[1]
  i1786.m_Width = i1787[2]
  i1786.m_Height = i1787[3]
  return i1786
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1790 = root || request.c( 'TMPro.TMP_Character' )
  var i1791 = data
  i1790.m_ElementType = i1791[0]
  i1790.m_Unicode = i1791[1]
  i1790.m_GlyphIndex = i1791[2]
  i1790.m_Scale = i1791[3]
  return i1790
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1796 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1797 = data
  i1796.Name = i1797[0]
  i1796.PointSize = i1797[1]
  i1796.Scale = i1797[2]
  i1796.CharacterCount = i1797[3]
  i1796.LineHeight = i1797[4]
  i1796.Baseline = i1797[5]
  i1796.Ascender = i1797[6]
  i1796.CapHeight = i1797[7]
  i1796.Descender = i1797[8]
  i1796.CenterLine = i1797[9]
  i1796.SuperscriptOffset = i1797[10]
  i1796.SubscriptOffset = i1797[11]
  i1796.SubSize = i1797[12]
  i1796.Underline = i1797[13]
  i1796.UnderlineThickness = i1797[14]
  i1796.strikethrough = i1797[15]
  i1796.strikethroughThickness = i1797[16]
  i1796.TabWidth = i1797[17]
  i1796.Padding = i1797[18]
  i1796.AtlasWidth = i1797[19]
  i1796.AtlasHeight = i1797[20]
  return i1796
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1800 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1801 = data
  i1800.id = i1801[0]
  i1800.x = i1801[1]
  i1800.y = i1801[2]
  i1800.width = i1801[3]
  i1800.height = i1801[4]
  i1800.xOffset = i1801[5]
  i1800.yOffset = i1801[6]
  i1800.xAdvance = i1801[7]
  i1800.scale = i1801[8]
  return i1800
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1802 = root || request.c( 'TMPro.KerningTable' )
  var i1803 = data
  var i1805 = i1803[0]
  var i1804 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.add(request.d('TMPro.KerningPair', i1805[i + 0]));
  }
  i1802.kerningPairs = i1804
  return i1802
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1808 = root || request.c( 'TMPro.KerningPair' )
  var i1809 = data
  i1808.xOffset = i1809[0]
  i1808.m_FirstGlyph = i1809[1]
  i1808.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1809[2], i1808.m_FirstGlyphAdjustments)
  i1808.m_SecondGlyph = i1809[3]
  i1808.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1809[4], i1808.m_SecondGlyphAdjustments)
  i1808.m_IgnoreSpacingAdjustments = !!i1809[5]
  return i1808
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1810 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1811 = data
  var i1813 = i1811[0]
  var i1812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1813[i + 0]));
  }
  i1810.m_GlyphPairAdjustmentRecords = i1812
  return i1810
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1816 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1817 = data
  i1816.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1817[0], i1816.m_FirstAdjustmentRecord)
  i1816.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1817[1], i1816.m_SecondAdjustmentRecord)
  i1816.m_FeatureLookupFlags = i1817[2]
  return i1816
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1818 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1819 = data
  i1818.sourceFontFileName = i1819[0]
  i1818.sourceFontFileGUID = i1819[1]
  i1818.pointSizeSamplingMode = i1819[2]
  i1818.pointSize = i1819[3]
  i1818.padding = i1819[4]
  i1818.packingMode = i1819[5]
  i1818.atlasWidth = i1819[6]
  i1818.atlasHeight = i1819[7]
  i1818.characterSetSelectionMode = i1819[8]
  i1818.characterSequence = i1819[9]
  i1818.referencedFontAssetGUID = i1819[10]
  i1818.referencedTextAssetGUID = i1819[11]
  i1818.fontStyle = i1819[12]
  i1818.fontStyleModifier = i1819[13]
  i1818.renderMode = i1819[14]
  i1818.includeFontFeatures = !!i1819[15]
  return i1818
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1822 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'regularTypeface')
  request.r(i1823[2], i1823[3], 0, i1822, 'italicTypeface')
  return i1822
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1824 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1825 = data
  i1824.m_GlyphIndex = i1825[0]
  i1824.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1825[1], i1824.m_GlyphValueRecord)
  return i1824
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1826 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1827 = data
  i1826.m_XPlacement = i1827[0]
  i1826.m_YPlacement = i1827[1]
  i1826.m_XAdvance = i1827[2]
  i1826.m_YAdvance = i1827[3]
  return i1826
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1828 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1829 = data
  i1828.hashCode = i1829[0]
  request.r(i1829[1], i1829[2], 0, i1828, 'material')
  i1828.materialHashCode = i1829[3]
  request.r(i1829[4], i1829[5], 0, i1828, 'spriteSheet')
  var i1831 = i1829[6]
  var i1830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.add(request.d('TMPro.TMP_Sprite', i1831[i + 0]));
  }
  i1828.spriteInfoList = i1830
  var i1833 = i1829[7]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1833.length; i += 2) {
  request.r(i1833[i + 0], i1833[i + 1], 1, i1832, '')
  }
  i1828.fallbackSpriteAssets = i1832
  i1828.m_Version = i1829[8]
  var i1835 = i1829[9]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.add(request.d('TMPro.TMP_SpriteCharacter', i1835[i + 0]));
  }
  i1828.m_SpriteCharacterTable = i1834
  var i1837 = i1829[10]
  var i1836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.add(request.d('TMPro.TMP_SpriteGlyph', i1837[i + 0]));
  }
  i1828.m_SpriteGlyphTable = i1836
  return i1828
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1840 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1841 = data
  i1840.name = i1841[0]
  i1840.hashCode = i1841[1]
  i1840.unicode = i1841[2]
  i1840.pivot = new pc.Vec2( i1841[3], i1841[4] )
  request.r(i1841[5], i1841[6], 0, i1840, 'sprite')
  i1840.id = i1841[7]
  i1840.x = i1841[8]
  i1840.y = i1841[9]
  i1840.width = i1841[10]
  i1840.height = i1841[11]
  i1840.xOffset = i1841[12]
  i1840.yOffset = i1841[13]
  i1840.xAdvance = i1841[14]
  i1840.scale = i1841[15]
  return i1840
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1846 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1847 = data
  i1846.m_Name = i1847[0]
  i1846.m_HashCode = i1847[1]
  i1846.m_ElementType = i1847[2]
  i1846.m_Unicode = i1847[3]
  i1846.m_GlyphIndex = i1847[4]
  i1846.m_Scale = i1847[5]
  return i1846
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1850 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1851 = data
  request.r(i1851[0], i1851[1], 0, i1850, 'sprite')
  i1850.m_Index = i1851[2]
  i1850.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1851[3], i1850.m_Metrics)
  i1850.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1851[4], i1850.m_GlyphRect)
  i1850.m_Scale = i1851[5]
  i1850.m_AtlasIndex = i1851[6]
  return i1850
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1852 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1853 = data
  var i1855 = i1853[0]
  var i1854 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.add(request.d('TMPro.TMP_Style', i1855[i + 0]));
  }
  i1852.m_StyleList = i1854
  return i1852
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1858 = root || request.c( 'TMPro.TMP_Style' )
  var i1859 = data
  i1858.m_Name = i1859[0]
  i1858.m_HashCode = i1859[1]
  i1858.m_OpeningDefinition = i1859[2]
  i1858.m_ClosingDefinition = i1859[3]
  i1858.m_OpeningTagArray = i1859[4]
  i1858.m_ClosingTagArray = i1859[5]
  return i1858
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1860 = root || request.c( 'TMPro.TMP_Settings' )
  var i1861 = data
  i1860.m_enableWordWrapping = !!i1861[0]
  i1860.m_enableKerning = !!i1861[1]
  i1860.m_enableExtraPadding = !!i1861[2]
  i1860.m_enableTintAllSprites = !!i1861[3]
  i1860.m_enableParseEscapeCharacters = !!i1861[4]
  i1860.m_EnableRaycastTarget = !!i1861[5]
  i1860.m_GetFontFeaturesAtRuntime = !!i1861[6]
  i1860.m_missingGlyphCharacter = i1861[7]
  i1860.m_warningsDisabled = !!i1861[8]
  request.r(i1861[9], i1861[10], 0, i1860, 'm_defaultFontAsset')
  i1860.m_defaultFontAssetPath = i1861[11]
  i1860.m_defaultFontSize = i1861[12]
  i1860.m_defaultAutoSizeMinRatio = i1861[13]
  i1860.m_defaultAutoSizeMaxRatio = i1861[14]
  i1860.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1861[15], i1861[16] )
  i1860.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1861[17], i1861[18] )
  i1860.m_autoSizeTextContainer = !!i1861[19]
  var i1863 = i1861[20]
  var i1862 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1863.length; i += 2) {
  request.r(i1863[i + 0], i1863[i + 1], 1, i1862, '')
  }
  i1860.m_fallbackFontAssets = i1862
  i1860.m_matchMaterialPreset = !!i1861[21]
  request.r(i1861[22], i1861[23], 0, i1860, 'm_defaultSpriteAsset')
  i1860.m_defaultSpriteAssetPath = i1861[24]
  i1860.m_defaultColorGradientPresetsPath = i1861[25]
  i1860.m_enableEmojiSupport = !!i1861[26]
  request.r(i1861[27], i1861[28], 0, i1860, 'm_defaultStyleSheet')
  request.r(i1861[29], i1861[30], 0, i1860, 'm_leadingCharacters')
  request.r(i1861[31], i1861[32], 0, i1860, 'm_followingCharacters')
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1865 = data
  i1864.position = new pc.Vec3( i1865[0], i1865[1], i1865[2] )
  i1864.scale = new pc.Vec3( i1865[3], i1865[4], i1865[5] )
  i1864.rotation = new pc.Quat(i1865[6], i1865[7], i1865[8], i1865[9])
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'sharedMesh')
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1869 = data
  request.r(i1869[0], i1869[1], 0, i1868, 'additionalVertexStreams')
  i1868.enabled = !!i1869[2]
  request.r(i1869[3], i1869[4], 0, i1868, 'sharedMaterial')
  var i1871 = i1869[5]
  var i1870 = []
  for(var i = 0; i < i1871.length; i += 2) {
  request.r(i1871[i + 0], i1871[i + 1], 2, i1870, '')
  }
  i1868.sharedMaterials = i1870
  i1868.receiveShadows = !!i1869[6]
  i1868.shadowCastingMode = i1869[7]
  i1868.sortingLayerID = i1869[8]
  i1868.sortingOrder = i1869[9]
  i1868.lightmapIndex = i1869[10]
  i1868.lightmapSceneIndex = i1869[11]
  i1868.lightmapScaleOffset = new pc.Vec4( i1869[12], i1869[13], i1869[14], i1869[15] )
  i1868.lightProbeUsage = i1869[16]
  i1868.reflectionProbeUsage = i1869[17]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1875 = data
  i1874.name = i1875[0]
  i1874.tag = i1875[1]
  i1874.enabled = !!i1875[2]
  i1874.isStatic = !!i1875[3]
  i1874.layer = i1875[4]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1877 = data
  i1876.name = i1877[0]
  i1876.halfPrecision = !!i1877[1]
  i1876.vertexCount = i1877[2]
  i1876.aabb = i1877[3]
  var i1879 = i1877[4]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( !!i1879[i + 0] );
  }
  i1876.streams = i1878
  i1876.vertices = i1877[5]
  var i1881 = i1877[6]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1881[i + 0]) );
  }
  i1876.subMeshes = i1880
  var i1883 = i1877[7]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 16) {
    i1882.push( new pc.Mat4().setData(i1883[i + 0], i1883[i + 1], i1883[i + 2], i1883[i + 3],  i1883[i + 4], i1883[i + 5], i1883[i + 6], i1883[i + 7],  i1883[i + 8], i1883[i + 9], i1883[i + 10], i1883[i + 11],  i1883[i + 12], i1883[i + 13], i1883[i + 14], i1883[i + 15]) );
  }
  i1876.bindposes = i1882
  var i1885 = i1877[8]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1885[i + 0]) );
  }
  i1876.blendShapes = i1884
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1891 = data
  i1890.triangles = i1891[0]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1897 = data
  i1896.name = i1897[0]
  var i1899 = i1897[1]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1899[i + 0]) );
  }
  i1896.frames = i1898
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1901 = data
  i1900.enabled = !!i1901[0]
  request.r(i1901[1], i1901[2], 0, i1900, 'sharedMaterial')
  var i1903 = i1901[3]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 2) {
  request.r(i1903[i + 0], i1903[i + 1], 2, i1902, '')
  }
  i1900.sharedMaterials = i1902
  i1900.receiveShadows = !!i1901[4]
  i1900.shadowCastingMode = i1901[5]
  i1900.sortingLayerID = i1901[6]
  i1900.sortingOrder = i1901[7]
  i1900.lightmapIndex = i1901[8]
  i1900.lightmapSceneIndex = i1901[9]
  i1900.lightmapScaleOffset = new pc.Vec4( i1901[10], i1901[11], i1901[12], i1901[13] )
  i1900.lightProbeUsage = i1901[14]
  i1900.reflectionProbeUsage = i1901[15]
  request.r(i1901[16], i1901[17], 0, i1900, 'sharedMesh')
  var i1905 = i1901[18]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 2) {
  request.r(i1905[i + 0], i1905[i + 1], 2, i1904, '')
  }
  i1900.bones = i1904
  i1900.updateWhenOffscreen = !!i1901[19]
  i1900.localBounds = i1901[20]
  request.r(i1901[21], i1901[22], 0, i1900, 'rootBone')
  var i1907 = i1901[23]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1907[i + 0]) );
  }
  i1900.blendShapesWeights = i1906
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1913 = data
  i1912.weight = i1913[0]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'animatorController')
  i1914.updateMode = i1915[2]
  var i1917 = i1915[3]
  var i1916 = []
  for(var i = 0; i < i1917.length; i += 2) {
  request.r(i1917[i + 0], i1917[i + 1], 2, i1916, '')
  }
  i1914.humanBones = i1916
  i1914.enabled = !!i1915[4]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1921 = data
  i1920.weight = i1921[0]
  i1920.vertices = i1921[1]
  i1920.normals = i1921[2]
  i1920.tangents = i1921[3]
  return i1920
}

Deserializers["oilAnimFix"] = function (request, data, root) {
  var i1922 = root || request.c( 'oilAnimFix' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'ball')
  request.r(i1923[2], i1923[3], 0, i1922, 'derrick')
  request.r(i1923[4], i1923[5], 0, i1922, 'derrickReplacePrefab')
  request.r(i1923[6], i1923[7], 0, i1922, 'particleOil')
  request.r(i1923[8], i1923[9], 0, i1922, 'particleOilDrop')
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1925 = data
  i1924.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1925[0], i1924.main)
  i1924.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1925[1], i1924.colorBySpeed)
  i1924.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1925[2], i1924.colorOverLifetime)
  i1924.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1925[3], i1924.emission)
  i1924.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1925[4], i1924.rotationBySpeed)
  i1924.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1925[5], i1924.rotationOverLifetime)
  i1924.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1925[6], i1924.shape)
  i1924.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1925[7], i1924.sizeBySpeed)
  i1924.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1925[8], i1924.sizeOverLifetime)
  i1924.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1925[9], i1924.textureSheetAnimation)
  i1924.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1925[10], i1924.velocityOverLifetime)
  i1924.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1925[11], i1924.noise)
  i1924.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1925[12], i1924.inheritVelocity)
  i1924.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1925[13], i1924.forceOverLifetime)
  i1924.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1925[14], i1924.limitVelocityOverLifetime)
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1926 = root || new pc.ParticleSystemMain()
  var i1927 = data
  i1926.duration = i1927[0]
  i1926.loop = !!i1927[1]
  i1926.prewarm = !!i1927[2]
  i1926.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[3], i1926.startDelay)
  i1926.startDelayMultiplier = i1927[4]
  i1926.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[5], i1926.startLifetime)
  i1926.startLifetimeMultiplier = i1927[6]
  i1926.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[7], i1926.startSpeed)
  i1926.startSpeedMultiplier = i1927[8]
  i1926.startSize3D = !!i1927[9]
  i1926.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[10], i1926.startSize)
  i1926.startSizeMultiplier = i1927[11]
  i1926.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[12], i1926.startSizeX)
  i1926.startSizeXMultiplier = i1927[13]
  i1926.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[14], i1926.startSizeY)
  i1926.startSizeYMultiplier = i1927[15]
  i1926.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[16], i1926.startSizeZ)
  i1926.startSizeZMultiplier = i1927[17]
  i1926.startRotation3D = !!i1927[18]
  i1926.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[19], i1926.startRotation)
  i1926.startRotationMultiplier = i1927[20]
  i1926.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[21], i1926.startRotationX)
  i1926.startRotationXMultiplier = i1927[22]
  i1926.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[23], i1926.startRotationY)
  i1926.startRotationYMultiplier = i1927[24]
  i1926.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[25], i1926.startRotationZ)
  i1926.startRotationZMultiplier = i1927[26]
  i1926.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1927[27], i1926.startColor)
  i1926.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1927[28], i1926.gravityModifier)
  i1926.gravityModifierMultiplier = i1927[29]
  i1926.simulationSpace = i1927[30]
  request.r(i1927[31], i1927[32], 0, i1926, 'customSimulationSpace')
  i1926.simulationSpeed = i1927[33]
  i1926.useUnscaledTime = !!i1927[34]
  i1926.scalingMode = i1927[35]
  i1926.playOnAwake = !!i1927[36]
  i1926.maxParticles = i1927[37]
  i1926.emitterVelocityMode = i1927[38]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1928 = root || new pc.MinMaxCurve()
  var i1929 = data
  i1928.m_Mode = i1929[0]
  i1928.m_CurveMin = new pc.AnimationCurve( { keys_flow: i1929[1] } )
  i1928.m_CurveMax = new pc.AnimationCurve( { keys_flow: i1929[2] } )
  i1928.m_CurveMultiplier = i1929[3]
  i1928.m_ConstantMin = i1929[4]
  i1928.m_ConstantMax = i1929[5]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1930 = root || new pc.MinMaxGradient()
  var i1931 = data
  i1930.m_Mode = i1931[0]
  i1930.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1931[1], i1930.m_GradientMin)
  i1930.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1931[2], i1930.m_GradientMax)
  i1930.m_ColorMin = new pc.Color(i1931[3], i1931[4], i1931[5], i1931[6])
  i1930.m_ColorMax = new pc.Color(i1931[7], i1931[8], i1931[9], i1931[10])
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1933 = data
  i1932.mode = i1933[0]
  var i1935 = i1933[1]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1935[i + 0]) );
  }
  i1932.colorKeys = i1934
  var i1937 = i1933[2]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1937[i + 0]) );
  }
  i1932.alphaKeys = i1936
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1938 = root || new pc.ParticleSystemColorBySpeed()
  var i1939 = data
  i1938.enabled = !!i1939[0]
  i1938.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1939[1], i1938.color)
  i1938.range = new pc.Vec2( i1939[2], i1939[3] )
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1943 = data
  i1942.color = new pc.Color(i1943[0], i1943[1], i1943[2], i1943[3])
  i1942.time = i1943[4]
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1947 = data
  i1946.alpha = i1947[0]
  i1946.time = i1947[1]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemColorOverLifetime()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1949[1], i1948.color)
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemEmitter()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[1], i1950.rateOverTime)
  i1950.rateOverTimeMultiplier = i1951[2]
  i1950.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.rateOverDistance)
  i1950.rateOverDistanceMultiplier = i1951[4]
  var i1953 = i1951[5]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1953[i + 0]) );
  }
  i1950.bursts = i1952
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1956 = root || new pc.ParticleSystemBurst()
  var i1957 = data
  i1956.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1957[0], i1956.count)
  i1956.cycleCount = i1957[1]
  i1956.minCount = i1957[2]
  i1956.maxCount = i1957[3]
  i1956.repeatInterval = i1957[4]
  i1956.time = i1957[5]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1958 = root || new pc.ParticleSystemRotationBySpeed()
  var i1959 = data
  i1958.enabled = !!i1959[0]
  i1958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[1], i1958.x)
  i1958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[2], i1958.y)
  i1958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[3], i1958.z)
  i1958.xMultiplier = i1959[4]
  i1958.yMultiplier = i1959[5]
  i1958.zMultiplier = i1959[6]
  i1958.separateAxes = !!i1959[7]
  i1958.range = new pc.Vec2( i1959[8], i1959[9] )
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1960 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1961 = data
  i1960.enabled = !!i1961[0]
  i1960.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[1], i1960.x)
  i1960.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[2], i1960.y)
  i1960.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[3], i1960.z)
  i1960.xMultiplier = i1961[4]
  i1960.yMultiplier = i1961[5]
  i1960.zMultiplier = i1961[6]
  i1960.separateAxes = !!i1961[7]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1962 = root || new pc.ParticleSystemShape()
  var i1963 = data
  i1962.enabled = !!i1963[0]
  i1962.shapeType = i1963[1]
  i1962.randomDirectionAmount = i1963[2]
  i1962.sphericalDirectionAmount = i1963[3]
  i1962.randomPositionAmount = i1963[4]
  i1962.alignToDirection = !!i1963[5]
  i1962.radius = i1963[6]
  i1962.radiusMode = i1963[7]
  i1962.radiusSpread = i1963[8]
  i1962.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[9], i1962.radiusSpeed)
  i1962.radiusSpeedMultiplier = i1963[10]
  i1962.radiusThickness = i1963[11]
  i1962.angle = i1963[12]
  i1962.length = i1963[13]
  i1962.boxThickness = new pc.Vec3( i1963[14], i1963[15], i1963[16] )
  i1962.meshShapeType = i1963[17]
  request.r(i1963[18], i1963[19], 0, i1962, 'mesh')
  request.r(i1963[20], i1963[21], 0, i1962, 'meshRenderer')
  request.r(i1963[22], i1963[23], 0, i1962, 'skinnedMeshRenderer')
  i1962.useMeshMaterialIndex = !!i1963[24]
  i1962.meshMaterialIndex = i1963[25]
  i1962.useMeshColors = !!i1963[26]
  i1962.normalOffset = i1963[27]
  i1962.arc = i1963[28]
  i1962.arcMode = i1963[29]
  i1962.arcSpread = i1963[30]
  i1962.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[31], i1962.arcSpeed)
  i1962.arcSpeedMultiplier = i1963[32]
  i1962.donutRadius = i1963[33]
  i1962.position = new pc.Vec3( i1963[34], i1963[35], i1963[36] )
  i1962.rotation = new pc.Vec3( i1963[37], i1963[38], i1963[39] )
  i1962.scale = new pc.Vec3( i1963[40], i1963[41], i1963[42] )
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1964 = root || new pc.ParticleSystemSizeBySpeed()
  var i1965 = data
  i1964.enabled = !!i1965[0]
  i1964.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[1], i1964.size)
  i1964.sizeMultiplier = i1965[2]
  i1964.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[3], i1964.x)
  i1964.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[4], i1964.y)
  i1964.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[5], i1964.z)
  i1964.xMultiplier = i1965[6]
  i1964.yMultiplier = i1965[7]
  i1964.zMultiplier = i1965[8]
  i1964.separateAxes = !!i1965[9]
  i1964.range = new pc.Vec2( i1965[10], i1965[11] )
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1966 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1967 = data
  i1966.enabled = !!i1967[0]
  i1966.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[1], i1966.size)
  i1966.sizeMultiplier = i1967[2]
  i1966.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[3], i1966.x)
  i1966.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[4], i1966.y)
  i1966.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[5], i1966.z)
  i1966.xMultiplier = i1967[6]
  i1966.yMultiplier = i1967[7]
  i1966.zMultiplier = i1967[8]
  i1966.separateAxes = !!i1967[9]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1968 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1969 = data
  i1968.enabled = !!i1969[0]
  i1968.mode = i1969[1]
  i1968.animation = i1969[2]
  i1968.numTilesX = i1969[3]
  i1968.numTilesY = i1969[4]
  i1968.useRandomRow = !!i1969[5]
  i1968.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[6], i1968.frameOverTime)
  i1968.frameOverTimeMultiplier = i1969[7]
  i1968.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1969[8], i1968.startFrame)
  i1968.startFrameMultiplier = i1969[9]
  i1968.cycleCount = i1969[10]
  i1968.rowIndex = i1969[11]
  i1968.flipU = i1969[12]
  i1968.flipV = i1969[13]
  i1968.spriteCount = i1969[14]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1970 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1971 = data
  i1970.enabled = !!i1971[0]
  i1970.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1971[1], i1970.x)
  i1970.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1971[2], i1970.y)
  i1970.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1971[3], i1970.z)
  i1970.xMultiplier = i1971[4]
  i1970.yMultiplier = i1971[5]
  i1970.zMultiplier = i1971[6]
  i1970.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1971[7], i1970.speedModifier)
  i1970.speedModifierMultiplier = i1971[8]
  i1970.space = i1971[9]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1972 = root || new pc.ParticleSystemNoise()
  var i1973 = data
  i1972.enabled = !!i1973[0]
  i1972.separateAxes = !!i1973[1]
  i1972.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[2], i1972.strengthX)
  i1972.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[3], i1972.strengthY)
  i1972.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[4], i1972.strengthZ)
  i1972.strengthXMultiplier = i1973[5]
  i1972.strengthYMultiplier = i1973[6]
  i1972.strengthZMultiplier = i1973[7]
  i1972.frequency = i1973[8]
  i1972.damping = !!i1973[9]
  i1972.octaveCount = i1973[10]
  i1972.octaveMultiplier = i1973[11]
  i1972.octaveScale = i1973[12]
  i1972.quality = i1973[13]
  i1972.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[14], i1972.scrollSpeed)
  i1972.scrollSpeedMultiplier = i1973[15]
  i1972.remapEnabled = !!i1973[16]
  i1972.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[17], i1972.remapX)
  i1972.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[18], i1972.remapY)
  i1972.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[19], i1972.remapZ)
  i1972.remapXMultiplier = i1973[20]
  i1972.remapYMultiplier = i1973[21]
  i1972.remapZMultiplier = i1973[22]
  i1972.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[23], i1972.positionAmount)
  i1972.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[24], i1972.rotationAmount)
  i1972.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1973[25], i1972.sizeAmount)
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1974 = root || new pc.ParticleSystemInheritVelocity()
  var i1975 = data
  i1974.enabled = !!i1975[0]
  i1974.mode = i1975[1]
  i1974.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1975[2], i1974.curve)
  i1974.curveMultiplier = i1975[3]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1976 = root || new pc.ParticleSystemForceOverLifetime()
  var i1977 = data
  i1976.enabled = !!i1977[0]
  i1976.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1977[1], i1976.x)
  i1976.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1977[2], i1976.y)
  i1976.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1977[3], i1976.z)
  i1976.xMultiplier = i1977[4]
  i1976.yMultiplier = i1977[5]
  i1976.zMultiplier = i1977[6]
  i1976.space = i1977[7]
  i1976.randomized = !!i1977[8]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1978 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1979 = data
  i1978.enabled = !!i1979[0]
  i1978.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[1], i1978.limit)
  i1978.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[2], i1978.limitX)
  i1978.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[3], i1978.limitY)
  i1978.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[4], i1978.limitZ)
  i1978.limitMultiplier = i1979[5]
  i1978.limitXMultiplier = i1979[6]
  i1978.limitYMultiplier = i1979[7]
  i1978.limitZMultiplier = i1979[8]
  i1978.dampen = i1979[9]
  i1978.separateAxes = !!i1979[10]
  i1978.space = i1979[11]
  i1978.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1979[12], i1978.drag)
  i1978.dragMultiplier = i1979[13]
  i1978.multiplyDragByParticleSize = !!i1979[14]
  i1978.multiplyDragByParticleVelocity = !!i1979[15]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1981 = data
  i1980.enabled = !!i1981[0]
  request.r(i1981[1], i1981[2], 0, i1980, 'sharedMaterial')
  var i1983 = i1981[3]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 2) {
  request.r(i1983[i + 0], i1983[i + 1], 2, i1982, '')
  }
  i1980.sharedMaterials = i1982
  i1980.receiveShadows = !!i1981[4]
  i1980.shadowCastingMode = i1981[5]
  i1980.sortingLayerID = i1981[6]
  i1980.sortingOrder = i1981[7]
  i1980.lightmapIndex = i1981[8]
  i1980.lightmapSceneIndex = i1981[9]
  i1980.lightmapScaleOffset = new pc.Vec4( i1981[10], i1981[11], i1981[12], i1981[13] )
  i1980.lightProbeUsage = i1981[14]
  i1980.reflectionProbeUsage = i1981[15]
  request.r(i1981[16], i1981[17], 0, i1980, 'mesh')
  i1980.meshCount = i1981[18]
  i1980.activeVertexStreamsCount = i1981[19]
  i1980.alignment = i1981[20]
  i1980.renderMode = i1981[21]
  i1980.sortMode = i1981[22]
  i1980.lengthScale = i1981[23]
  i1980.velocityScale = i1981[24]
  i1980.cameraVelocityScale = i1981[25]
  i1980.normalDirection = i1981[26]
  i1980.sortingFudge = i1981[27]
  i1980.minParticleSize = i1981[28]
  i1980.maxParticleSize = i1981[29]
  i1980.pivot = new pc.Vec3( i1981[30], i1981[31], i1981[32] )
  request.r(i1981[33], i1981[34], 0, i1980, 'trailMaterial')
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1985 = data
  i1984.enabled = !!i1985[0]
  i1984.aspect = i1985[1]
  i1984.orthographic = !!i1985[2]
  i1984.orthographicSize = i1985[3]
  i1984.backgroundColor = new pc.Color(i1985[4], i1985[5], i1985[6], i1985[7])
  i1984.nearClipPlane = i1985[8]
  i1984.farClipPlane = i1985[9]
  i1984.fieldOfView = i1985[10]
  i1984.depth = i1985[11]
  i1984.clearFlags = i1985[12]
  i1984.cullingMask = i1985[13]
  i1984.rect = i1985[14]
  request.r(i1985[15], i1985[16], 0, i1984, 'targetTexture')
  return i1984
}

Deserializers["SimpleDuck"] = function (request, data, root) {
  var i1986 = root || request.c( 'SimpleDuck' )
  var i1987 = data
  i1986.testHit = !!i1987[0]
  request.r(i1987[1], i1987[2], 0, i1986, 'golfBall')
  request.r(i1987[3], i1987[4], 0, i1986, 'secondBall')
  request.r(i1987[5], i1987[6], 0, i1986, 'ballInteractionObject')
  request.r(i1987[7], i1987[8], 0, i1986, 'golfBallFinalLocation')
  request.r(i1987[9], i1987[10], 0, i1986, 'ballSinkLocation')
  i1986.golfBallDrag = i1987[11]
  i1986.golfBallRotateSpeed = i1987[12]
  i1986.golfBallRotateDrag = i1987[13]
  i1986.sinkTime = i1987[14]
  i1986.ballSpeed = i1987[15]
  i1986.speedFloor = i1987[16]
  request.r(i1987[17], i1987[18], 0, i1986, 'emojis')
  request.r(i1987[19], i1987[20], 0, i1986, 'mainCam')
  request.r(i1987[21], i1987[22], 0, i1986, 'camIntroStart')
  request.r(i1987[23], i1987[24], 0, i1986, 'camIntroFlagTop')
  request.r(i1987[25], i1987[26], 0, i1986, 'camIntroPanStart')
  request.r(i1987[27], i1987[28], 0, i1986, 'camIntroPanFinish')
  request.r(i1987[29], i1987[30], 0, i1986, 'camIntroPlay')
  i1986.camFovFin = i1987[31]
  request.r(i1987[32], i1987[33], 0, i1986, 'camFinLocation')
  request.r(i1987[34], i1987[35], 0, i1986, 'tubemanCamLocation')
  request.r(i1987[36], i1987[37], 0, i1986, 'struckOilCamLocation')
  i1986.camMoveSwitchValue = i1987[38]
  i1986.camTimeGameOver = i1987[39]
  request.r(i1987[40], i1987[41], 0, i1986, 'interactionUI')
  request.r(i1987[42], i1987[43], 0, i1986, 'chargeArrow')
  request.r(i1987[44], i1987[45], 0, i1986, 'startText')
  request.r(i1987[46], i1987[47], 0, i1986, 'startTextTransform')
  request.r(i1987[48], i1987[49], 0, i1986, 'finishText')
  request.r(i1987[50], i1987[51], 0, i1986, 'finishTextTransform')
  request.r(i1987[52], i1987[53], 0, i1986, 'icon')
  request.r(i1987[54], i1987[55], 0, i1986, 'title')
  request.r(i1987[56], i1987[57], 0, i1986, 'GolfClashBanner')
  i1986.uiTextBounceSpeed = i1987[58]
  i1986.uiTextScaleFactor = i1987[59]
  request.r(i1987[60], i1987[61], 0, i1986, 'finger')
  request.r(i1987[62], i1987[63], 0, i1986, 'fingerTransform')
  request.r(i1987[64], i1987[65], 0, i1986, 'holeInOne')
  request.r(i1987[66], i1987[67], 0, i1986, 'playNow')
  request.r(i1987[68], i1987[69], 0, i1986, 'playNowTransform')
  request.r(i1987[70], i1987[71], 0, i1986, 'flag')
  request.r(i1987[72], i1987[73], 0, i1986, 'flagFinLocation')
  request.r(i1987[74], i1987[75], 0, i1986, 'tubemanPrefab')
  request.r(i1987[76], i1987[77], 0, i1986, 'struckOilPrefab')
  request.r(i1987[78], i1987[79], 0, i1986, 'goalAnimAnimator')
  request.r(i1987[80], i1987[81], 0, i1986, 'goalAnimationObject')
  request.r(i1987[82], i1987[83], 0, i1986, 'golfClub')
  request.r(i1987[84], i1987[85], 0, i1986, 'secondGolfClub')
  request.r(i1987[86], i1987[87], 0, i1986, 'golfClubHitRot')
  i1986.hitspeed = i1987[88]
  request.r(i1987[89], i1987[90], 0, i1986, 'hitAngleBackground')
  i1986.hitAngle = i1987[91]
  request.r(i1987[92], i1987[93], 0, i1986, 'hitArrow')
  i1986.hitScale = i1987[94]
  request.r(i1987[95], i1987[96], 0, i1986, 'particleGoal')
  request.r(i1987[97], i1987[98], 0, i1986, 'landscape')
  request.r(i1987[99], i1987[100], 0, i1986, 'lvl2Transform')
  i1986.endCardTopText = i1987[101]
  i1986.endTextendYPos = i1987[102]
  i1986.endTextTweenTime = i1987[103]
  i1986.endTextclockwise = !!i1987[104]
  i1986.endTexteaseType = i1987[105]
  i1986.useCameraIntro = !!i1987[106]
  i1986.camIntroFlagTime = i1987[107]
  i1986.camIntoPanTime = i1987[108]
  i1986.introBanner = !!i1987[109]
  i1986.goalAnimationChoice = i1987[110]
  i1986.fingerTweenTime = i1987[111]
  return i1986
}

Deserializers["FontChanger"] = function (request, data, root) {
  var i1988 = root || request.c( 'FontChanger' )
  var i1989 = data
  i1988.fontSelection = i1989[0]
  var i1991 = i1989[1]
  var i1990 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1991.length; i += 2) {
  request.r(i1991[i + 0], i1991[i + 1], 1, i1990, '')
  }
  i1988.fontsTMP = i1990
  var i1993 = i1989[2]
  var i1992 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Font')))
  for(var i = 0; i < i1993.length; i += 2) {
  request.r(i1993[i + 0], i1993[i + 1], 1, i1992, '')
  }
  i1988.fontsText = i1992
  return i1988
}

Deserializers["LanguageSettings"] = function (request, data, root) {
  var i1996 = root || request.c( 'LanguageSettings' )
  var i1997 = data
  var i1999 = i1997[0]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 2) {
  request.r(i1999[i + 0], i1999[i + 1], 2, i1998, '')
  }
  i1996.UI_TMP = i1998
  var i2001 = i1997[1]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1996.UI_Text = i2000
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2007 = data
  i2006.pivot = new pc.Vec2( i2007[0], i2007[1] )
  i2006.anchorMin = new pc.Vec2( i2007[2], i2007[3] )
  i2006.anchorMax = new pc.Vec2( i2007[4], i2007[5] )
  i2006.sizeDelta = new pc.Vec2( i2007[6], i2007[7] )
  i2006.anchoredPosition3D = new pc.Vec3( i2007[8], i2007[9], i2007[10] )
  i2006.rotation = new pc.Quat(i2007[11], i2007[12], i2007[13], i2007[14])
  i2006.scale = new pc.Vec3( i2007[15], i2007[16], i2007[17] )
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2009 = data
  i2008.enabled = !!i2009[0]
  i2008.planeDistance = i2009[1]
  i2008.referencePixelsPerUnit = i2009[2]
  i2008.renderMode = i2009[3]
  i2008.renderOrder = i2009[4]
  i2008.sortingLayerName = i2009[5]
  i2008.sortingOrder = i2009[6]
  i2008.scaleFactor = i2009[7]
  request.r(i2009[8], i2009[9], 0, i2008, 'worldCamera')
  i2008.overrideSorting = !!i2009[10]
  i2008.pixelPerfect = !!i2009[11]
  i2008.targetDisplay = i2009[12]
  i2008.overridePixelPerfect = !!i2009[13]
  return i2008
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2010 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2011 = data
  i2010.m_UiScaleMode = i2011[0]
  i2010.m_ReferencePixelsPerUnit = i2011[1]
  i2010.m_ScaleFactor = i2011[2]
  i2010.m_ReferenceResolution = new pc.Vec2( i2011[3], i2011[4] )
  i2010.m_ScreenMatchMode = i2011[5]
  i2010.m_MatchWidthOrHeight = i2011[6]
  i2010.m_PhysicalUnit = i2011[7]
  i2010.m_FallbackScreenDPI = i2011[8]
  i2010.m_DefaultSpriteDPI = i2011[9]
  i2010.m_DynamicPixelsPerUnit = i2011[10]
  return i2010
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2013 = data
  i2012.m_IgnoreReversedGraphics = !!i2013[0]
  i2012.m_BlockingObjects = i2013[1]
  i2012.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2013[2] )
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2015 = data
  i2014.cullTransparentMesh = !!i2015[0]
  return i2014
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2016 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'm_Texture')
  i2016.m_UVRect = UnityEngine.Rect.MinMaxRect(i2017[2], i2017[3], i2017[4], i2017[5])
  request.r(i2017[6], i2017[7], 0, i2016, 'm_Material')
  i2016.m_Color = new pc.Color(i2017[8], i2017[9], i2017[10], i2017[11])
  i2016.m_RaycastTarget = !!i2017[12]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2019 = data
  i2018.enabled = !!i2019[0]
  request.r(i2019[1], i2019[2], 0, i2018, 'sharedMaterial')
  var i2021 = i2019[3]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 2) {
  request.r(i2021[i + 0], i2021[i + 1], 2, i2020, '')
  }
  i2018.sharedMaterials = i2020
  i2018.receiveShadows = !!i2019[4]
  i2018.shadowCastingMode = i2019[5]
  i2018.sortingLayerID = i2019[6]
  i2018.sortingOrder = i2019[7]
  i2018.lightmapIndex = i2019[8]
  i2018.lightmapSceneIndex = i2019[9]
  i2018.lightmapScaleOffset = new pc.Vec4( i2019[10], i2019[11], i2019[12], i2019[13] )
  i2018.lightProbeUsage = i2019[14]
  i2018.reflectionProbeUsage = i2019[15]
  i2018.color = new pc.Color(i2019[16], i2019[17], i2019[18], i2019[19])
  request.r(i2019[20], i2019[21], 0, i2018, 'sprite')
  i2018.flipX = !!i2019[22]
  i2018.flipY = !!i2019[23]
  i2018.drawMode = i2019[24]
  return i2018
}

Deserializers["BallInteraction"] = function (request, data, root) {
  var i2022 = root || request.c( 'BallInteraction' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, 'collider')
  request.r(i2023[2], i2023[3], 0, i2022, 'reticle')
  request.r(i2023[4], i2023[5], 0, i2022, 'outerArrows')
  i2022.reticleRotationModifier = i2023[6]
  i2022.outerArrowRotationModifier = i2023[7]
  i2022.outerArrowScaleFloor = i2023[8]
  i2022.outerArrowScaleModifier = i2023[9]
  request.r(i2023[10], i2023[11], 0, i2022, 'simpleDuckScript')
  request.r(i2023[12], i2023[13], 0, i2022, 'startBall')
  request.r(i2023[14], i2023[15], 0, i2022, 'actionBall')
  request.r(i2023[16], i2023[17], 0, i2022, 'mainCam')
  i2022.speedModifierVertical = i2023[18]
  i2022.speedModifierHorizontal = i2023[19]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2025 = data
  i2024.mass = i2025[0]
  i2024.drag = i2025[1]
  i2024.angularDrag = i2025[2]
  i2024.useGravity = !!i2025[3]
  i2024.isKinematic = !!i2025[4]
  i2024.constraints = i2025[5]
  i2024.maxAngularVelocity = i2025[6]
  i2024.collisionDetectionMode = i2025[7]
  i2024.interpolation = i2025[8]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2027 = data
  i2026.enabled = !!i2027[0]
  i2026.isTrigger = !!i2027[1]
  request.r(i2027[2], i2027[3], 0, i2026, 'material')
  i2026.center = new pc.Vec3( i2027[4], i2027[5], i2027[6] )
  i2026.radius = i2027[7]
  return i2026
}

Deserializers["DetectObjectEnteringHitbox"] = function (request, data, root) {
  var i2028 = root || request.c( 'DetectObjectEnteringHitbox' )
  var i2029 = data
  i2028.ballInPosition = !!i2029[0]
  request.r(i2029[1], i2029[2], 0, i2028, 'partSys')
  request.r(i2029[3], i2029[4], 0, i2028, 'chargeCanvas')
  request.r(i2029[5], i2029[6], 0, i2028, 'aimCanvas')
  return i2028
}

Deserializers["ArrowBackAndForth"] = function (request, data, root) {
  var i2030 = root || request.c( 'ArrowBackAndForth' )
  var i2031 = data
  i2030.speed = i2031[0]
  i2030.rotationMax = i2031[1]
  return i2030
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.UI.Image' )
  var i2033 = data
  request.r(i2033[0], i2033[1], 0, i2032, 'm_Sprite')
  i2032.m_Type = i2033[2]
  i2032.m_PreserveAspect = !!i2033[3]
  i2032.m_FillCenter = !!i2033[4]
  i2032.m_FillMethod = i2033[5]
  i2032.m_FillAmount = i2033[6]
  i2032.m_FillClockwise = !!i2033[7]
  i2032.m_FillOrigin = i2033[8]
  i2032.m_UseSpriteMesh = !!i2033[9]
  i2032.m_PixelsPerUnitMultiplier = i2033[10]
  request.r(i2033[11], i2033[12], 0, i2032, 'm_Material')
  i2032.m_Color = new pc.Color(i2033[13], i2033[14], i2033[15], i2033[16])
  i2032.m_RaycastTarget = !!i2033[17]
  return i2032
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2034 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2035 = data
  i2034.m_hasFontAssetChanged = !!i2035[0]
  var i2037 = i2035[1]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 2) {
  request.r(i2037[i + 0], i2037[i + 1], 2, i2036, '')
  }
  i2034.m_subTextObjects = i2036
  request.r(i2035[2], i2035[3], 0, i2034, 'm_baseMaterial')
  i2034.m_maskOffset = new pc.Vec4( i2035[4], i2035[5], i2035[6], i2035[7] )
  i2034.m_text = i2035[8]
  i2034.m_isRightToLeft = !!i2035[9]
  request.r(i2035[10], i2035[11], 0, i2034, 'm_fontAsset')
  request.r(i2035[12], i2035[13], 0, i2034, 'm_sharedMaterial')
  var i2039 = i2035[14]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 2) {
  request.r(i2039[i + 0], i2039[i + 1], 2, i2038, '')
  }
  i2034.m_fontSharedMaterials = i2038
  request.r(i2035[15], i2035[16], 0, i2034, 'm_fontMaterial')
  var i2041 = i2035[17]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 2) {
  request.r(i2041[i + 0], i2041[i + 1], 2, i2040, '')
  }
  i2034.m_fontMaterials = i2040
  i2034.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2035[18], i2035[19], i2035[20], i2035[21])
  i2034.m_fontColor = new pc.Color(i2035[22], i2035[23], i2035[24], i2035[25])
  i2034.m_enableVertexGradient = !!i2035[26]
  i2034.m_colorMode = i2035[27]
  i2034.m_fontColorGradient = request.d('TMPro.VertexGradient', i2035[28], i2034.m_fontColorGradient)
  request.r(i2035[29], i2035[30], 0, i2034, 'm_fontColorGradientPreset')
  request.r(i2035[31], i2035[32], 0, i2034, 'm_spriteAsset')
  i2034.m_tintAllSprites = !!i2035[33]
  i2034.m_overrideHtmlColors = !!i2035[34]
  i2034.m_faceColor = UnityEngine.Color32.ConstructColor(i2035[35], i2035[36], i2035[37], i2035[38])
  i2034.m_outlineColor = UnityEngine.Color32.ConstructColor(i2035[39], i2035[40], i2035[41], i2035[42])
  i2034.m_fontSize = i2035[43]
  i2034.m_fontSizeBase = i2035[44]
  i2034.m_fontWeight = i2035[45]
  i2034.m_enableAutoSizing = !!i2035[46]
  i2034.m_fontSizeMin = i2035[47]
  i2034.m_fontSizeMax = i2035[48]
  i2034.m_fontStyle = i2035[49]
  i2034.m_textAlignment = i2035[50]
  i2034.m_characterSpacing = i2035[51]
  i2034.m_wordSpacing = i2035[52]
  i2034.m_lineSpacing = i2035[53]
  i2034.m_lineSpacingMax = i2035[54]
  i2034.m_paragraphSpacing = i2035[55]
  i2034.m_charWidthMaxAdj = i2035[56]
  i2034.m_enableWordWrapping = !!i2035[57]
  i2034.m_wordWrappingRatios = i2035[58]
  i2034.m_overflowMode = i2035[59]
  i2034.m_firstOverflowCharacterIndex = i2035[60]
  request.r(i2035[61], i2035[62], 0, i2034, 'm_linkedTextComponent')
  i2034.m_isLinkedTextComponent = !!i2035[63]
  i2034.m_isTextTruncated = !!i2035[64]
  i2034.m_enableKerning = !!i2035[65]
  i2034.m_enableExtraPadding = !!i2035[66]
  i2034.checkPaddingRequired = !!i2035[67]
  i2034.m_isRichText = !!i2035[68]
  i2034.m_parseCtrlCharacters = !!i2035[69]
  i2034.m_isOrthographic = !!i2035[70]
  i2034.m_isCullingEnabled = !!i2035[71]
  i2034.m_ignoreRectMaskCulling = !!i2035[72]
  i2034.m_ignoreCulling = !!i2035[73]
  i2034.m_horizontalMapping = i2035[74]
  i2034.m_verticalMapping = i2035[75]
  i2034.m_uvLineOffset = i2035[76]
  i2034.m_geometrySortingOrder = i2035[77]
  i2034.m_VertexBufferAutoSizeReduction = !!i2035[78]
  i2034.m_firstVisibleCharacter = i2035[79]
  i2034.m_useMaxVisibleDescender = !!i2035[80]
  i2034.m_pageToDisplay = i2035[81]
  i2034.m_margin = new pc.Vec4( i2035[82], i2035[83], i2035[84], i2035[85] )
  i2034.m_textInfo = request.d('TMPro.TMP_TextInfo', i2035[86], i2034.m_textInfo)
  i2034.m_isUsingLegacyAnimationComponent = !!i2035[87]
  i2034.m_isVolumetricText = !!i2035[88]
  request.r(i2035[89], i2035[90], 0, i2034, 'm_spriteAnimator')
  request.r(i2035[91], i2035[92], 0, i2034, 'm_Material')
  i2034.m_Color = new pc.Color(i2035[93], i2035[94], i2035[95], i2035[96])
  i2034.m_RaycastTarget = !!i2035[97]
  return i2034
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2044 = root || request.c( 'TMPro.VertexGradient' )
  var i2045 = data
  i2044.topLeft = new pc.Color(i2045[0], i2045[1], i2045[2], i2045[3])
  i2044.topRight = new pc.Color(i2045[4], i2045[5], i2045[6], i2045[7])
  i2044.bottomLeft = new pc.Color(i2045[8], i2045[9], i2045[10], i2045[11])
  i2044.bottomRight = new pc.Color(i2045[12], i2045[13], i2045[14], i2045[15])
  return i2044
}

Deserializers["TMPro.TMP_TextInfo"] = function (request, data, root) {
  var i2046 = root || request.c( 'TMPro.TMP_TextInfo' )
  var i2047 = data
  request.r(i2047[0], i2047[1], 0, i2046, 'textComponent')
  i2046.characterCount = i2047[2]
  i2046.spriteCount = i2047[3]
  i2046.spaceCount = i2047[4]
  i2046.wordCount = i2047[5]
  i2046.linkCount = i2047[6]
  i2046.lineCount = i2047[7]
  i2046.pageCount = i2047[8]
  i2046.materialCount = i2047[9]
  return i2046
}

Deserializers["tweenText"] = function (request, data, root) {
  var i2048 = root || request.c( 'tweenText' )
  var i2049 = data
  return i2048
}

Deserializers["AnimateEmojis"] = function (request, data, root) {
  var i2050 = root || request.c( 'AnimateEmojis' )
  var i2051 = data
  request.r(i2051[0], i2051[1], 0, i2050, 'emojiAnimator')
  request.r(i2051[2], i2051[3], 0, i2050, 'emojiImage')
  request.r(i2051[4], i2051[5], 0, i2050, 'buttonImage')
  request.r(i2051[6], i2051[7], 0, i2050, 'shotTextGO')
  i2050.duration = i2051[8]
  i2050.easeType = i2051[9]
  i2050.emojiAnimationChoice = i2051[10]
  i2050.tweenInTime = i2051[11]
  i2050.sustainTime = i2051[12]
  i2050.tweenOutTime = i2051[13]
  i2050.shotText = i2051[14]
  var i2053 = i2051[15]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 2) {
  request.r(i2053[i + 0], i2053[i + 1], 2, i2052, '')
  }
  i2050.footballFume = i2052
  var i2055 = i2051[16]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 2) {
  request.r(i2055[i + 0], i2055[i + 1], 2, i2054, '')
  }
  i2050.footballClap = i2054
  var i2057 = i2051[17]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 2, i2056, '')
  }
  i2050.CowgirlAwkward = i2056
  var i2059 = i2051[18]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 2) {
  request.r(i2059[i + 0], i2059[i + 1], 2, i2058, '')
  }
  i2050.CowgirlPleasant = i2058
  var i2061 = i2051[19]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 2, i2060, '')
  }
  i2050.GolfySobbing = i2060
  var i2063 = i2051[20]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 2, i2062, '')
  }
  i2050.GolfyThumbsUp = i2062
  var i2065 = i2051[21]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 2) {
  request.r(i2065[i + 0], i2065[i + 1], 2, i2064, '')
  }
  i2050.texanNo = i2064
  var i2067 = i2051[22]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 2) {
  request.r(i2067[i + 0], i2067[i + 1], 2, i2066, '')
  }
  i2050.texanNod = i2066
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.type = i2071[1]
  i2070.color = new pc.Color(i2071[2], i2071[3], i2071[4], i2071[5])
  i2070.cullingMask = i2071[6]
  i2070.intensity = i2071[7]
  i2070.range = i2071[8]
  i2070.spotAngle = i2071[9]
  i2070.shadows = i2071[10]
  i2070.shadowNormalBias = i2071[11]
  i2070.shadowBias = i2071[12]
  i2070.shadowStrength = i2071[13]
  i2070.lightmapBakeType = i2071[14]
  i2070.renderMode = i2071[15]
  request.r(i2071[16], i2071[17], 0, i2070, 'cookie')
  i2070.cookieSize = i2071[18]
  return i2070
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'm_FirstSelected')
  i2072.m_sendNavigationEvents = !!i2073[2]
  i2072.m_DragThreshold = i2073[3]
  return i2072
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2074 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2075 = data
  i2074.m_HorizontalAxis = i2075[0]
  i2074.m_VerticalAxis = i2075[1]
  i2074.m_SubmitButton = i2075[2]
  i2074.m_CancelButton = i2075[3]
  i2074.m_InputActionsPerSecond = i2075[4]
  i2074.m_RepeatDelay = i2075[5]
  i2074.m_ForceModuleActive = !!i2075[6]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2077 = data
  i2076.name = i2077[0]
  i2076.atlasId = i2077[1]
  i2076.mipmapCount = i2077[2]
  i2076.hdr = !!i2077[3]
  i2076.size = i2077[4]
  i2076.anisoLevel = i2077[5]
  i2076.filterMode = i2077[6]
  i2076.wrapMode = i2077[7]
  var i2079 = i2077[8]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 4) {
    i2078.push( UnityEngine.Rect.MinMaxRect(i2079[i + 0], i2079[i + 1], i2079[i + 2], i2079[i + 3]) );
  }
  i2076.rects = i2078
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2083 = data
  i2082.name = i2083[0]
  i2082.index = i2083[1]
  i2082.startup = !!i2083[2]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2085 = data
  i2084.ambientIntensity = i2085[0]
  i2084.reflectionIntensity = i2085[1]
  i2084.ambientMode = i2085[2]
  i2084.ambientLight = new pc.Color(i2085[3], i2085[4], i2085[5], i2085[6])
  i2084.ambientSkyColor = new pc.Color(i2085[7], i2085[8], i2085[9], i2085[10])
  i2084.ambientGroundColor = new pc.Color(i2085[11], i2085[12], i2085[13], i2085[14])
  i2084.ambientEquatorColor = new pc.Color(i2085[15], i2085[16], i2085[17], i2085[18])
  i2084.fogColor = new pc.Color(i2085[19], i2085[20], i2085[21], i2085[22])
  i2084.fogEndDistance = i2085[23]
  i2084.fogStartDistance = i2085[24]
  i2084.fogDensity = i2085[25]
  i2084.fog = !!i2085[26]
  request.r(i2085[27], i2085[28], 0, i2084, 'skybox')
  i2084.fogMode = i2085[29]
  var i2087 = i2085[30]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2087[i + 0]) );
  }
  i2084.lightmaps = i2086
  i2084.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2085[31], i2084.lightProbes)
  i2084.lightmapsMode = i2085[32]
  i2084.environmentLightingMode = i2085[33]
  i2084.ambientProbe = new pc.SphericalHarmonicsL2(i2085[34])
  request.r(i2085[35], i2085[36], 0, i2084, 'customReflection')
  request.r(i2085[37], i2085[38], 0, i2084, 'defaultReflection')
  i2084.defaultReflectionMode = i2085[39]
  i2084.defaultReflectionResolution = i2085[40]
  i2084.sunLightObjectId = i2085[41]
  i2084.pixelLightCount = i2085[42]
  i2084.defaultReflectionHDR = !!i2085[43]
  i2084.hasLightDataAsset = !!i2085[44]
  i2084.hasManualGenerate = !!i2085[45]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2091 = data
  request.r(i2091[0], i2091[1], 0, i2090, 'lightmapColor')
  request.r(i2091[2], i2091[3], 0, i2090, 'lightmapDirection')
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2092 = root || new UnityEngine.LightProbes()
  var i2093 = data
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2101 = data
  i2100.name = i2101[0]
  var i2103 = i2101[1]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2103[i + 0]) );
  }
  i2100.passes = i2102
  var i2105 = i2101[2]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2105[i + 0]) );
  }
  i2100.defaultParameterValues = i2104
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2108 = root || new pc.UnityShaderPass()
  var i2109 = data
  i2108.passType = i2109[0]
  i2108.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[1], i2108.zTest)
  i2108.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[2], i2108.zWrite)
  i2108.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[3], i2108.culling)
  i2108.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2109[4], i2108.blending)
  i2108.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2109[5], i2108.alphaBlending)
  i2108.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[6], i2108.colorWriteMask)
  i2108.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[7], i2108.offsetUnits)
  i2108.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[8], i2108.offsetFactor)
  i2108.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[9], i2108.stencilRef)
  i2108.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[10], i2108.stencilReadMask)
  i2108.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2109[11], i2108.stencilWriteMask)
  i2108.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2109[12], i2108.stencilOp)
  i2108.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2109[13], i2108.stencilOpFront)
  i2108.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2109[14], i2108.stencilOpBack)
  var i2111 = i2109[15]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2111[i + 0]) );
  }
  i2108.tags = i2110
  var i2113 = i2109[16]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2113[i + 0]) );
  }
  i2108.variants = i2112
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2115 = data
  i2114.val = i2115[0]
  i2114.name = i2115[1]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2117 = data
  i2116.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[0], i2116.src)
  i2116.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[1], i2116.dst)
  i2116.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[2], i2116.op)
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2119 = data
  i2118.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2119[0], i2118.pass)
  i2118.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2119[1], i2118.fail)
  i2118.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2119[2], i2118.zFail)
  i2118.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2119[3], i2118.comp)
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.value = i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2127 = data
  var i2129 = i2127[0]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( i2129[i + 0] );
  }
  i2126.keywords = i2128
  i2126.vertexProgram = i2127[1]
  i2126.fragmentProgram = i2127[2]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2135 = data
  i2134.name = i2135[0]
  i2134.type = i2135[1]
  i2134.value = new pc.Vec4( i2135[2], i2135[3], i2135[4], i2135[5] )
  i2134.textureValue = i2135[6]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2137 = data
  i2136.name = i2137[0]
  request.r(i2137[1], i2137[2], 0, i2136, 'texture')
  i2136.aabb = i2137[3]
  i2136.vertices = i2137[4]
  i2136.triangles = i2137[5]
  i2136.textureRect = UnityEngine.Rect.MinMaxRect(i2137[6], i2137[7], i2137[8], i2137[9])
  i2136.packedRect = UnityEngine.Rect.MinMaxRect(i2137[10], i2137[11], i2137[12], i2137[13])
  i2136.border = new pc.Vec4( i2137[14], i2137[15], i2137[16], i2137[17] )
  i2136.transparency = i2137[18]
  i2136.bounds = i2137[19]
  i2136.pixelsPerUnit = i2137[20]
  i2136.textureWidth = i2137[21]
  i2136.textureHeight = i2137[22]
  i2136.nativeSize = new pc.Vec2( i2137[23], i2137[24] )
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2139 = data
  i2138.name = i2139[0]
  i2138.wrapMode = i2139[1]
  i2138.isLooping = !!i2139[2]
  i2138.length = i2139[3]
  var i2141 = i2139[4]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2141[i + 0]) );
  }
  i2138.curves = i2140
  var i2143 = i2139[5]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2143[i + 0]) );
  }
  i2138.events = i2142
  i2138.halfPrecision = !!i2139[6]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2147 = data
  i2146.path = i2147[0]
  i2146.componentType = i2147[1]
  i2146.property = i2147[2]
  i2146.keys = i2147[3]
  var i2149 = i2147[4]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2149[i + 0]) );
  }
  i2146.objectReferenceKeys = i2148
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2153 = data
  i2152.time = i2153[0]
  request.r(i2153[1], i2153[2], 0, i2152, 'value')
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2157 = data
  i2156.functionName = i2157[0]
  i2156.floatParameter = i2157[1]
  i2156.intParameter = i2157[2]
  i2156.stringParameter = i2157[3]
  request.r(i2157[4], i2157[5], 0, i2156, 'objectReferenceParameter')
  i2156.time = i2157[6]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2159 = data
  i2158.name = i2159[0]
  i2158.ascent = i2159[1]
  i2158.lineHeight = i2159[2]
  i2158.fontSize = i2159[3]
  var i2161 = i2159[4]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2161[i + 0]) );
  }
  i2158.characterInfo = i2160
  request.r(i2159[5], i2159[6], 0, i2158, 'texture')
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2165 = data
  i2164.index = i2165[0]
  i2164.advance = i2165[1]
  i2164.bearing = i2165[2]
  i2164.glyphWidth = i2165[3]
  i2164.glyphHeight = i2165[4]
  i2164.minX = i2165[5]
  i2164.maxX = i2165[6]
  i2164.minY = i2165[7]
  i2164.maxY = i2165[8]
  i2164.uvBottomLeftX = i2165[9]
  i2164.uvBottomLeftY = i2165[10]
  i2164.uvBottomRightX = i2165[11]
  i2164.uvBottomRightY = i2165[12]
  i2164.uvTopLeftX = i2165[13]
  i2164.uvTopLeftY = i2165[14]
  i2164.uvTopRightX = i2165[15]
  i2164.uvTopRightY = i2165[16]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2167 = data
  i2166.name = i2167[0]
  var i2169 = i2167[1]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2169[i + 0]) );
  }
  i2166.states = i2168
  var i2171 = i2167[2]
  var i2170 = []
  for(var i = 0; i < i2171.length; i += 1) {
    i2170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2171[i + 0]) );
  }
  i2166.layers = i2170
  var i2173 = i2167[3]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2173[i + 0]) );
  }
  i2166.parameters = i2172
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2177 = data
  i2176.cycleOffset = i2177[0]
  i2176.cycleOffsetParameter = i2177[1]
  i2176.cycleOffsetParameterActive = !!i2177[2]
  i2176.mirror = !!i2177[3]
  i2176.mirrorParameter = i2177[4]
  i2176.mirrorParameterActive = !!i2177[5]
  i2176.motionId = i2177[6]
  i2176.nameHash = i2177[7]
  i2176.fullPathHash = i2177[8]
  i2176.speed = i2177[9]
  i2176.speedParameter = i2177[10]
  i2176.speedParameterActive = !!i2177[11]
  i2176.tag = i2177[12]
  i2176.name = i2177[13]
  i2176.writeDefaultValues = !!i2177[14]
  var i2179 = i2177[15]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2179[i + 0]) );
  }
  i2176.transitions = i2178
  var i2181 = i2177[16]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 2, i2180, '')
  }
  i2176.behaviours = i2180
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2185 = data
  i2184.fullPath = i2185[0]
  i2184.canTransitionToSelf = !!i2185[1]
  i2184.duration = i2185[2]
  i2184.exitTime = i2185[3]
  i2184.hasExitTime = !!i2185[4]
  i2184.hasFixedDuration = !!i2185[5]
  i2184.interruptionSource = i2185[6]
  i2184.offset = i2185[7]
  i2184.orderedInterruption = !!i2185[8]
  i2184.destinationStateNameHash = i2185[9]
  i2184.destinationStateMachineId = i2185[10]
  i2184.isExit = !!i2185[11]
  i2184.mute = !!i2185[12]
  i2184.solo = !!i2185[13]
  var i2187 = i2185[14]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2187[i + 0]) );
  }
  i2184.conditions = i2186
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2193 = data
  i2192.mode = i2193[0]
  i2192.parameter = i2193[1]
  i2192.threshold = i2193[2]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2197 = data
  i2196.blendingMode = i2197[0]
  i2196.defaultWeight = i2197[1]
  i2196.name = i2197[2]
  i2196.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2197[3], i2196.stateMachine)
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2199 = data
  i2198.id = i2199[0]
  i2198.defaultStateNameHash = i2199[1]
  var i2201 = i2199[2]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2201[i + 0]) );
  }
  i2198.entryTransitions = i2200
  var i2203 = i2199[3]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2203[i + 0]) );
  }
  i2198.anyStateTransitions = i2202
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2207 = data
  i2206.destinationStateNameHash = i2207[0]
  i2206.destinationStateMachineId = i2207[1]
  i2206.isExit = !!i2207[2]
  i2206.mute = !!i2207[3]
  i2206.solo = !!i2207[4]
  var i2209 = i2207[5]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2209[i + 0]) );
  }
  i2206.conditions = i2208
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2213 = data
  i2212.defaultBool = !!i2213[0]
  i2212.defaultFloat = i2213[1]
  i2212.defaultInt = i2213[2]
  i2212.name = i2213[3]
  i2212.nameHash = i2213[4]
  i2212.type = i2213[5]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2215 = data
  i2214.name = i2215[0]
  i2214.bytes64 = i2215[1]
  i2214.data = i2215[2]
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2217 = data
  var i2219 = i2217[0]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 1) {
    i2218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2219[i + 0]) );
  }
  i2216.files = i2218
  i2216.componentToPrefabIds = i2217[1]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2223 = data
  i2222.path = i2223[0]
  request.r(i2223[1], i2223[2], 0, i2222, 'unityObject')
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2225 = data
  var i2227 = i2225[0]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2227[i + 0]) );
  }
  i2224.scriptsExecutionOrder = i2226
  var i2229 = i2225[1]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2229[i + 0]) );
  }
  i2224.sortingLayers = i2228
  var i2231 = i2225[2]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2231[i + 0]) );
  }
  i2224.cullingLayers = i2230
  i2224.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2225[3], i2224.timeSettings)
  i2224.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2225[4], i2224.physicsSettings)
  i2224.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2225[5], i2224.physics2DSettings)
  i2224.removeShadows = !!i2225[6]
  i2224.autoInstantiatePrefabs = !!i2225[7]
  i2224.enableAutoInstancing = !!i2225[8]
  i2224.lightmapEncodingQuality = i2225[9]
  i2224.desiredColorSpace = i2225[10]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.value = i2235[1]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2239 = data
  i2238.id = i2239[0]
  i2238.name = i2239[1]
  i2238.value = i2239[2]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2243 = data
  i2242.id = i2243[0]
  i2242.name = i2243[1]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2245 = data
  i2244.fixedDeltaTime = i2245[0]
  i2244.maximumDeltaTime = i2245[1]
  i2244.timeScale = i2245[2]
  i2244.maximumParticleTimestep = i2245[3]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2247 = data
  i2246.gravity = new pc.Vec3( i2247[0], i2247[1], i2247[2] )
  i2246.defaultSolverIterations = i2247[3]
  i2246.autoSyncTransforms = !!i2247[4]
  i2246.autoSimulation = !!i2247[5]
  var i2249 = i2247[6]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2249[i + 0]) );
  }
  i2246.collisionMatrix = i2248
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2253 = data
  i2252.enabled = !!i2253[0]
  i2252.layerId = i2253[1]
  i2252.otherLayerId = i2253[2]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'material')
  i2254.gravity = new pc.Vec2( i2255[2], i2255[3] )
  i2254.positionIterations = i2255[4]
  i2254.velocityIterations = i2255[5]
  i2254.velocityThreshold = i2255[6]
  i2254.maxLinearCorrection = i2255[7]
  i2254.maxAngularCorrection = i2255[8]
  i2254.maxTranslationSpeed = i2255[9]
  i2254.maxRotationSpeed = i2255[10]
  i2254.timeToSleep = i2255[11]
  i2254.linearSleepTolerance = i2255[12]
  i2254.angularSleepTolerance = i2255[13]
  i2254.defaultContactOffset = i2255[14]
  i2254.autoSimulation = !!i2255[15]
  i2254.queriesHitTriggers = !!i2255[16]
  i2254.queriesStartInColliders = !!i2255[17]
  i2254.callbacksOnDisable = !!i2255[18]
  i2254.reuseCollisionCallbacks = !!i2255[19]
  i2254.autoSyncTransforms = !!i2255[20]
  var i2257 = i2255[21]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 1) {
    i2256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2257[i + 0]) );
  }
  i2254.collisionMatrix = i2256
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2261 = data
  i2260.enabled = !!i2261[0]
  i2260.layerId = i2261[1]
  i2260.otherLayerId = i2261[2]
  return i2260
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2262 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2263 = data
  i2262.xPlacement = i2263[0]
  i2262.yPlacement = i2263[1]
  i2262.xAdvance = i2263[2]
  i2262.yAdvance = i2263[3]
  return i2262
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"lineHeight":2,"fontSize":3,"characterInfo":4,"texture":5},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[13],"57":[21],"58":[39],"59":[39],"60":[39],"61":[39],"62":[39],"63":[39],"64":[39],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[21],"80":[12],"81":[82],"83":[82],"29":[25],"84":[25],"85":[33,25],"32":[29],"42":[33,25],"86":[25],"31":[29],"87":[25],"88":[25],"89":[25],"90":[25],"91":[25],"92":[25],"93":[25],"94":[25],"95":[33,25],"34":[33,25],"96":[25],"97":[25],"98":[25],"99":[25],"100":[33,25],"101":[25],"102":[45],"103":[45],"46":[45],"104":[45],"105":[21],"106":[21],"107":[25],"108":[33,25],"109":[12,10],"110":[33,25],"111":[33,25],"112":[12,10,33,25],"28":[25,33],"113":[25]}

Deserializers.types = ["UnityEngine.Shader","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.Font","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.SkinnedMeshRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","oilAnimFix","UnityEngine.GameObject","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","SimpleDuck","AnimateEmojis","UnityEngine.RectTransform","FontChanger","LanguageSettings","TMPro.TextMeshProUGUI","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","BallInteraction","DetectObjectEnteringHitbox","UnityEngine.Rigidbody","UnityEngine.SphereCollider","ArrowBackAndForth","UnityEngine.UI.Image","tweenText","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.UIElements.StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.3.7f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.GolfClash";

Deserializers.disableAntiAliasing = false;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

