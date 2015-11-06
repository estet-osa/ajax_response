<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>

    <xsl:template match="/" >
        <div class="menu">
            <ul class="list">
                <xsl:apply-templates match="/items/item" />
            </ul>
        </div>
    </xsl:template>

    <xsl:template match="items/item">
        <li>
            <a>
                <xsl:attribute name="href">
                    <xsl:value-of select="@link" />
                </xsl:attribute>
                <xsl:attribute name="id">
                    <xsl:value-of select="@id" />
                </xsl:attribute>
                <xsl:value-of select="text()" />
            </a>
        </li>
    </xsl:template>

</xsl:stylesheet>
