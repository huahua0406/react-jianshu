import { createGlobalStyle } from 'styled-components';

export const GlobalIconfont = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1551282453129'); /* IE9 */
        src: url('./iconfont.eot?t=1551282453129#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQAAAsAAAAACEAAAAOxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDYIM7ATYCJAMUCwwABCAFhG0HSBtHB8gehXEsLBShXb2BvL2LoFr+vmd37zj2EbIKKmYdokU9IVEoEAaLAmGRGAVGUpTnJyHjz+dZL+ggXSMrjYBkoeKndbrpHyFd6Lx7AngbSKcFdBoRLu53iyjCiDq4pi7F8+xtLt9rqkjaKADHAxpYRFoBDTBANlGewvBal7GfQDVvO+I8LiUHXBTmsEDcGnQqcMmolYbc0AltxdwinkGhS49kN4Cn4PPxC7ziQtJk5tjrm1gtRHy5fsqkKqcr7fUYQE5nBL+IjA2gEHeV5ltUFN5AqervaMdA1UnSl+uHbR/8PmVOT6NJDqSq1h8eWVIE0TKzh8AxjRS+XB2EzNc2hMSXH0Lheyb1LIc0oGIEjwA+KXf2bkkrKeNzaaIXOWZmuHTTyoKcmhEYHs4hcnKJsTFeHuW4dErlSCZfOypdCKp+QS4u4e40b87J5e9e3UoU7tRwRcLQGD86yrXrODKS2zYWjs6cvitbgbXHcJXh4dlMf0YOY1Lu2n12FXNuyU5VlfI0QI36zpzqJWSel4OLQnKf3YLK28rTTQTxu3rXrufu9kjy+LNnx8mICvOliBp6YoKu2RN9edyRqZ/ulAqbtqvT09O55rbsBSZTtKTVos5OpI1bvB4CzxCvcLqqrYGQX0PT6dAhOV8YGrroSikOg/QiUGz6yrr+tZPT6/KY5atGZfL+PdJByvfvy/7T3btPyZTj3j2oF+IHNscMoFnT6uhRY1h6LhmlNoSN0eNhdtwS4E4oTtzELZxh5j5lckTQu/087lq6cHzZht8bVkEAwH+5v6lDHP9a+6n9vunWUz/7O14+Ou4dmB3y30VZwMe5wYUo+185kB8A/phSZ/LXkh1rikabmqYolQ6heBo7fpwiqfGK/7BPeDGNdRokxtAJJCAZMAdZZ4FZuBvQ6DmAVucIqnXxi3smSShRBrHmKIEw5iEkI94gG9PDLNzn0JjxHVpjoaDqx/w1e5ZiYKIlpMJIy6qLWINGtAq2DjNhbhbS5ZlVUpoOeByS7AYf6+nmkY/FIyuSpphgz9d5YSywgiRa2DhyGDKbRdYmiUakwW56jG1B7u5C1YPcNKIFGGckiAqGaLHUirAMNERWgtccYwrvz4Lo5DFTkRqqquIcRGJnaJ/lyY1HB2a8wtqp6lY62+XT8YJhAjNIIBFZsOJgRMxWWMSyVfcyQjQwN/oBQZsg7rSR0FXhtrzK8o5boDLv1USKHCWaaJV7m8FKqg0z7UglafQ7PHdoRFsRGakCAAAAAA==') format('woff2'),
        url('./iconfont.woff?t=1551282453129') format('woff'),
        url('./iconfont.ttf?t=1551282453129') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1551282453129#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .iconspin:before {
        content: "\e851";
    }

    .iconbi:before {
        content: "\e62b";
    }

    .iconsearch-1-copy:before {
        content: "\e609";
    }

    .iconAa:before {
        content: "\e636";
    }
`;


export default GlobalIconfont
