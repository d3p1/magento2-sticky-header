/**
 * @description Sticky effect
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
define(['jquery', 'jquery-ui-modules/widget', 'sticky'], function ($) {
    'use strict'

    $.widget('d3p1.sticky', $.mage.sticky, {
        /**
         * Create
         *
         * @private
         */
        _create: function () {
            /**
             * @note Add relative position style to element
             * @note The sticky element has to be relative positioned
             * @link https://devdocs.magento.com/guides/v2.4/javascript-dev-guide/widgets/widget_sticky.html
             */
            this.element.css('position', 'relative')
            this.element.css('z-index', 99)

            /**
             * @note Set body height to auto
             * @note It is necessary to allow the sticky script
             *       calculate the total height of the document
             * @note If body has an other height value,
             *       it won't be possible to determine the
             *       total height of the document
             */
            $('body').css('height', 'auto')

            this._super()
        },
    })

    return $.d3p1.sticky
})
